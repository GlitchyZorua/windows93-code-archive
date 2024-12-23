le._apps.dice = {
    exec: function() {
      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
  
      var args = this.arg.arguments;
  
      if (args[0] == "--help") {
        $log("Usage: dice <min> <max> [argument]");
        $log("Example: dice 1 6");
        $log("<min> - The minimum number");
        $log("<max> - The maximum number");
       // $log('-no-round (--no-round, or just -nr): Do not round the number');
        $log('--help - displays this help message');
        return;
      }
  
      if (args.length > 0) {
        if (args[0] === undefined || args[1] === undefined) {
          $log.error('Min or max is undefined');
          return;
        }
  
        if (isNaN(args[0]) || isNaN(args[1])) {
          $log.error('Not a Number');
          return;
        }
  
        if (args[0] == null || args[1] == null) {
          $log.error('Min or max is null');
          return;
        }
  
        let min = parseFloat(args[0]);
        let max = parseFloat(args[1]);
        let num = getRandomArbitrary(min, max);
  
        if (args[2] == "-no-round" || args[2] == "--no-round" || args[2] == "-nr") { // this fucking sucks. it doesn't wanna work, and i don't know why. i guess if you wanna round, you gotta use the gui. Sigh.
          $log(num);
        } else {
          $log(Math.round(num));
        }
      } else {
        $window.form("Dice", {
          "schema": {
            "min": {
              "type": "number",
              "title": "Minimum",
              "placeholder": "1",
              "default": 1
            },
            "max": {
              "type": "number",
              "title": "Maximum",
              "placeholder": "6",
              "default": 6
            },
            "round": {
              "type": 'boolean',
              "title": 'Round Number',
              "default": true
            }
          }
        }, 
        function(ok, e) {
          if (ok) {
            let min = e.min;
            let max = e.max;
  
            if (min == null || max == null) {
              $alert.error('Min or max is null');
              return;
            }
  
            if (min === undefined || max === undefined) {
              $alert.error('Min or max is undefined');
              return;
            }
  
            if (isNaN(min) || isNaN(max)) {
              $alert.error('Not a Number');
              return;
            }
  
            let num = getRandomArbitrary(min, max);
            if (e.round) {
              num = Math.round(num);
            }
  
            $alert({
              title: 'Dice',
              msg: num,
              icon: 'https://u.cubeupload.com/GlitchyZorua/c33canvas.png',
              img: 'https://u.cubeupload.com/GlitchyZorua/c33canvas.png',
              btnOk: 'Close'
            });
          }
        });
      }
    },
  
    hascli: true,
    terminal: true
  };