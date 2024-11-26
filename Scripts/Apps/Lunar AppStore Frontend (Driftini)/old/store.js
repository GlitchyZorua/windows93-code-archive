let verbose = true
let verboseFilter = false

function verboseLog(text) {
    if (verbose) {
        console.log(text)
    }
}

function filterLog(text) {
    if (verboseFilter) {
        console.log(text)
    }
}

verboseLog("LunarRabbit instance started.")

class App {
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
}

var appArray = []

const Lunar = {
    appList: document.getElementById("list"),
    refresh: () => {
        verboseLog("Refresh started.")
        
        Lunar.appList.style.display = "none"
        
        let apps = Lunar.appList.getElementsByTagName("button")
        
        for (i = 0; i < apps.length; i++) {
            Lunar.appList.removeChild(apps[i])
        }
        
        document.getElementById("refreshing").style.display = "flex"
        document.getElementById("refreshbutton").disabled = true
        // fetch shit
        
        appArray = [
            {
                name: "Test App",
                icon: "https://www.windows93.net/c/sys/skins/w93/floppy.png",
                shortdesc: "Just a test app",
                fulldesc: "Lorem ipsum dolor sit amet",
                auth: "Driftini",
                date: "20/20/2020",
                ver: "1.2",
                script: ""
            }
        ]
        
        Lunar.refreshDone()
    },
    refreshDone: () => {
        appArray.forEach(Lunar.appendApp)
        Lunar.appList.style.display = "block"
        document.getElementById("refreshing").style.display = "none"
        document.getElementById("refreshbutton").disabled = false
        
        verboseLog("Refresh done.")
    },
    appendApp: (value) => {
        verboseLog("Appending following app:")
        verboseLog(value)
        
        let appended = document.createElement("button")
        
        let appendedSeparator = document.createElement("span")
        
        let appendedLeft = document.createElement("div")
        appendedLeft.classList = ["row"]
        
        let appendedNameVer = document.createElement("div")
        appendedNameVer.classList = ["column"]
        
        let appendedIcon = document.createElement("img")
        appendedIcon.src = value.icon
        
        let appendedName = document.createElement("label")
        appendedName.innerText = value.name
        appendedName.classList = ["name"]
        
        let appendedVer = document.createElement("label")
        appendedVer.innerText = " (" + value.ver + ")"
        appendedVer.classList = ["ver"]
        
        let appendedDesc = document.createElement("label")
        appendedDesc.innerText = value.shortdesc
        appendedDesc.classList = ["desc"]
        
        let appendedRight = document.createElement("div")
        appendedRight.classList = ["row"]

        let appendedAuthDate = document.createElement("div")
        appendedNameVer.classList = ["column"]
        
        let appendedDate = document.createElement("label")
        appendedDate.innerText = value.date
        appendedDate.classList = ["date"]
        
        let appendedAuth = document.createElement("label")
        appendedAuth.innerText = value.auth
        appendedAuth.classList = ["auth"]
        
        Lunar.appList.appendChild(appended)

        appended.appendChild(appendedLeft)
        appendedLeft.appendChild(appendedIcon)
        appendedLeft.appendChild(appendedNameVer)
        appendedNameVer.appendChild(appendedName)
        appendedNameVer.appendChild(appendedVer)
        appendedLeft.appendChild(appendedSeparator.cloneNode(true))

        appended.appendChild(appendedDesc)

        appended.appendChild(appendedRight)
        appendedRight.appendChild(appendedSeparator.cloneNode(true))
        appendedRight.appendChild(appendedAuthDate)
        appendedAuthDate.appendChild(appendedAuth)
        appendedAuthDate.appendChild(appendedDate)
    },
    viewSettings: () => {
        verboseLog("Viewing settings.")
        
        document.getElementById("noapp").style.display = "none"
        document.getElementById("settings").style.display = "block"
        document.getElementById("details").style.display = "none"
    },
    viewApp: (obj) => {
        verboseLog("Viewing following app:")
        verboseLog(obj)
        
        document.getElementById("noapp").style.display = "none"
        document.getElementById("settings").style.display = "none"
        document.getElementById("details").style.display = "block"
    },
    filterAuth: () => {
        document.getElementById("f_name").value = ""
        let apps = Lunar.appList.getElementsByTagName("button")
        let filter = document.getElementById("f_auth").value.toUpperCase()
        let auth
        
        filterLog("Filtering author: " + filter)
        
        for (i = 0; i < apps.length; i++) {
            auth = apps[i].getElementsByClassName("auth")[0]
            if (auth.innerText.toUpperCase().indexOf(filter) > -1) {
                apps[i].style.display = "flex";
            } else {
                apps[i].style.display = "none";
            }
        }
    },
    filterName: () => {
        document.getElementById("f_auth").value = ""
        let apps = Lunar.appList.getElementsByTagName("button")
        let filter = document.getElementById("f_name").value.toUpperCase()
        let name
        
        filterLog("Filtering name: " + filter)
        
        for (i = 0; i < apps.length; i++) {
            name = apps[i].getElementsByClassName("name")[0]
            if (name.innerText.toUpperCase().indexOf(filter) > -1) {
                apps[i].style.display = "flex";
            } else {
                apps[i].style.display = "none";
            }
        }
    }
}

Lunar.refresh()

document.getElementById("settingsbutton").addEventListener("click", Lunar.viewSettings)
document.getElementById("refreshbutton").addEventListener("click", Lunar.refresh)
document.getElementById("f_auth").addEventListener("keyup", Lunar.filterAuth)
document.getElementById("f_name").addEventListener("keyup", Lunar.filterName)