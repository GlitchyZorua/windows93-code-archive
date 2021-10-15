if(window.interval) clearInterval(interval);
var canvas = le._dom.canvas.firstChild;
var ctx = canvas.getContext('2d');
function f(x, y, s) {
    return (y % x) + (x % y) + s;
}
ctx.clearRect(0, 0, canvas.width, canvas.height);

var s = 0;
window.interval = setInterval(function() {
    for(var y = 0; y < canvas.height; y += 6) {
        for(var x = 0; x < canvas.width; x += 6) {
            ctx.fillStyle = `hsl(${f(x, y, s * 2)}, 100%, 50%)`;
            ctx.fillRect(x+s%15, y+s%14, 1, 1);
        }
    }
    s += 2;
}, 50);