function i(){
	//
}
le._apps.hl3.exec = function(){
	$alert({msg:'Steam doesn\'t work on lockdown.',baseClass:e,title:'LOCKDOWN'})
}
le._apps.terminal.exec = function(){
	$alert({msg:'The terminal can be a threat and won\'t run on lockdown.',baseClass:e,title:'LOCKDOWN'})
}
le._apps.doctor.exec = function(){
	$alert({msg:'he is sick.',baseClass:e,title:'LOCKDOWN'})
}
le._apps.killall.exec = function(){
	$alert({msg:'if you try to kill something, lockdown will still be active.',baseClass:e,title:'LOCKDOWN'})
}
le._apps.hydra.exec = function(){
  function s(){
	$alert({msg:'I mean, we can allow some things on lockdown.',center:false,baseClass:e,title:'LOCKDOWN'},function(){s();s();})
  };
  s()
}
le._apps.starwars.exec = function(){
	$window({baseClass:e,url:'https://www.youtube.com/embed/y8AFMqqnbaI',title:'LOCKDOWN'})
}
le._apps.gravity.exec = function(){
	$alert({msg:'No.',baseClass:e,title:'LOCKDOWN'})
}
le._apps.trollbox.exec = function(){
  $store.set('.config/trollbox/nick','LOCKDOWN ' + $store.get('.config/trollbox/nick'))
	$window({baseClass:e,url:'/trollbox/',width:640,height:400,onopen:function(){this.el.iframe.contentWindow.setPseudo = function(lel){}}})
}
var e ='ui_alert lockdown'
function meow(d){
	if(d=='defrag'){
    	var f = new Audio('/c/programs/defrag/3310.ogg')
        f.play()
        f.loop = true
    }
  	if(d=='hydra'){
    	$exe('hydra')
    }
  	if(d=='freedom'){
    	$alert({baseClass:e,msg:'acidbox works now',title:'LOCKDOWN'})
        le._apps.acidbox.exec = function(){
        	$window({baseClass:e,url:'/c/programs/acidBox93/index.html',title:'LOCKDOWN'})
        }
    }
  	if(d=='host'){
       $window({baseClass:e,url:'http://www.kelipilk.com/',title:'LOCKDOWN'})
    }
}
setInterval(function(){
$io.arr.all(document.querySelectorAll(".ui_window:not(.lockdown)"), function(el) {
          $window.destroy(el);
});
},20)
$alert({title:'LOCKDOWN',baseClass:e,closable:false,msg:'Your computer is on lockdown.',ondestroy:i,onclose(){
	$prompt({title:'LOCKDOWN',msg:'pass?',btnCancel:false,closable:false,baseClass:e,ondestroy:i},'',function(ok,dat){
      meow(dat)
    	$prompt({title:'LOCKDOWN',msg:'nope. pass?',btnCancel:false,closable:false,baseClass:e,ondestroy:i},'',function(ok,dat){
          meow(dat)
				$prompt({title:'LOCKDOWN',msg:'last chance. pass?',btnCancel:false,closable:false,baseClass:e,ondestroy:i},'',function(ok,dat){
                  meow(dat)
    				$alert({baseClass:e,msg:'Heh. Have you tried turning it off and on again?',ondestroy:i,title:'LOCKDOWN',closable:false,btnOk:false})
    			})
        })
    })
}})