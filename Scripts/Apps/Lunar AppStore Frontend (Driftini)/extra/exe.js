$file.getUrl("/a/desktop/LunarRabbit/store.html", function(url) {
    $window({
        url: url,
        title: "LunarRabbit",
        icon: "https://raw.githubusercontent.com/Driftini/93Theming/master/lunaricon.png",
        baseClass: "LunarRabbit"
    })
})