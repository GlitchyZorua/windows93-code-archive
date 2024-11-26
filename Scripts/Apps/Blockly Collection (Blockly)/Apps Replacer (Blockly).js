function pick(){
  document.getElementById('content').innerHTML = "<br><br>You got a troll!<br><img src='/c/files/images/icons/troll.png'>";
};
function realmsend(){
  var txt = document.getElementById('text').value;document.getElementById('text').value = "";
  if (place == 1){
    if (txt == "new") {
      document.getElementById('2').innerHTML = document.getElementById('2').innerHTML + "<br><span style='color:#babb00;'>Please enter your desired name.</span>";
      var place = 2;
    } else {
      document.getElementById('2').innerHTML = document.getElementById('2').innerHTML + "<br><span style='color:#babb00;'>Please enter your desired name.</span>";
      var place = 2;
    };
  };
  if (place == 2){
    document.getElementById('2').innerHTML = document.getElementById('2').innerHTML + "<br><span style='color:#bb0000;'>Sorry, the name '</span>" + txt + "<span style='color:#bb0000;'>' has already been taken.</span><br><span style='color:#feff55;'>Please enter your desired name.</span>";
  };
  
};
function note(){
  $window.current.destroy();$exe('textarea');setTimeout(function(){
    $window.current.maximize();
    $window.current.changeTitle('ASCII Gallery');$window.current.changeIcon('/c/files/images/icons/90s123.png');
    $window.current.el.body.firstChild.value = "  ========\n /    O   \ .\n|__________|\n        _\n       | |\n ______| |_\n| ________ |\n||  NOKIA ||\n||________||\n||1||2||3| |\n||4||5||6| | phones!\n||7||8||9| |\n||*||0||&num;| |\n|__________|\n\n __________\n|  ______  |\n|  vtech   |\n| ________ |\n||HANDSET ||\n||________||\n|    --    |\n|D   n   S |\n|[   c  OFF|\n| 1   2   3|\n| 4   5   6|\n| 7   8   9|\n| *   0   &num;|\n| 🔊  P  EQ|\n------O----|\n|__HDaudio_|\n\n __________\n| ____O___ |\n||        ||\n||   🍎   ||\n||        ||\n||        ||\n||________|| more soon\n|_____O____|";
  }, 220);
};
parent.document.getElementById('s42_start').innerHTML = '<img width="16" heigth="16" src="c/sys/skins/w93/16/start.png"> <b>schtart</b>';
le._apps.terminal.exec = function(){
  $window({
    width: 550,
    height: 490,
    url: "http://hackertyper.com",
    icon: "/c/sys/skins/w93/apps/terminal.png",
    title: "Terminal"
  });
};
le._apps.catex.exec = function(){
  $window({
    title: "Xat Ecplorer",
    icon: "/c/sys/skins/w93/apps/catexplorer.png",
    url: "/c/programs/catExplorer/ixquick/index.html",
    width: 710,
    height: 560
  })
};
le._apps.trollbox.exec = function(){
  $window({
    title: "Trollbox",
    center: true,
    html: "<center id='content'><br><br>Pick a troll from the trollbox!<br><button onclick='pick()' style='width:70;height:40;'>Pick!</button></center>",
    width: 310,
    height: 190,
    icon: "/c/sys/skins/w93/apps/chat.gif"
  });
};
le._apps['93realms'].exec = function(){
  $window({
    title: "93 Realms",
    height: 510,
    resizable: false,
    width: 510,
    help: "•._.••´¯``•.¸¸.• wavey :)",
    icon: "/c/files/images/icons/wizard.png",
    html: "<head><style>.body {background:#272822;width:100%;height:100%;color:#fff;}</style></head><body><div id='1' class='body'><div style='padding: 4px;width:100%;height:100%;' id='2'>Telnet connected.<br><span style='color:#ff5555'>Welcome to 94 Realms.</span><br><br><span style='color:darkturquoise'>There are currently 0 players online.</span><br>Please type 'new' in the box below.</div></div></body>",
    footer: "<div style='height:50px;width:100%;'><input type='text' style='height:100%;width:88%;' id='text'><button style='width:11%;height:100%;' onclick='realmsend()'><span style='margin:10px;'>Send</span></button></div>"
  });var place = 1;
};
le._apps.ansi.exec = function(){
  $window({
    title: "AnsiLove",
    icon: "/c/sys/skins/w93/apps/imgviewer.png",
    width: 655,
    height: 375,
    help: "Help text",
    html: "<div id='body' style='width: 100%;height:100%;background:#000;color:#fff;'></div>",
    menu: [
      {
        name: "Opfile",
        items: [
          {
            name: "Load",
            action: function(){
              document.getElementById('body').innerHTML = "<center><br><br><br><br>N</center>";
              setTimeout(function(){document.getElementById('body').innerHTML = "<center><br><br><br><br>Ne</center>";}, 100);
              setTimeout(function(){document.getElementById('body').innerHTML = "<center><br><br><br><br>Nev</center>";}, 200);
              setTimeout(function(){document.getElementById('body').innerHTML = "<center><br><br><br><br>Neve</center>";}, 300);
              setTimeout(function(){document.getElementById('body').innerHTML = "<center><br><br><br><br>Never</center>";}, 400);
              setTimeout(function(){document.getElementById('body').innerHTML = "<center><br><br><br><br>Never g</center>";}, 500);
              setTimeout(function(){document.getElementById('body').innerHTML = "<center><br><br><br><br>Never gon</center>";}, 600);
              setTimeout(function(){document.getElementById('body').innerHTML = "<center><br><br><br><br>Never gonn</center>";}, 690);
              setTimeout(function(){document.getElementById('body').innerHTML = "<center><br><br><br><br>Never gonna</center>";}, 770);
              setTimeout(function(){document.getElementById('body').innerHTML = "<center><br><br><br><br>Never gonna g</center>";}, 840);
              setTimeout(function(){document.getElementById('body').innerHTML = "<center><br><br><br><br>Never gonna gi</center>";}, 900);
              setTimeout(function(){document.getElementById('body').innerHTML = "<center><br><br><br><br>Never gonna giv</center>";}, 950);
              setTimeout(function(){document.getElementById('body').innerHTML = "<center><br><br><br><br>Never gonna give</center>";}, 990);
              setTimeout(function(){document.getElementById('body').innerHTML = "<center><br><br><br><br>Never gonna give y</center>";}, 1030);
              setTimeout(function(){document.getElementById('body').innerHTML = "<center><br><br><br><br>Never gonna give yo</center>";}, 1060);
              setTimeout(function(){document.getElementById('body').innerHTML = "<center><br><br><br><br>Never gonna give you</center>";}, 1080);
              setTimeout(function(){document.getElementById('body').innerHTML = "<center><br><br><br><br>Never gonna give you u</center>";}, 1090);
              setTimeout(function(){document.getElementById('body').innerHTML = "<center><br><br><br><br>Never gonna give you up</center>";}, 1099);
              setTimeout(function(){document.getElementById('body').innerHTML = "<center><br><br><br><br>Never gonna give you up<br>Never gonna let you down</center>";}, 2500);
              setTimeout(function(){document.getElementById('body').innerHTML = "<center><br><br><br><br>Never gonna give you up<br>Never gonna let you down<br>Never gonna run around</center>";}, 3750);
              setTimeout(function(){document.getElementById('body').innerHTML = "<center><br><br><br><br>Never gonna give you up<br>Never gonna let you down<br>Never gonna run around<br>Or rickroll you :)</center>";}, 5000);
              
            }
          },
          {name:"---"},
          {
            name: "Close",
            action: function(){$window.current.close()}
          }
          ]
      },
      {
        name: "Foptions",
        items: [
          {
            name: "Previous",
            action: function(){$alert.error('random error just to annoy you')}
          },
          {
            name: "Next",
            action: function(){$alert.error('random error just to annoy you')}
          },
          {
            name: "Fullscreen",
            action: function(){$window.current.fullscreen();}
          },
          {name:"---"},
          {name:"Help",action:function(){$alert.info('ansy luv')}}
          ]
      }
      ]
  })
};
le._apps.ascii.exec = function(){
  $window({
    maximizable: false,
    automaximize: true,
    help: "you got gnomed if youre reading this",
    title: "ASCII Gallery",
    icon: "/c/files/images/icons/90s123.png",
    html: "<button onclick='note()'>Click me!</button>"
  });
};
le._apps.midi.exec = function(){
  $window({
    icon: "/c/sys/skins/w93/apps/midiPlayer.png",
    title: "Midi Jukebox",
    width: 806,
    height: 500,
    html: "<head><style>.top {width:100%;height:30px;background:#000;color:#c3ff00;} .top:hover {cursor:not-allowed;background:red;}</style></head><body><div class='top'><div style='padding: 7px;'>Choose a song.</div></div></body>"
  });
};
le._apps.potato.exec = function(){
  $window({
    title: "POTATO",
    icon: "/c/files/images/icons/potato.png",
    width: 560,
    height: 315,
    url: "https://www.youtube.com/embed/q7uyKYeGPdE"
  })
};
le._apps.recorder.exec = function(){
  
};
le._apps.piskel.exec = function(){
  
};