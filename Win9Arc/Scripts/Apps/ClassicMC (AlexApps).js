le._apps.minecraft = {
  exec: function() {
    let mcwindow = $window({
      url: "//classic.minecraft.net",
      title: "Minecraft",
      icon: "//www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/favicon-32x32.png",
      width: 1280,
      height: 720,
      help: "To use multiplayer select 'Set join code' then enter your join code WITHOUT the URL part. ENTER THE JOIN CODE NOT THE URL!\n\nMinecraft Classic - © Mojang 2019\nv1.1.0",
      automaximize: true,
      menu: [{
        name: "Set join code",
        action: function() {
          $prompt('Enter join code:', '', function(ok, code) {
            if (ok) {
              mcwindow.el.iframe.src="//classic.minecraft.net/?join="+code
            }
          })
        }
      }]
    })
  },
  name: "Minecraft",
  icon: "//www.minecraft.net/etc.clientlibs/minecraft/clientlibs/main/resources/favicon-32x32.png"
}