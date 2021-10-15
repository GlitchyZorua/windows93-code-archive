le._apps.reload = {
    hascli:true,
    terminal:true,
    exec: function() {
        le._settings = $store.get("settings.json");
        this.cli.log("reloaded settings");
        Object.keys(le._settings.sounds).forEach( sound => {
            le._sound[sound] = $audio(le._settings.sounds[sound]);
            this.cli.log("reloaded audio " + sound);
        });
        this.cli.log("done reloading");
    }
};