if(window.interval) clearInterval(interval);
var windows = [];
for(var i = 1; i < 70; i++) {
    let win = $window({
        left: i * 10,
        top: 300 + Math.sin(i/10)*200,
        width: 10,
        height: 10,
        animationIn: '',
        animationOut: ''
    });
    windows.push(win);
}

var I = 0;

var interval = setInterval(function() {
    windows.forEach((w,i) => {
        w.el.base.style.top = `${300+Math.sin(i/10+I)*200}px`;
    });
  I += 0.05;
}, 1000 / 60);