var SIF = {};

SIF.toCanvas = function(uint8, width_override, tk) {
	const width = width_override ? width_override : uint8[0];
	const height = Math.round((uint8.length/3 - 1) / width);
	const data = uint8.slice(1);
	let canvas = document.createElement('canvas');
	let ctx = canvas.getContext('2d');
	canvas.width = width;
	canvas.height = height;

	if(tk) tk = tk.split(',').map(color => parseInt(color, 10));
	let image_data = ctx.createImageData(width, height);
	let imgd = image_data.data;
	let idx = 0;

	for (var i = 0; i < data.length; i += 3) {
		let r = data[i],
			g = data[i + 1],
			b = data[i + 2];

		let a = 255;

		if(tk && r === tk[0] && g === tk[1] && b === tk[2]) {
			a = 0;
		}

		imgd[idx] = r;
		imgd[idx + 1] = g;
		imgd[idx + 2] = b;
		imgd[idx + 3] = a;

		idx += 4;
	}

	ctx.putImageData(image_data, 0, 0);
	return canvas;
}

SIF.toSIF = function(image, transparency_key) {
	let canvas = document.createElement('canvas');
	canvas.width = image.naturalWidth;
	canvas.height = image.naturalHeight;
	let ctx = canvas.getContext('2d');
	ctx.drawImage(image, 0, 0);
	if(transparency_key) transparency_key = transparency_key.split(',').map(color => parseInt(color, 10));
	let data = ctx.getImageData(0, 0, image.naturalWidth, image.naturalHeight).data;
	let sif = [image.naturalWidth];
	for (var i = 0; i < data.length; i += 4) {
		let r = data[i],
			g = data[i + 1],
			b = data[i + 2],
			a = data[i + 3];

		if(a === 0 && transparency_key) {
			r = transparency_key[0];
			g = transparency_key[1];
			b = transparency_key[2];
		}

		sif.push(r, g, b);
	}

	return new Uint8Array(sif);
}

le._apps.sif = {
	terminal: true,
	hascli: true,
	exec: function() {
		let log = this.that.silent ? $noop: this.cli.log;
		let done = this.done || $noop;
		let opt = this.arg.options;
		let arg = this.arg.arguments;

		if(!opt || opt.help) {
			log('      -=-= SIF Conversion Tool =-=-    ');
			log('---------------------------------------');
			log(' Convert to SIF: -s &lt;input> &lt;output>  ');
			log(' <i>(optional) Transparency key: -t=r,g,b</i>');
			log(' Convert from SIF: -i &lt;input> &lt;output>');
			log(' <i>(optional) Force width: -w=&lt;width></i>');
			log(' <i>(optional) Transparency key: -t=r,g,b</i>');
			log(' <i>note: outputs a PNG</i>                 ');
			log(' ');
			log('---------------------------------------');
		} else if(opt.s) {
			// To SIF
			if(!arg[0]) return log('(error) sif: input required');
			if(!arg[1]) return log('(error) sif: output required');

			if($fs.utils.exist(arg[0]) !== false) {
				log('(wait) reading file');
				$file.open(arg[0], 'Blob', blob => {
					let url = window.URL.createObjectURL(blob);
					let image = document.createElement('img');

					image.src = url;
					image.addEventListener('load', _ => {
						log('(ok) image loaded');
						let start = Date.now();
						let uint8 = SIF.toSIF(image, opt.t);
						log(`(info) SIF.toSIF(): took ${Date.now() - start}ms.`);
						let split = arg[1].split('.');
						let path = opt.W ? `${split.slice(0, -1).join('.')}.${image.width.toString(24)}.${split[split.length-1]}` : arg[1];
						$file.save(path, new Blob([ uint8 ]), function() {
							done();
						});
					});
				});
			} else {
				log('(error) sif: no such file or directory: ' + arg[0]);
			}
		} else if(opt.i) {
			// From SIF
			if(!arg[0]) return log('(error) sif: input required');
			if(!arg[1]) return log('(error) sif: output required');

			if($fs.utils.exist(arg[0]) !== false) {
				log('(wait) reading file');
				$file.open(arg[0], 'ArrayBuffer', abuf => {
					let uint8 = new Uint8Array(abuf);
					let start = Date.now();
					let canvas = SIF.toCanvas(uint8, opt.w, opt.t);
					log(`(info) SIF.toCanvas(): took ${Date.now() - start}ms.`);
					canvas.toBlob(blob => {
						$file.save(arg[1], blob, function() {
							done();
						});
					});
				});
			} else {
				log('(error) sif: no such file or directory: ' + arg[0]);
			}
		}
	}
}

le._get.ext.apps.sif = ['sifvwr'];

le._apps.sifvwr = {
	name: 'SIF Viewer',
	icon: $fs.utils.normalizeIcon('mime/image.png'),
	exec: function() {
		let path = this.arg && this.arg.arguments.join(' ');
		let tmp_path = `/a/tmp/SIFVWR${Math.random().toString(36).slice(5)}.png`;
		let split = path.split('.');
		let guessed_width = parseInt(split[split.length - 2], 24);

		if(path) {
			le._apps.sif.exec.call({
				that: { silent: true },
				arg: {
					options: { i: true, w: !isNaN(guessed_width) ? guessed_width: false },
					arguments: [path, tmp_path]
				},
				done: function() {
					$exe(`img ${tmp_path}`);
					$file.delete(tmp_path);
				}
			});
		}
	}
}