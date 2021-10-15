function fileboot(){
  $explorer({
    browse: true,
    path: "/c/files/sounds/",
    accept: "audio",
    onclose: function(ok, file){
      if (ok){
        document.getElementById('boot').value = file;
        var boot = file;le._settings.sounds.boot = file;
        document.getElementById('btnRevert').style.display = "block";
      };
    }
  });
};
function filealert(){
  $explorer({
    browse: true,
    path: "/c/files/sounds/",
    accept: "audio",
    onclose: function(ok, file){
      if (ok){
        document.getElementById('alert').value = file;
        var alert = file;le._settings.sounds.alert = file;
        document.getElementById('btnRevert').style.display = "block";
      };
    }
  });
};
function fileerror(){
  $explorer({
    browse: true,
    path: "/c/files/sounds/",
    accept: "audio",
    onclose: function(ok, file){
      if (ok){
        document.getElementById('error').value = file;
        var error = file;le._settings.sounds.error = file;
        document.getElementById('btnRevert').style.display = "block";
      };
    }
  });
};
function revertsounds(){
  document.getElementById('btnRevert').style.display = "none";
  document.getElementById('boot').value = le._sounds.boot;
  document.getElementById('alert').value = le._sounds.alert;
  document.getElementById('error').value = le._sounds.error;
  le._settings.sounds.boot = le._sounds.boot;
  le._settings.sounds.alert = le._sounds.alert;
  le._settings.sounds.error = le._sounds.error;
};
//
function home(){
  document.getElementById('body').innerHTML = "<div style='width: 210px; height: 100%; padding: 10px; color: white; background: linear-gradient(0deg, rgba(237,238,255,1) 0%, rgba(75,89,255,1) 100%); '><h1 style='background-image: url(/c/sys/skins/w93/settings.png); background-repeat: no-repeat; padding-left: 40px; '><u>Control Panel</u></h1><br>Use the settings in Control Panel to personalize your computer.<br><br><br>Windows 93 Control Panel<br>Created by Blockly806<br><br><a href='javascript:(window.open(" + '"http%3A//microsoft.com"' + "))'>Microsoft Home</a><br><a style='color: red;' href='javascript:(window.open(" + '"http%3A//youtube.com/c/Blockly806"' + "))'>Subscribe to Blockly806</a></div><button onclick='sounds()' class='btn'><img src='/c/sys/skins/w93/sound_on.png' width='32'><span>Sounds</span></button><button onclick='wallpaper()' class='btn'><img src='/c/sys/skins/w93/camera.png' width='32'><span>Wallpaper</span></button>";
};
//
var boot = le._settings.sounds.boot
var alert = le._settings.sounds.alert
var error = le._settings.sounds.error
function sounds(){
  document.getElementById('body').innerHTML = "<div style='width: 60%; height: 100%; margin-left: 20%; margin-right: 20%; display: block; '><button onclick='home()' style='height: 25px;'><img src='/c/sys/skins/w93/16/home.png'> Back</button> <b style='text-decoration: underline; font-size: 15px; padding-left: 25%; '>Sounds</b><br><br><div style='padding-top: 20px; padding-left: 15%; width: 450px; '><p>Boot: <input style='margin-left: 50px; width: 230px; ' id='boot' disabled><button onclick='fileboot()' style='text-align: center; width: 32px; height: 20px; '><img src='/c/sys/skins/w93/places/folder-open.png' width='16'></button></p><p>Alert: <input style='margin-left: 48px; width: 230px; ' id='alert' disabled><button onclick='filealert()' style='text-align: center; width: 32px; height: 20px; '><img src='/c/sys/skins/w93/places/folder-open.png' width='16'></button></p><p>Error: <input style='margin-left: 46px; width: 230px; ' id='error' disabled><button onclick='fileerror()' style='text-align: center; width: 32px; height: 20px; '><img src='/c/sys/skins/w93/places/folder-open.png' width='16'></button></p><br><br><center><button style='width: 85px; height: 35px; display: none; ' onclick='revertsounds()' id='btnRevert'>Revert</button></center></div></div>";
  document.getElementById('boot').value = boot;document.getElementById('alert').value = alert;document.getElementById('error').value = error;
  $store.set('sounds.json','{"boot": "' + le._settings.sounds.boot + '", "alert": "' + le._settings.sounds.alert + '", "error": "' + le._settings.sounds.error + '"}');$explorer.refresh();le._sounds = $store.get('sounds.json');
};
function wallpaper(){
  document.getElementById('body').innerHTML = "<div style='text-align: center; text-decoration: underline; '><h1>Wallpaper Preferences</h1><br><button style='margin: 20px; ' onclick='wpDefault()'><div style='background: linear-gradient(135deg,#f0f 0,#0ff 100%); width: 150px; height: 84.375px; '></div></button><button style='margin: 20px; ' onclick='wpDefault2()'><div style='width: 150px; height: 84.375px; background: radial-gradient(circle, rgb(0, 241, 255) 0%, rgb(158, 0, 255) 100%); '></div></button><button style='margin: 20px; ' onclick='wpDefault3()'><div style='width: 150px; height: 84.375px; background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 50%, rgba(0,0,0,1) 100%); '></div></button><button style='margin: 20px; ' onclick='wpDefault4()'><div style='width: 150px; height: 84.375px; background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,69,255,1) 100%); '></div></button><br><button style='margin: 20px; ' onclick='wpColor()'><div style='width: 150px; height: 84.375px; '><br><br>Pick solid color</div></button></div>";
};
//
function wpDefault(){
  le._dom.background.style.background = "linear-gradient(135deg,#f0f 0,#0ff 100%)";
  $file.save('/a/boot/wallpaper.js','setTimeout(function(){\n  le._dom.background.style.background = "linear-gradient(135deg,#f0f 0,#0ff 100%)";\n}, 1000);');
};
function wpDefault2(){
  le._dom.background.style.background = "radial-gradient(circle, rgb(0, 241, 255) 0%, rgb(158, 0, 255) 100%)";
  $file.save('/a/boot/wallpaper.js','setTimeout(function(){\n  le._dom.background.style.background = "radial-gradient(circle, rgb(0, 241, 255) 0%, rgb(158, 0, 255) 100%)";\n}, 1000);');
};
function wpDefault3(){
  le._dom.background.style.background = "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 50%, rgba(0,0,0,1) 100%)";
  $file.save('/a/boot/wallpaper.js','setTimeout(function(){\n  le._dom.background.style.background = "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 50%, rgba(0,0,0,1) 100%)";\n}, 1000);');
};
function wpDefault4(){
  le._dom.background.style.background = "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,69,255,1) 100%)";
  $file.save('/a/boot/wallpaper.js','setTimeout(function(){\n  le._dom.background.style.background = "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,69,255,1) 100%)";\n}, 1000);');
};
function wpColor(){
  $window({
    title: "Color Picker",
    icon: "/c/sys/skins/w93/apps/paint.png",
    center: true,
    maximizable: false,
    width: 325,
    height: 180,
    btnOk: "Choose",
    animationOut: "",
    help: "Doesn't work yet",
    html: "<center style='padding:10px;'><div id='color' style='background: #fff;width:50px;height:50px'></div><br>#<input id='hex' style='width:120px' maxlength='6'></center>"
  }, function(ok){
    $window.current.cfg.title = "abcde";var type = 0;
    if (ok){
      le._dom.background.style.background = color;
      $file.save('/a/boot/wallpaper.js','setTimeout(function(){\n  le._dom.background.style.background = "' + color + '";\n}, 1000);');
    };
    });var type = 1;
  setTimeout(function(){
    var hexchars = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var random = $io.arr.random;
    document.getElementById('hex').value = random(hexchars) + random(hexchars) + random(hexchars) + random(hexchars) + random(hexchars) + random(hexchars);
  }, 500);
  setInterval(function(){
    if ($window.current.cfg.title == "Color Picker"){
      if (type == 1){
        color.style.background = "#" + document.getElementById('hex').value;
        var color = "#" + document.getElementById('hex').value;
      };
    };
  }, 50); // changes color
};
//
function controlpanel(){
  $window({
    center: true,
    help: "Created by Blockly<br><br><a href='http://youtube.com/c/Blockly806' target='_blank'>http://youtube.com/c/Blockly806</a><br><a href='http://reddit.com/user/BlocklyGD' target='_blank'>http://reddit.com/user/BlocklyGD</a><br>Blockly#3426",
    title: "Control Panel",
    icon: "/c/sys/skins/w93/settings.png",
    minimizable: false,
    resizable: false,
    width: 1200,
    height: 550,
    html: "<style>.btn { margin-left: 15px; height: 60px; width: 140px; } .btn img { padding-top: 3px; padding-left: 1px; } .btn span { font-size: 8px; padding-top: 30px; padding-left: 6px; }</style><div style='width: 100%; height: 100%; background-color: silver; display: flex; padding: 5px;' id='body'></div>"
  });home();
};controlpanel();