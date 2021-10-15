var e = true;
le._apps.doctor.exec = function(){
	setInterval(function(){$alert({msg:'HAHAHHAHAHHAH',center:false})},500)
    //omg hax
}
$alert({msg:'You already know the drill. Your computer is... um... messed up with the MEMZ virus. <font color="red"><b>So dispose of it.',baseClass:'ui_alert startUp'})
setTimeout(function(){
setInterval(function(){
	$exe('fx invert')
    $exe('fx invert .startUp')
},1000)
},2000)
setInterval(function(){
	$alert({msg:'Still using this computer?',center:!1})
},10000)

setInterval(function(){
	[function(){$exe('https://youareanidiot.org')},function(){$exe('https://google.co.ck')},function(){$exe('defrag')},function(){$exe('/c/sys/skins/')}][Math.round(Math.random()*3)]()
},25000)

setTimeout(function(){
setInterval(function(){
	[function(){$exe('layer /c/sys/skins/w93/error.png')},function(){$exe('layer /c/sys/skins/w93/alert.png')}][Math.round(Math.random())]()
},2000)
},5000)
setTimeout(function(){
setInterval(function(){
	var e = new Audio(['/c/sys/sounds/CHORD.ogg','/c/sys/sounds/QUACK.ogg'][Math.round(Math.random())])
    e.play()
},1500)
},7500)

setTimeout(function(){
setInterval(function(){
   var image = new Image();
      image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BiY9N-7eIFvCm77325gU25NbyaXnSD9gYXWQH-wWQcWSl_Ey';
      image.className = 'app_imageviewer__img';
  image.width = 200;
  image.height = 200;
  	  image.onload = function(){
	$window.call('', {
          header: false,
      	animationIn:'none',
          maximizable: false,
          resizable: false,
          draggable: false,
          contextmenuOnBody: false,
      	  dockable:false,
          center: false, baseClass: 'ui_desktop_layer',
          baseHeight: image.height,
          baseWidth: image.width,
          html: image
    })
      }
},15000)
},20000)