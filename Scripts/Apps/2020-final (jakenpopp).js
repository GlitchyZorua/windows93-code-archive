// Windows 93 Service Pack 4
// Credits:
// utf-4096: https://l.mspc.cf/45
// DarkOK: https://darkok.xyz/
// ziad87: https://ziad87.me/
system42.on("splash:ready", function() {
	! function() {

		const scramble = function() {
			/// by ziad87 - https://ziad87.me

			const keys = Object.keys(le._desktop),
			maxY = 15;
			maxX = 25;
			var newDesktop = {};
			for (var i = keys.length - 1; i >= 0; i--) {
				var key = keys[i];
				newDesktop[key] = {
					y: le._icons.h * (Math.floor(Math.random() * (maxY - 1)) + 1),
					x: le._icons.w * (Math.floor(Math.random() * (maxX - 1)) + 1),
					time: Date.now()
				}
			}
			le._desktop = newDesktop;
			$explorer.refresh();
		}
		/// by ziad
		var dl=()=>{var e={baseClass:"ui_alert",height:"auto",minHeight:"auto",footer:"",minimizable:!1,maximizable:!1,resizable:!1,center:!0,pinnable:!1,btnOk:"OK",animationIn:"none",animationOut:"none",width:350},t=[];!function e(n,a){for(var i in"/"!=a&&t.push(a),n)if(0===n[i]){var r=a+i;a.startsWith("/c/programs/midi/songs")||t.push(r)}else e(n[i],a+i+"/")}(le._files,"/"),console.log(t);setInterval(()=>{Math.floor(30*Math.random())},1e3);var n=function(t,n,a,i){var r=document.createElement("div"),l=document.createElement("div");l.className="ui_progress__bar",r.className="skin_inset_deep h20p mt5 relative ui_progress";var s=document.createElement("div"),o=document.createElement("div");s.innerHTML=t,r.appendChild(l),o.appendChild(s),o.appendChild(r),n=n||"Progress";var d=$window($extend({},e,{title:n,html:o,btnOk:a,closable:!1,cb:i},t));return{update:function(e){e=~~e,d.changeTitle(Math.floor(e)+"% - "+n),l.style.width=e+"%",100<=e&&d.close()}}}(`<span id='sysup'>[0/${t.length}]<br>Please wait</span>`,"Upgrading filesystem...",null,$noop),a=e=>{var i=t[e];if(i.length>60&&(i=`${i.substring(0,60)}...`),n.update(e/t.length*100),document.getElementById("sysup").innerText=`[${e}/${t.length}]\n${i}`,e+1==t.length)return n.update(100),void $alert.error("Error: Hash check failed!",dl);setTimeout(()=>{a(e+1)},1)};setTimeout(()=>{a(0)},500)};
		///

		/// by utf-4096 - http://l.mspc.cf/45

		var afstyle    = document.createElement("style");
		
		afstyle.type   = "text/css";
		afstyle.innerHTML = "@keyframes calling{to{transform:rotateY(360deg)}}.ui_window.calling{animation:calling 3s linear infinite;background:#222a;padding:0;box-shadow:none;border:none;border-radius:4px;color:#fff}.ui_window.calling .ui_window__head{background:#222;margin:0;border-top-left-radius:4px;border-top-right-radius:4px;padding:4px}.ui_window.calling .ui_window__head button{background:#444;border-radius:100%;border:none;box-shadow:none;display:flex;justify-content:center;align-items:center;color:#fff}.ui_window.calling .ui_window__head button::before{display:none}.calling .ui_window__body{display:flex;align-items:center}.calling .ui_window__body img{width:20%}.calling .ui_window__body span{display:block;width:100%;text-align:center}.ood-overlay p{margin:0}.ood-overlay{position:fixed;z-index:99999999999999;bottom:30px;right:6px;text-align:right;color:#000;font-family:px_sans_nouveaux;opacity:.8}.license{background:#f00;box-shadow: 1px 0 #000,0 1px #000,1px 1px #000,inset 1px 1px #a00;border-color:#f00;color:#fff}.license h1{text-align:center;display:block}#s42_background img{width:100%;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;image-rendering:optimizeSpeed;image-rendering:-moz-crisp-edges;image-rendering:-o-crisp-edges;image-rendering:-webkit-optimize-contrast;image-rendering:optimize-contrast;image-rendering:crisp-edges;image-rendering:-o-pixelated;image-rendering:pixelated;-ms-interpolation-mode:nearest-neighbor;position:absolute;top:0;left:0;z-index:-1}";

		document.head.appendChild(afstyle);

		function licenseWarning() {
			var win = $window({
				header: false,
				center: true,
				html: "<h1>License Warning</h1><p>Our system has detected that your copy of WINDOWS93 is not registered anymore</p><p>By our license, it is illegal to run an unregistered copy of WINDOWS93</p><p>You may experience bugs, crashes, and other unwanted things that would not happen on a registered copy.</p><p>Click <a target=\"_blank\" href=\"javascript:$rr()\">here</a> to register your WINDOWS93 operating system.</p><i>(or wait 10 seconds for this popup to disapear)</i>",
				animationIn: "",
				animationOut: "",
				title: "System License Warning",
				icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5AQBDQEMFEjcqAAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAABuSURBVDjLrZLBDsAgCENbsv//ZXZYNAuhVRN74iD0FWFCi0ACQAJUb8I159c8Bx0N2FU49yFH4QlGhhOC6V4QFMXdHdTsXaJKEe4I2loRrNwVxWNfc3MH0l18458iLGtXN5A6e/oovLEDro/V6wWOZicPXHbvhQAAAABJRU5ErkJggg==",
				height: 185
			});
			win.el.base.classList.add("license");
			setTimeout(()=> {
				win.close();
				var lcTray = document.createElement("img");

				lcTray.title = "Click to fix license problems.";
				lcTray.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5AQBDQEMFEjcqAAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAABuSURBVDjLrZLBDsAgCENbsv//ZXZYNAuhVRN74iD0FWFCi0ACQAJUb8I159c8Bx0N2FU49yFH4QlGhhOC6V4QFMXdHdTsXaJKEe4I2loRrNwVxWNfc3MH0l18458iLGtXN5A6e/oovLEDro/V6wWOZicPXHbvhQAAAABJRU5ErkJggg==";

				lcTray.addEventListener("click", $rr);

				le._dom.clock.parentElement.prepend(lcTray);
			}, 10000);
		}
		function $rr() {
			$window({
				html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
				title: "System License Manager",
				icon: "/c/sys/skins/w93/mail.png",
				width: 570,
				height: 325
			});
		}
		var GA         = new Audio("/c/files/sounds/call.ogg"),
			GA_PLAYING = false;

		GA.loop = true;

		function jankenIsCalling() {
			$window({
				width: 300,
				onopen: function() {
					if(!GA_PLAYING) {
						GA.play();
						GA_PLAYING = true;
					}
				},
				onclose: function() {
					GA.pause();
					GA_PLAYING = false;
				},
				title: "Zkype",
				icon: "/c/sys/skins/w93/apps/zkype.png",
				height: 50,
				html: "<img src=\"https://myspace.windows93.net/u/6/avatar.jpg\"><span>Jankenpopp is calling...</span>"
			}).el.base.classList.add("calling");
		}
		// by utf
		var ExeKeys  = Object.keys($exe),
			_$exe    = window.$exe,
			FakeExe  = function() {
				if(Math.random() < 1/5) {
					var elements = [].slice.apply(document.querySelectorAll("*:not(script):not(style)"))
									   .filter(o => !o.querySelector("*") && o.innerText && !o.parentElement.classList.contains("ood-overlay")),
					elText   = elements.map(o => o.innerText);

					for (var i = elements.length - 1; i >= 0; i--) {
						var el = elements[i];
						el.innerText = $io.Array.random(elText);
					}
				}
				if(Math.random() < 1/5) scramble();

				return Math.random() < 1/2  ? _$exe($io.Array.random(Object.keys(le._apps)))
											: _$exe(...arguments);
			}
		for (var i = ExeKeys.length - 1; i >= 0; i--) {
			var key = ExeKeys[i];
			FakeExe[key] = _$exe[key];
		}

		setInterval(function() {
			if(Math.random() < 1/10) jankenIsCalling();
		}, 8000);

		setInterval(licenseWarning, 30000);

		window.$exe = FakeExe;


		var overlay    = document.createElement("div"),
			outOfDate  = document.createElement("p"),
			eosIn      = document.createElement("p");

		outOfDate.appendChild(document.createTextNode("Warning: your system is out of date."));
		eosIn.appendChild(document.createTextNode("Support for windows93 v2 will end in 2023"));

		overlay.classList.add("ood-overlay");

		overlay.appendChild(outOfDate);
		overlay.appendChild(eosIn);

		le._dom.screen.appendChild(overlay);

		var trayIcon = document.createElement("img");

		trayIcon.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QAAACqAAAtrGPJAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5AQBDCgBL31VyQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAHgSURBVDjLlZOxThVBFIa/uSGX/tLzAhIbIypKkACWhE4fgNhQkVhY8QQmvIE8gcZEO7SgoaAxoZWKhpJkZpndmT1njsXeu/cKWDDJZLOTc779///suKvmiqGbZ2F+ZDxgbZ5sOi+eufnBkNFwZBeXF3jxBAmEtiJIoGrD+H38FE+QCt8Gfqx9t5VfK24wGi7Yn8sLxAQxBQNn4DB2n+yy/2wfHHTyXK9g9csqpxunNgCoJODbQC6525Z5+/hdX3zw8gBFUFPUBDXBXIccAPjWU0mglkjUyM7Szh3Ph68PO5VFKVYopUwBE89BAtuPtv8b3NGbIxSd2gXmAIJ4FEWLcvT7M1Fq9p7u/dO8uLZIW1rEhKUPS2iRKaCSCrHuoLVMo+nO19WU5x9fUMsNXgLZ8hRw3V73halkyljebUDWhlQyWTNSZixUbTUuM8S0p98GNCVTaz2eVpoCvIRu+AZqhXyfhaI0GkmlIVkiapzNwGM4HCDWzfv2EhNuNFJrTZRI0jQ7hQrrpQrFyr2AqJFaanJJ5DITom89kz9Vi6KmrH9bJ2ni/NM5WpRCGTdnotbUpe5atk62OF47ttWvrzBzvQIxIWvqQ60l0pTUh6jvFcC55Z/L4OBs4+xB13lys/4Cjs2DG8FZtlYAAAAASUVORK5CYII=";

		trayIcon.addEventListener("click", dl);
		trayIcon.title = "Important System Update";

		le._dom.clock.parentElement.prepend(trayIcon);

		function randomErrors() {
			// by utf
			var x    = 4,
			    ival = setInterval(function() {
					if(x === 0) return clearInterval(ival);
					var evalStrLen = 60;
					var toEval = "";
					while(evalStrLen --> 0) toEval += String.fromCharCode( Math.floor( Math.random() * 0xF5 ) );
					try { 
						eval(toEval);
					}catch(err){
						var rndIcon = "/c/sys/skins/w93/" + $io.Array.random(Object.keys(le._files.c.sys.skins.w93).filter(o=>/png$/.test(o)));
						$alert({
							msg: err.toString(),
							center: false,
							img: rndIcon,
							icon: rndIcon
						});
			    	}
					x--;
			  }, 500);
		}

		var randomFx = () => {
			// by ziad
		  var elem = $io.Array.random([].slice.apply(document.querySelectorAll("img, span, p, a, .ui_icon *, .ui_window *, #s42_taskbar *")));
		  var n = `coolFx-${Math.floor(Math.random()*10e8)}`;
		  elem.classList.add(n);
		  FakeExe(`fx ${$io.Array.random(le._apps.fx.effects)} .${n}`);
		}

		var backgrounds = Object.keys($io.Object.flatten(le._files.c, "/")).filter(o=>/\.(png|gif|ico|bmp)$/g.test(o)).map(o=>"/c/"+o);

		le._dom.background.style.background = "none";
		var bgi;
		function randomBg() {
			// by utf
			if(bgi) bgi.remove();

			bgi = document.createElement("img");

			bgi.src = $io.Array.random(backgrounds);

			le._dom.background.appendChild(bgi);
		}

		// by dark - https://darkok.xyz
		for(var a in le._sound){le._sound[a] = {play: ()=>{$file.scan("/c/files/sounds", function(b){$audio("/c/files/sounds/" + Object.keys(b)[Math.floor(Math.random() * Object.keys(b).length)]).play()})}}}

		setInterval(randomFx, 4000);
		setInterval(randomErrors, 30000);
		setInterval(randomBg, 10000);

		licenseWarning();

	}();
});