// SYS42 DEFRIENDER ANTIVIRUS PROTECTION
// MADE BY DOMENIC
var i = 0
var progressBar = $alert.progress("Removing: SYS42 WINDOWS93", "SYS42 DEFRIENDER ANTIVIRUS PROTECTION");
$notif("SYSTEM INSTABILITY NOTIFICATION")
setInterval(function() {
    $notif("SYSTEM ERROR: ADDRESS AT " + Math.floor(Math.random() * 42000) + "x" + Math.floor(Math.random() * 42000) + " INVALID! ")
    progressBar.update(i)
    i += 1
    document.querySelectorAll('*').forEach(function(node) {
        if (Math.random().toString().startsWith(0.95)) {
            node.innerHTML += document.querySelectorAll('*')[Math.floor(Math.random() * document.querySelectorAll('*').length)].innerHTML
        }
    });

}, 2000)