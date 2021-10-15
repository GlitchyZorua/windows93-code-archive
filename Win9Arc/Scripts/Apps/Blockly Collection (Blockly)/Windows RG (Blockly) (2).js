$alert({
  img: "",
  sound: "",
  header: !1,
  btnOk: !1,
  msg: "<body style='font-family: Arial Black'><img src='https://i.imgur.com/HXe7njX.png' width='200'><br><h1>Windows <span style='color: lime'>RG</span></h1><div style='width: 85%'><h6 style='color: lime; text-align: right'>REALLY GOOD EDITION</h6></div><p style='text-align: right'>BUILD 207</p></body>"
});setTimeout(function(){
  $window.current.destroy();setTimeout(function(){
    $audio('/c/sys/sounds/BOOT.ogg').play();$window({
      animationIn: "none",
      url: "about:blank",
      footer: $io.Array.random(["1","2","3","4","5","6","7","8","9","10","11","12"]) + ":00 " + $io.Array.random(["AM","PM"]),
      width: 3000,
      height: 150,
      title: "Windows RG Build 207",
      help: "An attempt by Blockly to recreate Windows RG in Windows 93 (since the domain <a href='http://windowsreallygoodedition.com'>windowsreallygoodedition.com</a> is now for sale)",
      minimizable: !1,
      resizable: !1,
      menu: [
        {
          name: "<center><img src='https://i.imgur.com/HXe7njX.png' width='32'><br>Start</center>",
          items: [
            {
              name: "Word",
              action: function(){
                $alert({
                  title: "Microsoft Word RG",
                  msg: "<center><br><br><br><br><h1>WORD<span style='color: lime'>RG</h1><br>Registered to: JamesWeb</span><br><br><br><div style='text-align: right'>PART OF THE OFFICE<span style='color: lime'>RG</span> SUITE</div>",
                  sound: "",
                  img: "",
                  animationOut: "none",
                  btnOk: "Continue"
                }, function(ok){
                  if (ok) {
                    $exe('textarea');$window.current.changeSize({width: 1100, height: 900});$window.current.changeTitle('Microsoft Word RG');
setTimeout(function(){
  $audio('alert').play();$window.current.el.body.firstChild.value="";$exe('clippy');$notif('Clippy says...',"It looks like you're probably not writing a letter. I like letters. I think you should.");setTimeout(function(){
    $window.current.el.body.firstChild.value="MILK";$audio('alert').play();$notif('Clippy says...',"Start with a word like\nMILK");setTimeout(function(){
      $window.current.el.body.firstChild.value="MILK SPONGE";$audio('alert').play();$notif('Clippy says...',"And SPONGE, I like sponges!");setTimeout(function(){
        $window.current.el.body.firstChild.value="MILK SPONGE\n\n📎";$audio('alert').play();$notif('Clippy says...',"Now you need some\npictures!\nIt's my brother! HAHA!");setTimeout(function(){
          $notif('Clippy says...',"Oh dear, I think I've made it crash.");$alert({
            title: "",
            msg: "paperclip.exe has performed 94,708\nillegal opperations and will now be\nshot."
          }, function(ok){
            if (ok) {
              $notif('Clippy says...',"Hey, why do I have\nblood?");$alert({
                title: "",
                img: "/c/sys/skins/w93/error.png",
                sound: "error",
                msg: "Error rendering blood."
              }, function(ok){
                if (ok) {
                  setTimeout(function(){
                    $alert({
                      title: "",
                      msg: "word.exe has performed an illegal\nopperation (killed a paperclip) and\nwill now be arrested, and for that\nreason, closed."
                    }, function(ok){
                      if (ok) {
                        setTimeout(function(){$window.current.destroy();}, 300)
                      }
                    })
                  }, 2000)
                }
              })
            }
          })
        }, 4805)
      }, 4800)
    }, 4810)
  }, 4820)
}, 4800)
                      }
                    })
              }
            },
            {
              name: "Windows Update",
              action: function(){
                $alert({
                  title: "Windows RG Update",
                  msg: "<h1>Windows<span style='color: lime'>RG</span><br><h2>UPDATE</h2>Welcome to the Windows Update Wizard!<br>Click next to begin",
                  btnOk: "Next",
                  img: "",
                  sound: ""
                }, function(ok){
                  if (ok){
                    $alert({
                      btnOk: !1,
                      title: "Windows RG Update",
                      img: "",
                      sound: "",
                      msg: "<h1>Windows<span style='color: lime'>RG</span><br><h2>UPDATE</h2>Windows is checking for available updates.<br>This is done with sending all your money to Microsoft."
                    }, function(){
                      setTimeout(function(){
                        $alert({
                          title: "",
                          msg: "Unable to connect.\nThis could be for several reasons:\n  1. You smell.\n  2. Your house is green\n  3. You are trying to be naughty."
                        }, function(){
                          setTimeout(function(){$alert({
                            title: "",
                            msg: "Unable to connect.\nPlease try again later."
                          }, function(){$alert({minimizable: !1, closable: !1, maximizable: !1, automaximize: !0, msg: "<body style='background: blue, font-family: monospace'>WINDOWS<br><br>WINDOWS IS BROKEN<br>PLEASE REINSTALL WINDOWS<br><br>PRESS SPACE TO CONTINUE</body>"})})}, 1000)
                        })
                      }, 4000)
                    })
                  }
                })
              }
            },
            {
              name: "Crash",
              action: function(){document.write('<body style="background: blue; font-family: monospace"><center><br><br><br><br><br><br><br>Windows has crashed lol</center></body>')}
            },
            {
              name: "Solitaire",
              action: function(){
                $alert({
                  title: "",
                  msg: "Coming soon maybe"
                })
              }
            },
            {
              name: "Order Food",
              action: function(){
                $alert({
                  title: "Order Food",
                  img: "",
                  sound: "",
                  msg: "<h2>Windows<span style='color: lime'>RG</span></h2><br><br><b>One of the many advancements in Windows RG\nis the ability to order food online.<br>You can order from a huge selection of quality<br>goods and they will be delivered to your door<br>within 30 minutes. (45 minutes off-peak).<br>Click OK to continue</b>"
                }, function(ok){
                  if (ok) {
                    $alert({
                      sound: "",
                      img: "",
                      title: "Order Food",
                      msg: "<h2>Windows<span style='color: lime'>RG</span></h2><br><br><b style='color: blue'>Please wait while we connect to our online<br>database and retrieve all available meals.<br>This may take a few minutes.</b>",
                      btnOk: "Continue"
                    }, function(){
                      setTimeout(function(){
                        $alert({
                          sound: "",
                          img: "",
                          title: "Order Food",
                          btnOk: "Continue",
                          msg: "<h2>Windows<span style='color: lime'>RG</span></h2><br><br><b style='color: blue'>Files downloaded, please wait a few seconds<br>while we waste your time.</b>"
                        }, function(){
                          setTimeout(function(){
                            $prompt({
                              img: "",
                              title: "Order Food",
                              btnOk: "Order",
                              btnCancel: "Quit",
                              msg: "<h2>Windows<span style='color: lime'>RG</span></h2> <b style='color: blue'>Available Food:<br><br>Type the name of the food that you want:</b>"
                            }, '', function(ok, text){
                              if (ok) {
                                $alert({
                                  btnOk: "Quit",
                                  sound: "",
                                  img: "",
                                  title: "Order Food",
                                  msg: "<h2>Windows<span style='color: lime'>RG</span></h2><br><br><b>Sorry - the food you ordered has sold out<br><br>We will have some more in very shortly!</b>"
                                }, function(ok){
                                  if (ok) {
                                    $alert({
                                      btnOk: !1,
                                      title: "Order Food",
                                      sound: "",
                                      img: "",
                                      msg: "<h2>Windows<span style='color: lime'>RG</span></h2><br><b>Thanks for vising! Come back again soon!<br><br>There's enough food for everyone!™</b>"
                                    })
                                  }
                                })
                              }
                            })
                          }, 3500)
                        })
                      }, 7000)
                    })
                  }
                })
              }
            },
            {
              name: "Go Online",
              action: function(){
                $alert({
                  title: "Internet Explorer",
                  sound: "",
                  img: "",
                  msg: "<h2>INTERNET EXPLORER</h2><br><br><h1 style='color: blue'>e</h1> <h2>7.49830696820</h2>",
                  btnOk: "Continue"
                }, function(ok){
                  if (ok){
                    $alert({
                      title: "Internet Explorer",
                      sound: "",
                      img: "",
                      btnOk: "Continue",
                      msg: " ",
                      footer: "Connecting..."
                    }, function(ok){
                      if (ok) {
                        setTimeout(function(){
                          $alert({
                            title: "",
                            msg: "Unable to connect.\nThere could be several reasons:\n  1. You do not have an ISP\n  2. The internet is broken\n  3. You are going to a site."
                          }, function(ok){
                            if (ok) {
                              setTimeout(function(){
                                $alert({
                                  title: "",
                                  msg: "ieexplore.exe has performed an\nillegal opperation for no reason.\nProbably because you smell."
                                })
                              }, 1400)
                            }
                          })
                        }, 2000)
                      }
                    })
                  }
                })
              }
            },
            {
              name: "Paint",
              action: function(){
                $alert({
                  title: "",
                  img: "/c/sys/skins/w93/apps/paint.png",
                  sound: "",
                  msg: "<h1 style='color: red'>PAINT</h1><br><br><h2 style='text-align: left; color: lime'>LOADING</h2>",
                  btnOk: "Continue"
                }, function(ok){
                  if (ok) {
                    setTimeout(function(){
                      var b = $alert({title: "", msg: "paint.exe has performed an illegal\nopperation for no reason."});setTimeout(function(){b}, 175);setTimeout(function(){b}, 350);setTimeout(function(){b}, 525);setTimeout(function(){b}, 700);setTimeout(function(){b}, 825);setTimeout(function(){b}, 1000)
                    }, 800)
                  }
                })
              }
            },
            {
              name: "Help",
              action: function(){
                $prompt({
                  title: "Windows RG Help",
                  btnOk: "Search",
                  msg: "<h2>Windows<span style='color: lime'>RG</span></h2><br><h3>HELP</h3><br>The updated Windows Help service is so simple to use. Enter one or more words regarding what you need help on and Windows RG will be happy to help.<br><br>Help Terms:"
                }, 'Enter Search Here', function(ok, text){
                  if (ok) {
                    var s = text;
                    $alert({
                      sound: "",
                      img: "",
                      title: "",
                      btnOk: "Continue",
                      msg: "<h2>Windows<span style='color: lime'>RG</span></h2><br><h3>HELP</h3><br>Please wait while Windows searches the Windows help database"
                    }, function(ok){
                      if (ok) {
                        setTimeout(function(){
                          $alert({
                            title: "",
                            btnOk: "View Possible Matches",
                            sound: "",
                            img: "",
                            msg: "<h2>Windows<span style='color: lime'>RG</span></h2><br><h3>HELP</h3><br>You searched for:<br>     " + s + "<br><br><br>Sorry - Windows did not find any matches. However, it found <b>3</b> possible\nmatches."
                          }, function(ok){
                            if (ok) {
                              $alert({
                                title: "",
                                sound: "",
                                img: "",
                                msg: "<h2>Windows<span style='color: lime'>RG</span></h2><br><h3>HELP</h3><br>You searched for:<br>     " + s + "<br>Possible matches:<br><br>   How do I grow bonsia trees?<br><br>   Why can fish swim so well?<br><br>   How do I purchase lime?",
                                btnOk: "View"
                              }, function(ok){
                                if (ok) {
                                  setTimeout(function(){
                                    $alert({
                                      title: "",
                                      msg: "Windows has caused a general protection fault in winhelp.exe"
                                    })
                                  }, 900)
                                }
                              })
                            }
                          })
                        }, 1000)
                      }
                    })
                  }
                })
              }
            },
            {
              name: "Reboot",
              action: function(){$exe('reboot')}
            },
            {
              name: "Shut Down",
              action: function(){
                $alert({
                  title: "",
                  msg: "Are you sure you want to quit this\nwonderful operating system?\nThere is a high chance of your\nprocessor overheating.",
                  btnOk: "Yes",
                  btnCancel: "No"
                }, function(ok){
                  if (ok) {
                    $alert({
                      title: "",
                      btnOk: "Yes",
                      btnCancel: "No",
                      msg: "Are you sure?\nWhy now, instead of shutting down,\norder some delicious food from our\nwide range?"
                    }, function(ok){
                      if (ok) {
                        $alert({
                          title: "",
                          btnOk: "Yes",
                          btnCancel: "No",
                          msg: "Are you sure?\nYou could go on paint and do some\nglorious artwork!"
                        }, function(ok){
                          if (ok) {
                            $alert({
                              btnOk: "Yes",
                              btnCancel: "No",
                              title: "",
                              msg: "Are you sure?\nSureley you love Windows RG more\nthan this!"
                            }, function(ok){
                              if (ok) {
                                $alert({
                                  btnOk: "Yes",
                                  btnCancel: "No",
                                  title: "",
                                  msg: "Are you sure?\nFine. If you click yes now, Windows\nRG will shut down... honest."
                                }, function(ok){
                                  if (ok) {
                                    $alert({
                                      title: "",
                                      msg: "Windows was unable to shut down.\nYou could have left a program on...\nis that what you've done? Is it?"
                                    }, function(ok){
                                      if (ok) {
                                        $alert({
                                          title: "",
                                          msg: "Windows was unable to shut down.\nThis could be due to the build up of\nlimescale on your processor."
                                        }, function(ok){
                                          if (ok) {
                                            setTimeout(function(){$exe('shutdown')}, 1925)
                                          }
                                        })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                        })
                      }
                    })
                  }
                })
              }
            }
            ]
        },
        {name:"\n\n < START HERE "},
        {name:" ‍ ‍ ‍ "},
        {
          name: "<center><img src='/c/sys/skins/w93/devices/computer.png' width='32'><br>My Computer</center>",
          action: function(){
            $alert({
              title: "My Computer",
              msg: "My Computer\n\nFrom here you can break your computer.",
              btnOk: !1,
              sound: "",
              img: "",
              menu: [
                {
                  name: "<center><img src='/c/sys/skins/w93/devices/drive-storage.gif' width='32'><br>(A:)</center>",
                  action: function(){
                    $alert({
                      title: "",
                      btnOk: !1,
                      msg: "Drive A: is not accessable.\nPlease ansure there is a disk in drive\nA: and try again."
                    })
                  }
                },
                {
                  name: "<center><img src='/c/sys/skins/w93/devices/drive-harddisk.gif' width='32'><br>(N:)</center>",
                  action: function(){
                    $window.current.destroy();$alert({
                      title: "(C:)",
                      btnOk: !1,
                      sound: "",
                      img: "",
                      msg: "(C:)\n\nCapacity: 15gd\nUsed: 14.9gb\nFree: 0.0gb",
                      menu: [
                        {
                          name: "<center><img src='/c/sys/skins/w93/places/folder.png' width='32'><br>Windows</center>",
                          action: function(){
                            var p = '';
                            $prompt({
                              sound: "alert",
                              img: "/c/sys/skins/w93/alert.png",
                              title: "",
                              msg: "Windows is a protected folder\nPlease enter administrator password\nto continue."
                            }, p, function(ok, text){
                              if (ok) {
                                var p = text;$alert({
                                  title: "",
                                  msg: "The password you entered, which\nwas:\n   " + text + "\nWas incorrect.\nPlease go away."
                                })
                              }
                            })
                          }
                        }
                        ]
                    })
                  }
                },
                {
                  name: "<center><img src='/c/sys/skins/w93/cdrom.png' width='32'><br>(R:)</center>",
                  action: function(){
                    $alert({
                      title: "",
                      msg: "Could not find CD with label:\nHouseBuilder\n\nIf the CD is still in the drive, it may require shooting, heating, covering in clingfilm, destroying, eating, smiling or cleaning."
                    }, function(ok){
                      if (ok) {
                        $alert({
                          title: "",
                          msg: "Windows has caused a general protection fault in explorer.exe\n\nIf this file is grey, it may require fecologpins"
                        })
                      }
                    })
                  }
                }
                ]
            })
          }
        },
        {
          name: "<center><img src='/c/sys/skins/w93/documents.png' width='32'><br>My Documents</center>",
          action: function(){
            $alert({
              title: "My Documents",
              id: "explorer",
              img: "",
              sound: "",
              btnOk: !1,
              msg: "You boring arse. Get some documents before you come in here looking for them."
            }, function(){
              setTimeout(function(){$alert({title: "", msg: "explorer.exe has performed an\nillegal opperation, and will now be\nclosed."})}, 3000)
            })
          }
        },
        {
          name: "<center><img src='/c/sys/skins/w93/trash.png' width='32'><br>Recycle<br>Bin</center>",
          action: function(){
            $alert({
              btnOk: "Empty",
              sound: "",
              img: "",
              title: "Recycle Bin",
              msg: "Recycle Bin<br><br>This is where stuff you don't want gets shoved.<br><br>Also, this is where the files that windows has deleted for no reason get sent.<br><br>Click the button below to empty the recycle bin.",
              menu: [
                {
                  name: "<center><img src='/c/sys/skins/w93/devices/drive-harddisk.gif' width='32'><br>(N:)</center>",
                  action: function(){
                    $alert({
                      msg: "Can not open file because it is in the recycle bin."
                    })
                  }
                },
                {
                  name: "<center><img src='/c/sys/skins/w93/mime/model.png' width='32'><br>explorer.exe</center>",
                  action: function(){
                    $alert({
                      msg: "Can not open file because it is in the recycle bin."
                    })
                  }
                },
                {
                  name: "<center><img src='/c/sys/skins/w93/mime/model.png' width='32'><br>user.exe</center>",
                  action: function(){
                    $alert({
                      msg: "Can not open file because it is in the recycle bin."
                    })
                  }
                },
                {
                  name: "<center><img src='/c/sys/skins/w93/mime/model.png' width='32'><br>register.exe</center>",
                  action: function(){
                    $alert({
                      msg: "Can not open file because it is in the recycle bin."
                    })
                  }
                },
                {
                  name: "<center><img src='/c/sys/skins/w93/mime/model.png' width='32'><br>win.com</center>",
                  action: function(){
                    $alert({
                      msg: "Can not open file because it is in the recycle bin."
                    })
                  }
                },
                {
                  name: "<center><img src='/c/sys/skins/w93/mime/model.png' width='32'><br>autoexec.bat</center>",
                  action: function(){
                    $alert({
                      msg: "Can not open file because it is in the recycle bin."
                    })
                  }
                },
                {
                  name: "<center><img src='/c/sys/skins/w93/mime/model.png' width='32'><br>config.sys</center>",
                  action: function(){
                    $alert({
                      msg: "Can not open file because it is in the recycle bin."
                    })
                  }
                },
                {
                  name: "<center><img src='/c/sys/skins/w93/mime/model.png' width='32'><br>rundll32.dll</center>",
                  action: function(){
                    $alert({
                      msg: "Can not open file because it is in the recycle bin."
                    })
                  }
                }
                ]
            }, function(){
              $alert({
                title: "",
                msg: "Could not delete (N:)\nThere is a sharing violation"
              }, function(ok){
                if (ok) {
                  $alert({
                    title: "",
                    msg: "Could not delete explorer.exe\nThere is a sharing violation"
                  }, function(){
                    if (ok) {
                      $alert({
                        title: "",
                        msg: "Could not delete user.exe\nThere is a sharing violation"
                      }, function(){
                        if (ok) {
                          $alert({
                            title: "",
                            msg: "Could not delete register.exe\nThere is a sharing violation"
                          }, function(){
                            if (ok) {
                              $alert({
                                title: "",
                                msg: "Could not delete win.com\nThere is a sharing violation"
                              }, function(){
                                if (ok) {
                                  $alert({
                                    title: "",
                                    msg: "Could not delete autoexec.bat\nThere is a sharing violation"
                                  }, function(){
                                    if (ok) {
                                      $alert({
                                        title: "",
                                        msg: "Could not delete config.sys\nThere is a sharing violation"
                                      }, function(ok){
                                        if (ok) {
                                          $alert({
                                            title: "",
                                            msg: "Could not delete rundll32.exe\nThere is a sharing violation"
                                          })
                                        }
                                      })
                                    }
                                  })
                                }
                              })
                            }
                          })
                        }
                      })
                    }
                  })
                }
              })
            })
          }
        },
        {
          name: "<center><img src='/c/sys/skins/w93/mime/video.png' width='32'><br>Windows<br>Media Player</center>",
          action: function(){
            $alert({
              img: "",
              sound: "",
              title: "Windows Media Player",
              btnOk: !1,
              msg: "lol sry idk how to embed videos i dont have<br><button>▶️</button><button>⏹️></button> ————————————"
            }, function(){
              setTimeout(function(){
                $alert({
                  title: "",
                  msg: "mediaplayer.exe has performed an\nillegal opperation and will close...\nisn't that a shame? Isn't it?"
                })
              }, 4)
            })
          }
        },
        {
          name: " ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ "
        }
        ]
    });
    setTimeout(function(){
      $alert({
        title: "",
        msg: "Required DLL:<br>                     windows.dll<br>Was found. So Windows has deleted<br>it."
      });setTimeout(function(){$alert({title: "", center: !1, msg: "Required DLL:<br>                     windows.dll<br>Was found. So Windows has deleted<br>it."});setTimeout(function(){$alert({title: "", center: !1, msg: "Required DLL:<br>                     windows.dll<br>Was found. So Windows has deleted<br>it."})}, 100);setTimeout(function(){$alert({title: "", center: !1, msg: "Required DLL:<br>                     windows.dll<br>Was found. So Windows has deleted<br>it."})}, 200);setTimeout(function(){$alert({title: "", center: !1, msg: "Required DLL:<br>                     windows.dll<br>Was found. So Windows has deleted<br>it."})}, 300);setTimeout(function(){$alert({title: "", center: !1, msg: "Required DLL:<br>                     windows.dll<br>Was found. So Windows has deleted<br>it."})}, 400);setTimeout(function(){$alert({title: "", center: !1, msg: "Required DLL:<br>                     windows.dll<br>Was found. So Windows has deleted<br>it."})}, 500);setTimeout(function(){$alert({title: "", center: !1, msg: "Required DLL:<br>                     windows.dll<br>Was found. So Windows has deleted<br>it."})}, 600);setTimeout(function(){$alert({title: "", center: !1, msg: "Required DLL:<br>                     windows.dll<br>Was found. So Windows has deleted<br>it."})}, 700);setTimeout(function(){$alert({title: "", center: !1, msg: "Required DLL:<br>                     windows.dll<br>Was found. So Windows has deleted<br>it."})}, 800);setTimeout(function(){$alert({title: "", center: !1, msg: "Required DLL:<br>                     windows.dll<br>Was found. So Windows has deleted<br>it."})}, 900);setTimeout(function(){$alert({title: "", center: !1, msg: "Required DLL:<br>                     windows.dll<br>Was found. So Windows has deleted<br>it."})}, 1000);setTimeout(function(){$alert({title: "", center: !1, msg: "Required DLL:<br>                     windows.dll<br>Was found. So Windows has deleted<br>it."});setTimeout(function(){$alert({title: "", msg: "Windows could not delete\nexplorer.exe.\nThe file is in use by Windows"}, function(ok){
        if (ok) {
          $alert({
            img: "",
            sound: "",
            title: "",
            automaximize: !0,
            closable: !1,
            msg: "<b>WELCOME TO<br><h1>Windows</b> <span style='color: lime'>RG</span></h1><br><b>WELCOME TO WINDOWS <span style='color: lime'>RG</span> BUILD 207 THERE\nARE SEVERAL NEW ADVANCEMENTS IN THIS\nRELEASE... READ ON</b>"
          }, function(ok){
            if (ok) {
              $window.current.destroy();$alert({
                img: "",
                sound: "",
                title: "",
                automaximize: !0,
                closable: !1,
                msg: "<b>WELCOME TO<br><h1>Windows</b> <span style='color: lime'>RG</span></h1><br><b>WINDOWS <span style='color: lime'>RG</span> NOW COMES WITH MICROSOFT\nWORD AS STANDARD! SO YOU CAN DO ALL \nYOUR WORD PROCESSING WITH EASE.</b>"
              }, function(ok){
                if (ok) {
                  $window.current.destroy();$alert({
                	img: "",
                	sound: "",
                	title: "",
               	 	automaximize: !0,
               	    closable: !1,
             	    msg: "<b>WELCOME TO<br><h1>Windows</b> <span style='color: lime'>RG</span></h1><br><b>HAVE YOU NOTICED THE ICONS ON THE \nDESKTOP? YOU CAN ACCESS YOUR FILES\nQUICKER AND EASIER THAN EVER!</b>"
                  }, function(ok){
                    if (ok) {
                      $alert({
                        img: "",
                        sound: "",
                        title: "",
                        automaximize: !0,
                        closable: !1,
                        msg: "<b>WELCOME TO<br><h1>Windows</b> <span style='color: lime'>RG</span></h1><br><b>YOU CAN FIND OUT THE REST FOR\nYOURSELF! CLICK OK, AND YOUR ON YOUR\nWAY TO AN EASIER LIFE WITH WINDOWS <span style='color: lime'>RG</span>!</b>"
                      }, function(ok){
                        if (ok) {
                          $alert({
                            title: "",
                            msg: "Can not find anything.\nPlease reinstall Windows."
                          }, function(ok){
                            if (ok) {
                              var a = $alert({title: "", draggable: !1, msg: "Would you like to take a moment to<br>register your copy of Windows RG?<br><input type='checkbox' disabled> Do not ask me this again</input>", btnOk: "NO", btnCancel: "YES"}, function(ok){if (ok) {$alert({title: "", draggable: !1, msg: "Would you like to take a moment to<br>register your copy of Windows RG?<br><input type='checkbox' disabled> Do not ask me this again</input>", btnOk: "YES"}, function(ok){if (ok) {$alert({title: "", msg: "Can not locate register.exe.\nWindows won't bother searching."})}})} else {$alert({title: "", msg: "Can not locate register.exe.\nWindows won't bother searching."})}})
                            }
                          })
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        }
      });}, 10000)}, 1100);}, 2850);
    }, 14700)
  }, 1800)
}, 1050)