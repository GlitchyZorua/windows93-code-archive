system42("register", function(e, t) {
    "use strict";

    function s() {
        le._dom.splash.classList.remove("hide"), le._init.home(), t()
    }
        le._dom.splash.classList.add("hide");
        var i = function() {
            var t = document.getElementById("WELCOME"),
                i = document.getElementById("TERMS"),
                n = document.getElementById("PROMPT"),
                a = document.getElementById("USERNAME");
            document.getElementById("SERIAL");
            if (i.classList.contains("hide") && n.classList.contains("hide")) t.classList.add("hide"), i.classList.remove("hide"), this.el.btnOk.innerHTML = "Didn't Read Lol ^^";
            else {
                if (!n.classList.contains("hide")) return le._settings.userData.nick = a.value || "anonymous", le._settings.userData.localInit = 1, s(), 1;
                i.classList.add("hide"), n.classList.remove("hide"), this.el.btnOk.innerHTML = "Let's ROCK"
            }
            return 0
        };
        $window({
            url: "/wizard.php",
            ajax: 1,
            title: "Setup Wizard",
            btnCancel: "Nope",
            animationIn: "flip",
            animationOut: "",
            center: 1,
            height: 350,
            width: 510,
            btnOk: "Cool Story, Bro",
            onok: i,
            oncancel: i
        })
});