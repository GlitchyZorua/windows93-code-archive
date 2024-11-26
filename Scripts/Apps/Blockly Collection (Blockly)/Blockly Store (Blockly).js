le._apps.store = {
    categories: "Utility;System;Development",
    icon: "/c/sys/skins/w93/store.png",
    name: "Windows 93 Store",
    exec: function(){
      function download(){
  $prompt({
    title: "Windows 93 Store",
    icon: "/c/sys/skins/w93/store.png",
    img: "/c/sys/skins/w93/store.png",
    help: "<h4>Windows 93 Store — Made by Blockly &#92; FAQ</h4>\n<b>I can't find the app I just installed.</b>\nYou probably didn't enter the name correctly. If you did, it's probably on your desktop.\n\n<b>How do I know what the exe for an app is?</b>\nThere are 2 ways you can find out:\n1. When you click Start then go in the 'Programs' dropdown menu, it shows the names of all exes (The black text is the exe).\n2. Entering 'help' into the terminal will show all exes/commands.\n\n<b>It says 'Having trouble getting apps' when I open the store?</b>\nTry connecting to internet, <s>dumbass</s>.\n\n<i>Any other questions?</i>\n<textarea placeholder='Whatever you type in here wont be sent to anyone therefore no one can answer your question'></textarea>",
    btnOk: "Install",
    btnCancel: "Leave Store",
    msg: "Welcome to the Windows 93 Store. Here, you\ncan install new apps, or reinstall deleted apps.\nClick the ? button for help.\n\nEnter the exe that you want to download."
  }, '', function(ok, text){
    if (ok) {
      var e = $alert.progress("Installing " + text + ".exe...");var num=0;setInterval(function(){e.update(++num);},100);setTimeout(function(){$store.set('desktop/New app.lnk42', '{"exe":"' + text + '"}'); $alert({title: "Installation Complete", icon: "/c/sys/skins/w93/store.png", img: "/c/sys/skins/w93/apps/lab.gif", msg: text + ".exe has been installed.\n<b>It should now appear on your desktop.</b>", sound: "alert", btnOk: "Thanks !"});$explorer.refresh();$notif('Installation Complete','<img src="/c/sys/skins/w93/install.png" width="30"> New app.lnk42 has been installed')}, 12250);
    }
  });
};
function create(){
  $prompt({
    icon: "/c/sys/skins/w93/store.png",
    img: "/c/sys/skins/w93/store.png",
    title: "Create App",
    btnOk: "Next",
    msg: "App exe name:"
  }, function(ok, text){
    if (ok){
      var exe = text;
      $prompt({
        title: "Create App",
        btnOk: "Next",
        img: "/c/sys/skins/w93/store.png",
        icon: "/c/sys/skins/w93/store.png",
        msg: "App Icon:",
        prompt: "/c/"
      }, function(ok, text){
        if (ok){
          var icon = text;
          $prompt({
            icon: "/c/sys/skins/w93/store.png",
            img: "/c/sys/skins/w93/store.png",
            title: "Create App",
            btnOk: "Next",
            msg: "App title:"
          }, function(ok, text){
            if (ok){
              var title = text;
              $prompt({
                img: "/c/sys/skins/w93/store.png",
                icon: "/c/sys/skins/w93/store.png",
                title: "Create App",
                btnOk: "Next",
                msg: "Paste app Javascript here (do not include 'function(){' at the beginning, that's automatically included):"
              }, function(ok, text){
                if (ok){
                  var exec = "function(){" + text + "}";
                  $confirm({
                    msg: "App info:\n\nEXE: " + exe + "\nTitle: " + title + "\nicon: " + icon + "\nJavascript: Click on the ? button on the top of the window to view js",
                    help:exec
                  }, function(ok){
                    if (ok){
                      $file.save('/a/boot/_' + exe + '.js','le._apps.' + exe + ' = {\n  name: "' + title + '",\n  icon: "' + icon + '",\n  exec: ' + exec + '\n};');
                      setTimeout(function(){
                        $exe('/a/boot/_' + exe + '.js');
                        $alert.info('App successfully created.');
                      }, 700);
                    }
                  });
                }
              })
            }
          });
        };
      });
    };
  });
};
//
$confirm({
  title: "Windows 93 Store",
  icon: "/c/sys/skins/w93/store.png",
  img: "/c/sys/skins/w93/store.png",
  btnOk: "Create App",
  btnCancel: "Add App",
  msg: "Welcome to the Windows 93 Store. What would you like to do?"
}, function(ok){
  if (ok){
    create();
  } else {
    download();
  };
});
    }
}