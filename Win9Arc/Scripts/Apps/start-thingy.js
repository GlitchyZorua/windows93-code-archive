$explorer(le._path.skin, document.getElementById('ayy'), {
        silent: !0,
        backgroundClass: "",
        viewType: "workspace"
});

var startMenu = [
      {
        name: 'alert something',
        icon: '/c/sys/skins/' + le._settings.skin + '/help.png',
        action: function () {$alert('hello!')}
      },
      {
        name: '---' // seperator
      },
      {
        name: 'Trollbox',
        icon: '/c/sys/skins/' + le._settings.skin + '/_apps/chat.gif',
        action: function () {$exe('trollbox')}
      },
      {
        name: '---' 
      }
]

$menu(document.getElementById('s42_start'), startMenu, {
      mode: 'popup',
      position: {
        within: le._dom.desktop
      }
}).show()