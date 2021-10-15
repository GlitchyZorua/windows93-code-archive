$store.set('firecat/firecat.js', `
$prompt('Please type the url', '', function(ok, text) {
    if (ok) {
        var url = text;
        var browser = $window({
            title: "Firecat",
            icon: "https://cdn.discordapp.com/attachments/510889725779902464/511595846421446688/catexplorer.png",
            help: "Firecat browser v1.3 by ilikebreadtoomuch(BloodSquid)\
  You will also need to install an ignore xframe headers extension for your browser",
            url: url,
            menu: [{
                name: "File",
                items: [{
                        name: "URL",
                        action: function() {
                            $window.current.destroy();
                            $exe("js /a/firecat/firecat.js");
                        }
                    },
                    {
                        name: "New",
                        action: function() {
                            $exe("js /a/firecat/firecat.js");
                        }
                    },
                    {
                        name: "---"
                    },
                    {
                        name: "End Tab",
                        action: function() {
                            $window.current.destroy();
                        }
                    }
                ]
            }, 
        {name: "Search",
        items: [{
          name: "Google",
          action: function() {
           $window.current.destroy()
                            $exe("js /a/firecat/firecatsearch.js")
        }}]
        }
        ]
        });
    }
});
`)
$store.set('firecat/firecatsearch.js', `
           $prompt('Please type what you want to search for', '', function(ok, text) {
              if (ok) {
                var search = text
                var url = "https://www.google.com/search?q=" + search
        var browser = $window({
            title: "Firecat",
            icon: "https://cdn.discordapp.com/attachments/510889725779902464/511595846421446688/catexplorer.png",
            help: "Firecat browser v1.3 by ilikebreadtoomuch(BloodSquid)\
  You will also need to install an ignore xframe headers extension for your browser",
            url: url,
            menu: [{
                name: "File",
                items: [{
                        name: "URL",
                        action: function() {
                            $window.current.destroy();
                            $exe("js /a/firecat/firecat.js")
                        }
                    },
                    {
                        name: "New",
                        action: function() {
                            $exe("js /a/firecat/firecat.js")
                        }
                    },
                    {
                        name: "---"
                    },
                    {
                        name: "End Tab",
                        action: function() {
                            $window.current.destroy()
                        }
                    }
                ]
            }, 
        {name: "Search",
        items: [{
          name: "Google",
          action: function() {
$window.current.destroy()
                            $exe("js /a/firecat/firecatsearch.js")
        }}]
        }
        ]
        });
    }
});
`)
$prompt('Please type the url', '', function(ok, text) {
    if (ok) {
        var url = text
        var browser = $window({
            title: "Firecat",
            icon: "https://cdn.discordapp.com/attachments/510889725779902464/511595846421446688/catexplorer.png",
            help: "Firecat browser v1.3 by ilikebreadtoomuch(BloodSquid)\
  You will also need to install an ignore xframe headers extension for your browser",
            url: url,
            menu: [{
                    name: "File",
                    items: [{
                            name: "URL",
                            action: function() {
                                $window.current.destroy();
                                $exe("js /a/firecat/firecat.js")
                            }
                        },
                        {
                            name: "New",
                            action: function() {
                                $exe("js /a/firecat/firecat.js")
                            }
                        },
                        {
                            name: "---"
                        },
                        {
                            name: "End Tab",
                            action: function() {
                                $window.current.destroy()
                            }
                        }
                    ]
                },
                {
                    name: "Search",
                    items: [{
                        name: "Google",
                        action: function() {
                            $window.current.destroy()
                            $exe("js /a/firecat/firecatsearch.js")
                        }
                    }]
                }
            ]
        });
    }
});