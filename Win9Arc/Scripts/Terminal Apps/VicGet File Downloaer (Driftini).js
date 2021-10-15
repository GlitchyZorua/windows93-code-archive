le._apps.vicget = {
    exec: function() {
        let args = this.arg.arguments;
        try {
            if (args[0].length >= 1 && args[1].length >= 1) {
                let url = new XMLHttpRequest();
                url.open("GET", args[0], false);
                url.send(null);
                $store.set(args[1], url.responseText)
                $log.cyan("Output saved in <b>/a/" + args[1] + "</b>")
            }
        } catch {
            $log.red("Invalid syntax. Usage: 'vicget [input url] [output file path]")
        }
    },
    hascli: true,
    terminal: true
}