le._apps.vm.exec=function(){
  $vm = function(){$exe('vm')};
  $vm.windows93 = function(){
    $window.form("WINDOWS93 - VM",
          {
            schema:{
              name:{
                title:'<img style="position:absolute" width="32" height="32" src="/c/sys/skins/w93/apps/inception.png">',
                type:"string",
                enum:[
                  ["Version 3","v3"],
                  ["Version 2","v2"],
                  ["Version 2 Beta","v15"],
                  ["Version 1","v1"],
                  ["Version 1 Beta","v05"],
                  ["Version 0","v0"]
                ]
              }
            }
          },
          function(ok,data){
            if(ok){
              if(data.name=="v3"){
                $2020=function(a){if (a == 12345){$loader.script('/sys/apps/2020.js')}};$iar=$io.arr.random;
                $read=function(a){
                  if (a==1){
                    $window.current.close();
                    $alert({
                      title:"Message",
                      img:"/c/sys/skins/w93/"+$iar([$iar(['help','info']),'letter','mail'])+".png",
                      msg:"<b>Message from jankenpopp:</b><br><br>You fool, that version is top secret ...",
                      closable:false,
                      sound:""
                    }, function(){
                      $alert({
                        title: "Warning !",
                        msg: "The following script may damage your Windows 93 files,\nhowever will not do anything to your actual OS.\n\nThis script may:\n- Move all your desktop icons to random places\n- Undo WINDOWS 93 Registration\n- Get you arrested because it is illegal to run an unregistered copy of WINDOWS93\n- Rickroll you\n- Open random EXEs\n\nIf you are fine with this, press 'Continue'.\nBut if not, simply press 'OK' and nothing will happen.",
                        btnOk: "Continue",
                        btnCancel: "OK",
                        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5AQBDQEMFEjcqAAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAABuSURBVDjLrZLBDsAgCENbsv//ZXZYNAuhVRN74iD0FWFCi0ACQAJUb8I159c8Bx0N2FU49yFH4QlGhhOC6V4QFMXdHdTsXaJKEe4I2loRrNwVxWNfc3MH0l18458iLGtXN5A6e/oovLEDro/V6wWOZicPXHbvhQAAAABJRU5ErkJggg=="
                      }, function(ok){
                        if (ok){
                          $2020(12345)
                        }
                      });
                    });
                  }
                };
                $alert({
                  title:"New Message",
                  img:"/c/sys/skins/w93/"+$iar([$io.arr.random(['help','info','question']),$iar(['letter','mail','mails'])])+".png",
                  msg:"You have one new message",
                  btnOk:"Read",
                  btnCancel:"Ignore",
                  closable: !0
                },function(ok){
                  if (ok){
                    $read(1)
                  }else{
                    $alert({
                      title:"New Message",
                      img:"/c/sys/skins/w93/"+$iar([$io.arr.random(['help','info','question']),$iar(['letter','mail','mails'])])+".png",
                      msg:"You have one new message",
                      btnOk:"Read",
                      btnCancel:"Ignore",
                      closable:!1
                    }); setTimeout(function(){$window.current.el.footer.innerHTML = '<div class="ui_window__buttons"><button class="ui_window__cancel" disabled>Ignore</button><button autofocus="autofocus" class="ui_window__ok" onclick="$read(1)">Read</button></div>'}, 200);
                  }
                })
              }else if(data.name=="v2"){
                $exe("iframe http://v2.windows93.net/ --width=600 --height=400 --help=INCEPTION\n\nPlease note that what you do in this Virtual Machine will affect your WINDOWS93 data")
              }else if(data.name=="v15"){
                $exe("iframe http://domenic.darkok.xyz/index_.html --width=600 --height=400 --help=INCEPTION")
              }else if(data.name=="v1"){
                $exe("iframe http://v1.windows93.net/ --width=600 --height=400 --help=INCEPTION")
              }else if(data.name=="v05"){
                $exe("iframe http://v05.windows94.net/ --width=600 --height=400 --help=INCEPTION")
              }else{
                $exe("iframe http://v0.windows93.net/ --width=600 --height=400 --help=INCEPTION")
              }
            }
          }
        );
  };
  $vm.windows93();
};