var icons = ['https://i.imgur.com/zzz1KA1.png','/c/sys/img/loading.gif','/c/sys/img/logo16.png','/c/sys/img/logo32.png','/c/sys/img/logo48.png','/c/sys/img/logob.png','/c/sys/img/logobug.png','/c/sys/img/logow.png','/c/sys/cursors/default.cur','/c/sys/skins/w93/alert.png','/c/sys/skins/w93/alert.png','/c/sys/skins/w93/camera.png','/c/sys/skins/w93/cdrom.png','/c/sys/skins/w93/config.png','/c/sys/skins/w93/documents.png','/c/sys/skins/w93/error.png','/c/sys/skins/w93/explorer.png','/c/sys/skins/w93/file.png','/c/sys/skins/w93/find.png','/c/sys/skins/w93/floppy-backup.png','/c/sys/skins/w93/floppy-format.png','/c/sys/skins/w93/floppy-restore.png','/c/sys/skins/w93/floppy.png','/c/sys/skins/w93/floppyB.png','/c/sys/skins/w93/help.png','/c/sys/skins/w93/info.png','/c/sys/skins/w93/install.png','/c/sys/skins/w93/k7.png','/c/sys/skins/w93/letter.png','/c/sys/skins/w93/mail.png','/c/sys/skins/w93/mails.png','/c/sys/skins/w93/programs.png','/c/sys/skins/w93/question.png','/c/sys/skins/w93/rescan.png','/c/sys/skins/w93/rss.png','/c/sys/skins/w93/run.png','/c/sys/skins/w93/scan.png','/c/sys/skins/w93/settings.png','/c/sys/skins/w93/shortcut.png','/c/sys/skins/w93/shutdown.png','/c/sys/skins/w93/sound_off.png','/c/sys/skins/w93/sound_on.png','/c/sys/skins/w93/stats.png','/c/sys/skins/w93/store.png','/c/sys/skins/w93/stuff.png','/c/sys/skins/w93/trash.png','/c/sys/skins/w93/trophy.png','/c/sys/skins/w93/win93.png','/c/sys/skins/w93/16/calc.png','/c/sys/skins/w93/16/explorer.png','/c/sys/skins/w93/16/home.png','/c/sys/skins/w93/16/message.png','/c/sys/skins/w93/16/redo.png','/c/sys/skins/w93/16/rss.png','/c/sys/skins/w93/16/settings.png','/c/sys/skins/w93/16/sound_off.png','/c/sys/skins/w93/16/sound_on.png','/c/sys/skins/w93/16/start.png','/c/sys/skins/w93/16/wamp_offline.png','/c/sys/skins/w93/16/wamp_online.png','/c/sys/skins/w93/apps/3d.png','/c/sys/skins/w93/apps/acidBox.png','/c/sys/skins/w93/apps/annaKournikova.gif','/c/sys/skins/w93/apps/ansilove.png','/c/sys/skins/w93/apps/arena93.png','/c/sys/skins/w93/apps/bananamp.png','/c/sys/skins/w93/apps/brodkast.png','/c/sys/skins/w93/apps/bytebeat.png','/c/sys/skins/w93/apps/calc.png','/c/sys/skins/w93/apps/catexplorer.png','/c/sys/skins/w93/apps/chat.gif','/c/sys/skins/w93/apps/codemirror.png','/c/sys/skins/w93/apps/corgi.png','/c/sys/skins/w93/apps/dangerous.png','/c/sys/skins/w93/apps/defrag.png','/c/sys/skins/w93/apps/doctor.gif','/c/sys/skins/w93/apps/dolphin.png','/c/sys/skins/w93/apps/dora.png','/c/sys/skins/w93/apps/dosbox.png','/c/sys/skins/w93/apps/framapad.png','/c/sys/skins/w93/apps/fx.png','/c/sys/skins/w93/apps/gameOfLife.png','/c/sys/skins/w93/apps/glitchgirlz.png','/c/sys/skins/w93/apps/helix.png','/c/sys/skins/w93/apps/hexedit.png','/c/sys/skins/w93/apps/hl3.png','/c/sys/skins/w93/apps/hydra.png','/c/sys/skins/w93/apps/iframe.png','/c/sys/skins/w93/apps/imgviewer.png','/c/sys/skins/w93/apps/inception.png','/c/sys/skins/w93/apps/keygen.png','/c/sys/skins/w93/apps/lab.png','/c/sys/skins/w93/apps/layer.png','/c/sys/skins/w93/apps/lsdj.png','/c/sys/skins/w93/apps/matrix.png','/c/sys/skins/w93/apps/midiPlayer.png','/c/sys/skins/w93/apps/minesweeper.png','/c/sys/skins/w93/apps/modbox.png','/c/sys/skins/w93/apps/nanoloop.png','/c/sys/skins/w93/apps/paint.png','/c/sys/skins/w93/apps/pd.png','/c/sys/skins/w93/apps/pin.png','/c/sys/skins/w93/apps/pokeRainbow.png','/c/sys/skins/w93/apps/poney.png','/c/sys/skins/w93/apps/progressquest.gif','/c/sys/skins/w93/apps/recorder.png','/c/sys/skins/w93/apps/robby.png','/c/sys/skins/w93/apps/sick.png','/c/sys/skins/w93/apps/skifree.png','/c/sys/skins/w93/apps/solitaire.gif','/c/sys/skins/w93/apps/terminal.png','/c/sys/skins/w93/apps/vega.png','/c/sys/skins/w93/apps/visualNovel.png','/c/sys/skins/w93/apps/voice.png','/c/sys/skins/w93/apps/xray.png','/c/sys/skins/w93/apps/yoda.gif','/c/sys/skins/w93/apps/zkype.png','/c/sys/skins/w93/devices/computer.png','/c/sys/skins/w93/devices/drive-harddisk.gif','/c/sys/skins/w93/devices/drive-storage.gif','/c/sys/skins/w93/devices/floppyB.gif','/c/sys/skins/w93/ext/adf.png','/c/sys/skins/w93/ext/ans.png','/c/sys/skins/w93/ext/beep.png','/c/sys/skins/w93/ext/c64.png','/c/sys/skins/w93/ext/css.png','/c/sys/skins/w93/ext/cur.png','/c/sys/skins/w93/ext/gb.png','/c/sys/skins/w93/ext/gbc.png','/c/sys/skins/w93/ext/js.png','/c/sys/skins/w93/ext/nes.png','/c/sys/skins/w93/ext/nfo.png','/c/sys/skins/w93/ext/pd.png','/c/sys/skins/w93/ext/pdf.png','/c/sys/skins/w93/ext/php.png','/c/sys/skins/w93/ext/py.png','/c/sys/skins/w93/ext/rss.png','/c/sys/skins/w93/ext/sms.png','/c/sys/skins/w93/mime/application.png','/c/sys/skins/w93/mime/application2.png','/c/sys/skins/w93/mime/audio.png','/c/sys/skins/w93/mime/image.png','/c/sys/skins/w93/mime/model.png','/c/sys/skins/w93/mime/text.png','/c/sys/skins/w93/mime/video.png','/c/sys/skins/w93/places/folder-open.png','/c/sys/skins/w93/places/folder.png','/c/sys/skins/w93/places/network-workgroup.png','/c/sys/skins/w93/places/user-desktop.png','/c/sys/skins/w93/places/user-home.png','/c/sys/skins/w93/places/user-trash-full.png','/c/sys/skins/w93/places/user-trash.png','/c/sys/skins/w93/places/16/folder-open.png','/c/sys/skins/w93/places/16/folder.png','/c/sys/skins/w93/places/16/user-trash-full.png','/c/sys/skins/w93/places/16/user-trash.png','/c/sys/skins/w93/type/ans.png','/c/sys/skins/w93/type/font-sfnt.png','/c/sys/skins/w93/type/font-woff_x-.png','/c/sys/skins/w93/type/html.png','/c/sys/skins/w93/type/json.png','/c/sys/skins/w93/type/midi.png','/c/sys/skins/w93/type/x-debian-package.png','/c/sys/skins/w93/type/x-markdown.png','/c/sys/skins/w93/type/x-mod.png','/c/sys/skins/w93/type/x-msdownload.png','/c/sys/skins/w93/type/zip_x-gzip_x-rar_x-tar.png','/c/files/images/icons/90s1.png','/c/files/images/icons/90s2.png','/c/files/images/icons/90s123.png','/c/files/images/icons/angle.png','/c/files/images/icons/antic.png','/c/files/images/icons/bat.png','/c/files/images/icons/bomb.png','/c/files/images/icons/burger.png','/c/files/images/icons/burger2.png','/c/files/images/icons/candy.png','/c/files/images/icons/cat1.png','/c/files/images/icons/cherry.png','/c/files/images/icons/clock.png','/c/files/images/icons/clock2.png','/c/files/images/icons/derp.png','/c/files/images/icons/derpina.png','/c/files/images/icons/donut.png','/c/files/images/icons/eye.png','/c/files/images/icons/fckyea.png','/c/files/images/icons/feuille.png','/c/files/images/icons/fish.png','/c/files/images/icons/foreveralone.png','/c/files/images/icons/fuuuu.png','/c/files/images/icons/gief.gif','/c/files/images/icons/icecream1.png','/c/files/images/icons/icecream2.png','/c/files/images/icons/lame.png','/c/files/images/icons/likeaboss.png','/c/files/images/icons/lol.png','/c/files/images/icons/maze.png','/c/files/images/icons/meat.png','/c/files/images/icons/megusta.png','/c/files/images/icons/necronomicoin.png','/c/files/images/icons/no.png','/c/files/images/icons/now.png','/c/files/images/icons/petitpapanoel.png','/c/files/images/icons/pizza.png','/c/files/images/icons/potato.png','/c/files/images/icons/pow.png','/c/files/images/icons/qbert.png','/c/files/images/icons/rotate.png','/c/files/images/icons/rotatecomputer.png','/c/files/images/icons/sandwich.png','/c/files/images/icons/serious.png','/c/files/images/icons/sims.png','/c/files/images/icons/trivial.png','/c/files/images/icons/troll.png','/c/files/images/icons/victoryflag.png','/c/files/images/icons/warning.png','/c/files/images/icons/window.png','/c/files/images/icons/wizard.png','/c/files/images/icons/yea.png','/c/files/images/icons/yao.png','/c/files/images/icons/yinyan.png'];
//
function aa(){
  document.getElementById('info1').style.color = "red";
  document.getElementById('info1').innerHTML = "Incorrect! Try again.";
};
function ab(){
  document.getElementById('info1').style.color = "red";
  document.getElementById('info1').innerHTML = "Incorrect! Try again.";
};
function ac(){
  document.getElementById('info1').style.color = "lime";
  document.getElementById('info1').innerHTML = "Correct!";
  setTimeout(function(){
    var screen = "3";document.getElementById('game').innerHTML = "<br><br><br><br><b>Install!</b><br><button style='margin: 6px;' onclick='ba()'><img src='/c/sys/skins/w93/install.png'></button> <button style='margin: 6px;' onclick='bb()'><img src='/c/sys/skins/w93/shutdown.png'></button> <button style='margin: 6px;' onclick='bc()'><img src='/c/sys/skins/w93/floppy-backup.png'></button> <button style='margin: 6px;' onclick='bd()'><img src='/c/sys/skins/w93/explorer.png'></button><br><br><b id='info2'></b>";
  }, 1100);
};
function ad(){
  document.getElementById('info1').style.color = "red";
  document.getElementById('info1').innerHTML = "Incorrect! Try again.";
};
function ba(){
  document.getElementById('info2').style.color = "lime";
  document.getElementById('info2').innerHTML = "Correct!";
  setTimeout(function(){
    var screen = "4";document.getElementById('game').innerHTML = "<br><br><br><br><img src='/c/files/images/icons/cat1.png' width='48'> <span style='opacity:0;'>h h h h h h h h h h h h h h h h h h h h h</span> <button style='margin:2px;' onclick='chery()'><img src='/c/files/images/icons/cherry.png'></button> <button style='margin:2px;' onclick='bomb()'><img src='/c/files/images/icons/bomb.png'></button>";
  }, 1100);
};
function bb(){
  document.getElementById('info2').style.color = "red";
  document.getElementById('info2').innerHTML = "Incorrect! Try again.";
};
function bc(){
  document.getElementById('info2').style.color = "red";
  document.getElementById('info2').innerHTML = "Incorrect! Try again.";
};
function bd(){
  document.getElementById('info2').style.color = "red";
  document.getElementById('info2').innerHTML = "Incorrect! Try again.";
};
function chery(){
  var screen = "5";
  var winicons = ['/c/files/images/icons/icecream2.png','/c/files/images/icons/likeaboss.png','/c/files/images/icons/lol.png','/c/files/images/icons/victoryflag.png','/c/files/images/icons/yea.png','/c/files/images/icons/yao.png'];
  document.getElementById('game').innerHTML = "<br><br><br><br><img src='/c/files/images/icons/cat1.png' width='48'> <span style='opacity:0;'>h h h h h h h h h h h h h h h h</span> <img src='/c/files/images/icons/cherry.png'> <img src='/c/files/images/icons/bomb.png'>";
  setTimeout(function(){
    document.getElementById('game').innerHTML = "<br><br><br><br><img src='/c/files/images/icons/cat1.png' width='48'> <span style='opacity:0;'>h h h h h h h h h h h h</span> <img src='/c/files/images/icons/cherry.png'> <img src='/c/files/images/icons/bomb.png'>";
  }, 700);
  setTimeout(function(){
    document.getElementById('game').innerHTML = "<br><br><br><br><img src='/c/files/images/icons/cat1.png' width='48'> <span style='opacity:0;'>h h h h h h h h</span> <img src='/c/files/images/icons/cherry.png'> <img src='/c/files/images/icons/bomb.png'>";
  }, 1400);
  setTimeout(function(){
    document.getElementById('game').innerHTML = "<br><br><br><br><img src='/c/files/images/icons/cat1.png' width='48'> <span style='opacity:0;'>h h h h</span> <img src='/c/files/images/icons/cherry.png'> <img src='/c/files/images/icons/bomb.png'>";
  }, 2100);
  setTimeout(function(){
    document.getElementById('game').innerHTML = "<br><br><br><br><img src='/c/files/images/icons/cat1.png' width='48'> <span style='opacity:0;'>h</span> <img src='/c/files/images/icons/cherry.png'> <img src='/c/files/images/icons/bomb.png'>";
  }, 2800);
  setTimeout(function(){
    document.getElementById('game').innerHTML = "<br><br><br><br><img src='/c/files/images/icons/cat1.png' width='48'> <span style='opacity:0;'>h</span> <img src='/c/files/images/icons/cherry.png'> <img src='/c/files/images/icons/bomb.png'><br><br><br><b><span style='color:yellow'>You did it!</span><br><img src='/c/files/images/icons/icecream2.png' id='win' width='46'>";
    setInterval(function(){
      if (screen == "5") {
        document.getElementById('win').src = $io.arr.random(winicons);
      };
    }, 633);
  }, 3000);
  setTimeout(function(){
    var screen = "6";
    document.getElementById('game').innerHTML = "<br><br><br><br><br><b>Click the <button onclick='stupid()'>button</button> to select a random icon</b><br><br><button onclick='pick()' id='iconbtn'><span style='padding: 4px;'><img width='50' id='btnicon' src='" + $io.arr.random(icons) + "'></span></button>";
  }, 5000);
};
function bomb(){
  document.getElementById('game').innerHTML = "<img id='outerimg' src='https://media3.giphy.com/media/XUFPGrX5Zis6Y/200.gif' width='" + ($window.current.cfg.width - 30) + "' height='" + ($window.current.cfg.height - 30) + "'>";
  setTimeout(function(){
    var screen = "0";
    var deadicons = ['/c/files/images/icons/fuuuu.png','/c/files/images/icons/error.png','/c/sys/skins/w93/16/wamp_offline.png','/c/sys/skins/w93/16/redo.png','/c/files/images/icons/bomb.png','/c/files/images/icons/foreveralone.png','/c/files/images/icons/lol.png','/c/files/images/icons/lame.png','/c/files/images/icons/megusta.png','/c/files/images/icons/no.png','/c/files/images/icons/petitpapanoel.png','/c/files/images/icons/pow.png','/c/files/images/icons/serious.png','/c/files/images/icons/troll.png'];
    document.getElementById('game').innerHTML = "<br><br><br><h2>Game Over</h2><br><img id='gameover' src='/c/files/images/icons/fuuuu.png'><br><br><button onclick='play()'><b style='margin-left:3px;margin-right:3px;margin-top:1.5px;margin-bottom:1.5px;'>Play Again?</b></button>";
    setInterval(function(){
      if (screen == "0") {
        document.getElementById('gameover').src = $io.arr.random(deadicons);
      };
    }, 2000);
  }, 1800);
};
function stupid(){
  var a = $io.arr.random('1','2');if (a == "1"){
    $alert('not that button you dumbass');
  } else {
    $alert.error('not that button you dumbass');
  };
};
function pick(){
  document.getElementById('btnicon').src = $io.arr.random(icons);
  var boot = le._settings.sounds.boot;
  le._settings.sounds.boot = "/c/files/sounds/tada.mp3";$audio('boot').stop();$audio('boot').play();
};
//
function play(){
  var screen = "2";
  document.getElementById('game').innerHTML = "<br><br><br><br><b>3</b>";
  setTimeout(function(){document.getElementById('game').innerHTML = "<br><br><br><br><h2>2</h2>";}, 1000);
  setTimeout(function(){document.getElementById('game').innerHTML = "<br><br><br><br><h1>1</h1>";}, 2000);
  setTimeout(function(){document.getElementById('game').innerHTML = "<br><br><br><br><b>Alert!</b><br><button style='margin: 6px;' onclick='aa()'><img src='/c/sys/skins/w93/info.png'></button> <button style='margin: 6px;' onclick='ab()'><img src='/c/sys/skins/w93/question.png'></button> <button style='margin: 6px;' onclick='ac()'><img src='/c/sys/skins/w93/alert.png'></button> <button style='margin: 6px;' onclick='ad()'><img src='/c/sys/skins/w93/error.png'></button><br><br><b id='info1'></b>";}, 3000);
};
$window({
  width: 1140,
  height: 870,
  title: "The Icon Game",
  icon: $io.arr.random(icons),
  html: "<center id='game'><br><br><br><br><h1 style='color:red'>The Icon Game</h1><br><img id='title' width='32' src='" + $io.arr.random(icons) + "'><br><button style='width: 120;height:45;text-align:middle;' onclick='play()'><br><span style='opacity:0'>jhhjg</span>PLAY<span style='opacity:0'>jhhjg</span><br><span style='opacity:0'>.</span></button?</center>"
}, function(){
  var screen = "na";$window.current.id = "0";
});var screen = "na";$window.current.id = "icongame";
setTimeout(function(){
  var screen = "1";
  setInterval(function(){
    if (screen == "1") {
      document.getElementById('title').src = $io.arr.random(icons);
    }
  }, 100);
}, 100);
setInterval(function(){
  if ($window.current.id = "icongame") {
    $window.current.changeIcon($io.arr.random(icons));
  };
}, 1000);