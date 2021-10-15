var I = 0;
var $desktop = le._dom.desktop;
function moveWin() {
    var instances = $window.instances.filter(o => o); // don't ask
    instances.forEach(function(win, nst){
        win.el.base.style.top = $desktop.clientHeight / 2 - win.el.base.clientHeight / 2 + Math.sin(I/128+nst) * 64 + "px";
        var off = 0;
        for(var i = 0; i < instances.length; i++) off += instances[i].el.base.clientWidth / 3;
        win.el.base.style.left = (I % ($desktop.clientWidth + off)) - off + nst * 48 + "px";
    });
    I+=.5;
    requestAnimationFrame(moveWin);
    
}
requestAnimationFrame(moveWin);