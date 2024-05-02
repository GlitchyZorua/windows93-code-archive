{
    let tor = $window({
        title: "Tor93",
          baseClass: "tor93",
          html: "<div class=\"tabs\"><button class=\"add\" style=\"\">+</button></div><input class=\"search\" style=\"width:100%\" autocorrect=\"off\"><div class=\"sex\" style=\"height:calc(100% - 50px);width:100%\"></div>",
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
    {name: "Settings",
    items: [{
      name: "Home Page",
      action: function() {
    }}]
    }
    ]
    });
      let bowser = tor.el.body,
        input = bowser.getElementsByClassName("search")[0],
        tabs = bowser.getElementsByClassName("tabs")[0],
        add = bowser.getElementsByClassName("add")[0],
        frame = bowser.getElementsByClassName("sex")[0];
      input.addEventListener("keypress",function(e){
        iframe.src = "https://thingproxy.freeboard.io/fetch/" + iframe.src
        if(e.key == "Enter"){
          	iframe.src = input.value.replace(/^(https?:\/\/([^\.\/]+\.)?[^\.\/]+)\.onion/,"$1.onion.ly");
            if (iframe.src === "tor://settings"){
            iframe.src = "blob:http://www.windows93.net/0c5fe563-b072-4d9e-aaf1-b17edce061a3"
            }
            iframe.src = settingshtml
          	iframe.onerror = n=>{
              	delete iframe.onerror; //bye bye errors
            	iframe.src = "https://thingproxy.freeboard.io/fetch/" + iframe.src
            }
            currentbutton.fuck.innerHTML = input.value;
        };
    });
      let iframes = [], currentbutton, iframe={},
        addTab = function(){
          let button = document.createElement("button");
          let newframe = document.createElement("iframe");
          let fuckUjacob = document.createElement("span");
          fuckUjacob.innerHTML = " - "
          newframe.src = "https://bing.com/";
          newframe.style = "width:100%;height:100%;"
          iframes.push(newframe);
          button.innerHTML = "<span class=\"badcode\">https://bing.com/</span>";
          button.fuck = button.getElementsByClassName("badcode")[0] // i cant fucking even
          button.appendChild(fuckUjacob)
          button.onclick = function(){
                currentbutton = button;
                iframe.hidden = true;
                newframe.hidden = false;
                iframe = newframe;
                input.value = newframe.src;
          }; button.onclick();
          fuckUjacob.onclick = function(){
              button.remove(), newframe.remove();
          }
          frame.appendChild(newframe);
          tabs.appendChild(button);
        };
    addTab();
    add.addEventListener("click",addTab);
};