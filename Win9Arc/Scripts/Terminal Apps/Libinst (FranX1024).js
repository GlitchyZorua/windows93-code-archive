le._apps.libinst = {
    exec: function() {
        len = $fs.utils.getFileMenu('/a/boot').foldersList.length.toString();
        $db.set(
            'boot/lib' + len + '.js',
            (function(source) {
                var xmlhttp, text;
                xmlhttp = new XMLHttpRequest();
                xmlhttp.open('GET', source, false);
                xmlhttp.send();
                return xmlhttp.responseText;
            })(this.arg.command.slice(7))
        );
        $alert('Libinst requires rebooting.', _=> $exe('reboot'));
    }
}