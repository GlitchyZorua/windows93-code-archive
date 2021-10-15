var tipspath = "boot"

function tips() {
	$file.getUrl("/a/" + tipspath + "/index.html", function(url) {
		$window({
			title: "Welcome",
			minimizable: false,
			maximizable: false,
			center: true,
			resizable: false,
			width: 484,
			height: 250,
			animationIn: "none",
			url: url
		})
	})
}


top.$file.open("/a/" + tipspath + "/config.json","String",function(e){
	config = JSON.parse(e);
	if (config.boot) {
		tips()
	}
})

le._apps["tips"] = {
	name: "Tips",
	icon: "//win98icons.alexmeub.com/icons/png/tip.png",
	cats: ['Windows 94', 'Accessories'],
	exec: tips
}
