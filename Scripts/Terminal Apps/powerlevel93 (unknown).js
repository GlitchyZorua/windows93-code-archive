le._apps.powerlevel93 = {
    categories: 'Utility;TerminalEmulator;System',
    name: 'Powerlevel93',
    icon: 'apps/terminal.png',
    exec: function(url, opt) {
      var le = this.le;
      var cli;
      var cfg = $extend({onopen: $noop}, opt);
      $window.call(this, {
        bodyClass: 'ui_terminal',
        onopen: function(el, body) {

          cli = $cli(body, {
            exe: $exe,
            cols: 60,
            //prompt:'>',
            cwd: le._path.home.slice(0, -1),
            setPrompt: function() {
              var cwd = this.cwd.replace(le._path.home.slice(0, -1), '~');
              cli.prompt.innerHTML = this.prompt = '<span style="background-color: #1d98f3; color: #31363b">' + cwd + '</span><span style="color: #1d98f3"></span>&nbsp;'
            },
            getPathObj: function(path) {
              return $fs.utils.getPathObj(typeof path === 'string' ? path : this.cwd, this.cwd);
            }
          });
          cli.window = this;
          if (url) {
            var tree = cli.cfg.getPathObj(url);
            if (tree && tree.obj) {
              cli.cfg.cwd = tree.cwd;
              cli.cfg.setPrompt();
            }
          }
          cli.onkey = function(key, val) {

            if (key === 'tab') {
              var cmd = $exe.parse(val);
              if (cmd && cmd.arguments.length) val = cmd.arguments[cmd.arguments.length-1];
              var obj = cli.cfg.getPathObj().obj;
              if (val.indexOf('/') === 0 || val.indexOf('/') > -1) {
                var path = val.split('/');
                val = path.pop();
                path = path.join('/') + '/';
                obj = cli.cfg.getPathObj(path).obj;
              }
              var hints = [];
              $io.obj.all(obj, function(item, key) {
                if (key.indexOf(val) === 0) hints.push(key + (typeof item === 'number' ? '' : '/'));
              });
              if (!hints.length && !cmd) {
                $io.obj.all(le._apps, function(item, key) {
                  if (key.indexOf(val) === 0) hints.push(key);
                });
              }
              if (!hints.length && !cmd) {
                $io.obj.all(window, function(item, key) {
                  if (key.indexOf(val) === 0) hints.push(key);
                });
              }
              if (hints.length === 1) cli.input.value = cli.input.value + hints[0].slice(val.length);
              else if (hints.length) $log(' '), $log(hints.join(', '));

              return false;
            }
          }
          cli.cfg.setPrompt();
          cli.setFocus();
          cfg.onopen(cli);
        },
        onclose: function() {
          cli.destroy();
        }
      });
    }
  }