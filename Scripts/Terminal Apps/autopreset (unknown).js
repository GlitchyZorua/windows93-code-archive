$log("Pulling presets...")

let path = "/a/.config/autoclean/presets/"
let presets = ["nodesktop", "noregen", "essentials"]
let done = 0

function pull(value) {
    $log("Pulling " + value + "...")
    fetch("https://raw.githubusercontent.com/Driftini/93Tweaks/master/apps/autoclean/presets/" + value + ".json")
        .then(res => res.json()) .then(data => {$file.save(path + value + ".json", data)})
    done++
    $log(value + " pulled. (" + done + "/" + presets.length + ")")
}

presets.forEach(pull)
