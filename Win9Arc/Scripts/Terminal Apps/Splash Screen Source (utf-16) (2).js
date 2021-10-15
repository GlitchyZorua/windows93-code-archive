le._apps.chs = {
    terminal: true,
    hascli: true,
    exec: function ()
    {
        var source = this.arg.arguments.join(" ");
        if (source != "")
        {
            $store.set("._.SPLASH", source);
            $store.set("boot/chs.js", "le._temp.splash=$store.get(\"._.SPLASH\");");
            $log.pass("Splash screen is now set to " + source);
        }
        else $log.fail("Usage: chs <source>");
    }
};
