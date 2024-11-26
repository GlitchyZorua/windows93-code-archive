le._apps.doctor.exec = function(opt) {
        var le = this.le;
        var that = this;

        function killAllVirus(succes, fail) {
          le._dom.screen.classList.remove("acid");
          le._dom.screen.classList.remove("rotate");
          le._dom.screen.classList.remove("invert");
          le._dom.screen.classList.remove("grayscale");
          le._dom.screen.setAttribute("style", "");

          // check if any cmd have a doctor function...
          $io.obj.all(le._clean, function(val) {
            $io.arr.all(val, function(val) {
              val();
            });
          });

          for (var key in le._clean) delete le._clean[key];

          var virus = document.querySelectorAll(".virus");
          if (virus.length) {
            $io.arr.all(virus, function(el) {
              $window.destroy(el);
            });
            if (succes !== false) $docAlert(succes || "All Virus Killed !");
          } else {
            if (fail !== false) $docAlert(fail || "No Virus detected.");
          }
        }

        if (opt && opt.clean) {
          killAllVirus(false, false);
          return;
        }

        function $docAlert(msg) {
          $alert({
            title: "Doctor Marburg Antivirus",
            img: le._apps.doctor.icon,
            btnOk: "Thanks !",
            msg: msg,
          });
        }

        var funnyDoctorMarburg = [
          function() {
            $confirm(
              {
                title: "Doctor Marburg Antivirus",
                img: le._apps.doctor.icon,
                btnOk: "Yep!",
                btnCancel: "Nope!",
                msg: "That Hydra virus again ?",
              },
              function(isOk) {
                isOk &&
                  killAllVirus(
                    "Don't click on it next time",
                    "Are you kidding? There is no Hydra here!"
                  );
              }
            );
          },
          function() {
            $confirm(
              {
                title: "Doctor Marburg Antivirus",
                img: le._apps.doctor.icon,
                btnOk: "Breathe",
                msg: "Breathe in and out please...",
              },
              function(isOk) {
                isOk &&
                  killAllVirus(
                    "Inhale inhale. You're the victim",
                    "Diagnostic : Psycho-somatic addict-insane"
                  );
              }
            );
          },
          function() {
            $prompt(
              {
                title: "Doctor Marburg Antivirus",
                img: le._apps.doctor.icon,
                btnOk: "Say it",
                msg: "Say 99...",
              },
              function(isOk, res) {
                if (isOk && res == "99") {
                  killAllVirus();
                } else if (isOk) {
                  $confirm(
                    {
                      title: "Doctor Marburg Antivirus",
                      img: le._apps.doctor.icon,
                      btnOk: "Let's do that",
                      msg:
                        "Mhh, you're very sick, unfortunately I can't do anything for you... Except cleaning your computer",
                    },
                    function(isOk, res) {
                      if (isOk) {
                        killAllVirus();
                      }
                    }
                  );
                }
              }
            );
          },
          function(){
            $confirm({
              title: "Doctor Marburg Antivirus",
                      img: le._apps.doctor.icon,
                      btnOk: "Remove",
              btnCancel:"OK",
              msg: "17988 Viruses detected !"
            }, function(ok){
              if (ok){
                $alert({
                  title: "Doctor Marburg Antivirus",
                      img: le._apps.doctor.icon,
                  msg: "Unable to delete viruses",
                  btnOk: "Thanks !"
                });
              };
            });
          },
          function() {
            $confirm(
              {
                title: "Doctor Marburg Antivirus",
                img: that.app.icon,
                msg:
                  "Welcome to Doctor Marburg Antivirus.<br>Would you like to clean your System ?",
              },
              function(isOk, res) {
                if (isOk) {
                  $confirm(
                    {
                      title: "Doctor Marburg Antivirus",
                      img: le._apps.doctor.icon,
                      btnOk: "Sure",
                      btnCancel: "Not Really",
                      msg:
                        "<b>Warning !</b><br>Doctor Marburg is not responsible for direct, indirect, incidental or consequential damages resulting from any defect, error or failure to perform this ilegal operation.<br><br>Do you want to perform anyway ?",
                    },
                    function(isOk, res) {
                      if (isOk) {
                        $prompt(
                          {
                            title: "Doctor Marburg Antivirus",
                            img: le._apps.doctor.icon,
                            btnCancel: "Never Mind",
                            msg:
                              "Ok, please confirm with your credit card number",
                          },
                          function(isOk, res) {
                            if (isOk) {
                              $docAlert(
                                "<b> Ilegal operation detected !</b><br>DOCTOR MARBURG had blocked the following malware application to perform an ilegal operation : <br><br><i>DOCTOR MARBURG - ilegal Operation detected</i>"
                              );
                            } else {
                              $confirm(
                                {
                                  title: "Doctor Marburg Antivirus",
                                  img: le._apps.doctor.icon,
                                  btnOk: "Sure",
                                  msg:
                                    "I was just testing you ;)<br>Do the cleaning operation anyway ?",
                                },
                                function(isOk, res) {
                                  if (isOk) {
                                    killAllVirus();
                                  }
                                }
                              );
                            }
                          }
                        );
                      } else {
                        $docAlert("You're such a Pussy :p");
                      }
                    }
                  );
                } else {
                  killAllVirus("Well, I did it anyway ^^", false);
                }
              }
            );
          },
        ];

        if (document.querySelector(".virus--hydra")) {
          funnyDoctorMarburg[0]();
        } else {
          $io.arr.random(funnyDoctorMarburg)();
        }
      };