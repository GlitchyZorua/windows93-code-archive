le._apps.wpong = {
	exec: ()=> {
		let keys = {};
		let p1 = $window({
			dockable: false,
			onclose: ()=>{},
			width: 100,
			height: 300,
			left: 50,
			top: 50,
			resizable: false,
			maximizable: false,
			draggable: false
		});
		let p2 = $window({
			dockable: false,
			onclose: ()=>{},
			onready: ()=>{
				document.addEventListener('keydown', (event)=>{
					if (!keys[event.key]) {
						if (event.key=="w") {
							keys[event.key] = setInterval(()=>{
								p1.el.base.style.top = parseInt(p1.el.base.style.top)-20+"px";
							},50);
						};
						if(event.key=="s"){
							keys[event.key] = setInterval(()=>{
								p1.el.base.style.top = parseInt(p1.el.base.style.top)+20+"px";
							},50);
						};
						if (event.key=="ArrowUp") {
							keys[event.key] = setInterval(()=>{
								p2.el.base.style.top = parseInt(p2.el.base.style.top)-20+"px";
							},50);
						};
						if(event.key=="ArrowDown"){
							keys[event.key] = setInterval(()=>{
								p2.el.base.style.top = parseInt(p2.el.base.style.top)+20+"px";
							},50);
						};
					};
				});
				document.addEventListener('keyup', (event)=>{
					if(keys[event.key]) {
						clearInterval(keys[event.key]);
						delete keys[event.key];
					};
				});
			},
			width: 100,
			height: 300,
			left: window.innerWidth-160,
			top: 50,
			resizable: false,
			maximizable: false,
			draggable: false
		});
		let ball = $window({
			dockable: false,
			width: 100,
			height: 100,
			left: 500,
			top: 50,
			resizable: false,
			maximizable: false,
			header: false,
			draggable: false
		});
	},
	name: "Pong"
};
$exe("wpong");