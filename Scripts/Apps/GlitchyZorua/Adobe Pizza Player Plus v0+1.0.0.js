

le._apps["flash"] = {
    title: "Adobe Pizza Player™",
    categories: "Emulator",
    name: "Adobe Pizza Player™",
    icon: "/c/files/images/icons/adobe.png",
    exec: function() {
        var that = this;
        var iframe, win;
        var about = "";
        var soft = "";
        var data = {
            title: "Adobe Pizza Player™",
            name: "flash",
            icon: "/c/files/images/icons/adobe.png",
            url: " ",
            width: 640,
            height: 400,
            resizable: true,
            automaximize: false,
            maximizable: true,
            //


            onopen: function(el) {
                iframe = this.el.iframe;
                iframe.src = "/d/programs/flash/";

                // Add event listener for error detection
                iframe.addEventListener('error', function(event) {
                    $alert.error('Session Interrupted; Ruffle Crashed.<br><br>' + event.message);
                });
            },
            //
            onready: function(el) {
    
            },
            //
            menu: [{
                    name: "File",
                    items: [{
                            name: "Browse Files",
                            action: function() {
                                $confirm('This will stop your session. Continue?', function (ok){
                                    if (ok) {
                                        iframe.src = "/d/programs/flash/";
                                    }
                                });
                            },
                        },
                        {
                            name: "Random File",
                            action: function() {
                                var src = iframe.src.split('/').splice(2);
                                if (src[0] == "www.windows93.net" && src[1] == "d" && src[2] == "programs" && src[3] == "flash") {
                                    iframe.contentWindow.randomFlash();
                                } else {
                                    iframe.src = "/d/programs/flash/?random=1";
                                }
                            },
                        },
                        {
                            name: "---"
                        },
                        {
                            name: "Open local file...",
                            action: function() {
                                $explorer("/a/", {
                                    browse: !0,
                                    explorer: !0,
                                    onclose: function(b, c) {
                                        b && (iframe.contentWindow.location.href = "/d/programs/flash/?swf=", iframe.addEventListener("load", function() {
                                            $file.open(c, "ArrayBuffer", async function(b) {
                                                await iframe.contentWindow.player.play_swf_data(b), iframe.contentWindow.$("#loadingConsoleContainer").remove()
                                            })
                                        }, {
                                            once: !0
                                        }))
                                    }
                                })
                            }
                        },
                        {
                            name: "---"
                        },
                        {
                            name: "Close",
                            action: function() {
                                this.window.close();
                            },
                        },
                    ]
                },
                {
                    name: "Options",
                    items: [{
                            name: "Fullscreen",
                            action: function() {
                                iframe.contentWindow.openFullscreen();
                            },
                        },
                        /*/
                        {
                            name: "Stop Emulation",
                            action: function() {
                                $confirm('Stop the emulation right now?\n<b>Any unsaved data will be lost!</b>', function (ok){
                                    if (ok) {
                                        iframe.src = "/d/programs/flash/";
                                    }
                                });
                            },
                        },
                        /*/
                        {
                            name: "Reload Emulation",
                            action: function() {
                                $confirm('Reload the emulation right now?\n<b>Any unsaved data will be lost!</b>', function (ok){
                                    if (ok) {
                                        iframe.contentWindow.window.location.reload();
                                    }
                                });
                            },
                        },
                        {
                            name: "---"
                        },
                        {
                            name: "Share Link",
                            action: function() {
                                iframe.contentWindow.share();
                            },
                        },
                        {
                            name: "Download File",
                            action: function() {
                                iframe.contentWindow.download();
                            },
                        },
                    ]
                },
                {
                    name: "About",
                    action: function() {
                        about = "<h3>Ruffle</h3>" +
                            "<p><b>Flash Player emulator in Javascript<br>" +
                            "<a href='https://ruffle.rs/' target='blank'>https://ruffle.rs</a></b></p>" +
                            "<p>It's now official, Adobe Flash only has a few years left to live. At the end of 2020, all development and support will be stopped. It's actually a good thing that the web we have today isn't built on Flash, but it's sad to see all this content disappear because of obsolescence. Back in the days the Flash scene was very large with many online games and cool websites. Fortunately, there are enthusiasts (like <a href='https://ruffle.rs' target='blank'>Ruffle</a> and <a href='http://bluemaxima.org/flashpoint/' target='blank'>Flashpoint</a>) who work on emulators so that we can enjoy the content forever. Much love to them! Massive bigup to <a href='https://archive.org/' target='blank'>archive.org</a> too!</p>" +
                            "<p><b>Tweaks & selecta:</b> Jankenpopp<br><b>Open Local File:</b> utf-4096... and GlitchyZorua</p><br>" +
                            "<p>Everything else: GlitchyZorua</p>",
                        $alert.info(about);
                    },
                },
            ],
        };
        win = $window.call(this, data);
    },
}