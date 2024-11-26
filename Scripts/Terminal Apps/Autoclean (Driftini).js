let cleanlist = []

le._apps["autoclean"] = {
    name: "AutoClean",
    categories: "Utility",
    exec: function() {
        var options = this.arg.options
        var args = this.arg.arguments.toString().replace(",", " ")
        
        function help() {
            $log("<p style='color:gold'>|| AutoClean 1.0 Help ||</p>")
            $log("Available options:")
            $log("--help | displays this help screen")
            $log("-a [PATH] | adds [PATH] to the clean list")
            $log("-r [PATH] | removes [PATH] from the clean list")
            $log("-c | clears the clean list")
            $log("-v | views current clean list")
            $log("Preset-related options:")
            $log("--pull | pulls recommended presets from GitHub")
            $log("--save [NAME] | saves clean list in /a/.config/autoclean/presets/[NAME].json")
            $log("--load [NAME] | loads /a/.config/autoclean/presets/[NAME].json as preset")
        }
        function error() {
            $log.error("Invalid syntax.")
        }
        function write() {
            $db.set(".config/autoclean/clean.json", cleanlist)
        }

        if (options != undefined) {
            $file.open("/a/.config/autoclean/clean.json", "String", (file) => {
                cleanlist = JSON.parse(file)
                if (options.help) {
                    help()
                } else if (options.a) {
                    if (args.length > 0) {
                        cleanlist.push(args)
                        write()
                    }
                    else error()
                } else if (options.r) {
                    if (args.length > 0) {
                        cleanlist = cleanlist.filter(e => e !== args)
                        write()
                    }
                    else error()
                } else if (options.c) {
                    cleanlist = []
                    write()
                } else if (options.v) {
                    $log(cleanlist)
                } else if (options.pull) {
                    try {
                        fetch("https://raw.githubusercontent.com/Driftini/93Tweaks/master/apps/autoclean/presets/pullscript.js")
                            .then(res => res.text()) .then(data => $exe("js " + data))
                    } catch (e) {
                        $log.error("Pulling failed.")
                        $log.error(e)
                    }
                } else if (options.save) {
                    if (args.length > 0) {
                        $file.copy("/a/.config/autoclean/clean.json", "/a/.config/autoclean/presets/" + args + ".json", file => {
                            $file.rename(file, args + ".json")
                        })
                    } else error()
                } else if (options.load) {
                    if (args.length > 0) {
                        $file.copy("/a/.config/autoclean/presets/" + args + ".json", "/a/.config/autoclean/clean.json", file => {
                            $file.rename(file, "clean.json")
                        })
                    } else error()
                } else error()
            })
        } else {
            help()
        }
    }
}

system42.on("splash:ready", function() {
    $file.open("/a/.config/autoclean/clean.json", "String", (file) => {
        JSON.parse(file).forEach((value) => {
            $file.delete(value)
            console.log(value + " deleted.")
        })
        $explorer.refresh()
    })
})
