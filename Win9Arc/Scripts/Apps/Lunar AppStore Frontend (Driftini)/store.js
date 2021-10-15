var Lunar = {
    config: {},
    verboseLog: (text,err) => {
        if (this.config.verbose) {
            if (err) top.$log.red("[ERROR] " + text)
            else top.$log("[INFO] " + text)
        }
    },
    filterLog: (text) => {
        if (this.config.filterverbose) top.$log("[FILTER] " + text)
    },
    methods: {
        refreshStart: () => {
            
        },
        refreshDone: () => {},
        init: () => {},
    }
}

/*class App {
    constructor(name, icon, shortdesc, fulldesc, auth, date, ver, script) {
        this.name = name
        this.icon = icon
        this.shortdesc = shortdesc
        this.fulldesc = fulldesc
        this.auth = auth
        this.date = date
        this.script = script
        this.ver = ver
    }
}*/