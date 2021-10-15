let tppconfig
let tppstyle = document.createElement("style")

$file.open("/a/.config/tpp/config.json", "String", file => {
    tppconfig = JSON.parse(file)
    function updatestyle() {
        let finalcss = ""
        if (tppconfig.style.widthfix) finalcss = ".tppWindow .ui_terminal > code {width:auto !important}\n"
        let actwidth = tppconfig.style.windowsize.width
        let actheight = tppconfig.style.windowsize.height
        
        let actshadowx = tppconfig.style.shadow.x
        let actshadowy = tppconfig.style.shadow.y
        let actshadowblur = tppconfig.style.shadow.blur
        let actshadowcolor = tppconfig.style.shadow.color
        
        let actcolor = tppconfig.style.color
        let actspacing = tppconfig.style.spacing
        let actlineheight = tppconfig.style.lineheight
        let actfont = tppconfig.style.font
        let actsize = tppconfig.style.size
        
        let actvars = ["actwidth", "actheight", "actshadowx", "actshadowy", "actshadowblur", "actshadowcolor", "actcolor", "actspacing", "actlineheight", "actfont", "actsize"]
        actvars.forEach(function(index) {
            eval(`if (${index} == -1) ${index} = "unset"`)
            eval(`if (typeof(${index}) == "number") ${index} = ${index} + "px"`)
        })
        
        finalcss = finalcss + `.tppWindow {min-width:${actwidth};min-height:${actheight}}\n.tppWindow .ui_terminal * {color:${actcolor};text-shadow:${actshadowx} ${actshadowy} ${actshadowblur} ${actshadowcolor} !important;letter-spacing:${actspacing};line-height:${actlineheight};font-family:${actfont};font-size:${actsize}}`
    
        tppstyle.innerText = finalcss
        document.head.appendChild(tppstyle)
    }
    
    updatestyle()
    
    le._apps["tpp"] = {
        categories: "Utility;TerminalEmulator",
        name: "Terminal++",
        icon: "apps/terminal.png",
        exec: function(url, opt) {
            var le = this.le;
            var cli;
            var cfg = $extend({ onopen: $noop }, opt);
            $window.call(this, {
                bodyClass: "ui_terminal",
                baseClass: "tppWindow",
                title: "Terminal++ (" + tppconfig.name + ")",
                onopen: function(el, body) {
                    cli = $cli(body, {
                        exe: $exe,
                        cols: 60,
                        //prompt:'>',
                        cwd: le._path.home.slice(0, -1),
                        setPrompt: function() {
                            var cwd = this.cwd.replace(le._path.home.slice(0, -1), "~");
                            cli.prompt.innerHTML = this.prompt = ">" + cwd + "&nbsp;";
                        },
                        getPathObj: function(path) {
                            return $fs.utils.getPathObj(
                                typeof path === "string" ? path : this.cwd,
                                this.cwd
                                );
                            },
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
                            if (key === "tab") {
                                var cmd = $exe.parse(val);
                                if (cmd && cmd.arguments.length)
                                val = cmd.arguments[cmd.arguments.length - 1];
                                var obj = cli.cfg.getPathObj().obj;
                                if (val.indexOf("/") === 0 || val.indexOf("/") > -1) {
                                    var path = val.split("/");
                                    val = path.pop();
                                    path = path.join("/") + "/";
                                    obj = cli.cfg.getPathObj(path).obj;
                                }
                                var hints = [];
                                $io.obj.all(obj, function(item, key) {
                                    if (key.indexOf(val) === 0)
                                    hints.push(key + (typeof item === "number" ? "" : "/"));
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
                                if (hints.length === 1)
                                cli.input.value =
                                cli.input.value + hints[0].slice(val.length);
                                else if (hints.length) $log(" "), $log(hints.join(", "));
                                
                                return false;
                            }
                        };
                        cli.cfg.setPrompt();
                        cli.setFocus();
                        cfg.onopen(cli);
                    },
                    onclose: function() {
                        cli.destroy();
                    },
                });
            }
    }
    
    if (tppconfig.override) {
        le._apps["terminal"].exec = le._apps["tpp"].exec
    }

    console.log("tpp loaded")
})