le._apps['3dgen'] = {
    hascli: true,
    silent: true,
    name: "3D Text Generator",
    categories: "Graphics;Viewer;Amusement;Accessories",
    icon: "/c/sys/skins/w93/apps/3d.png",
    exec: function(){
      function wiki(){
        $window({
          url: "https://en.wikipedia.org/wiki/Web_colors#Hex_triplet",
          title: "Web Colors - Wikipedia",
          icon: `${le._apps.catex.icon||"/c/sys/skins/w93/apps/catExplorer.png"}`,
          footer: "<span style='color:#242837;margin-left: 47%;font-size:6px;'>https://en.wikipedia.org/wiki/Web_colors#Hex_triplet</span>",
          help: "Help text"
        });
      };
      var t = "3D Text Generator";var i = `${le._apps['3d'].icon||'/c/sys/skins/w93/apps/3d.png'}`;
      $prompt({
        title: t,
        icon: i,
        img: i,
        prompt: "Windows93",
        btnOk: "Next",
        btnCancel: "Cancel",
        msg: "Enter text:",
        help: "Spaces are not supported for 3D text.\nAny spaces will be replaced with underscores."
      }, function(ok,text){
        if (ok){
          var txt = `${text.replace(/ /gi, '_')||"No_text_⁣provided"}`;
          var hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];var r = $io.arr.random;
          var colors = ['red','orange','yellow','green','blue','purple','black','white','gray','brown','silver','darkslategray','lightgray','sienna','chocolate','tan','beige','crimson','maroon','orangered','redorange','darkorange','tangerine','yelloworange','orangeyellow','gold','goldenrod','palegoldenrod','greenyellow','yellowgreen','lime','lightgreen','darkgreen','bluegreen','cyan','teal','turquoise','aqua','aquamarine','sky','lightcyan','navy','violetblue','violet','fuchsia','mediumorchid','mediumpurple','cornflowerblue','limegreen','magenta','lavendar','pink','darkmagenta'];
          $prompt({
            title: t,
            icon: i,
            img: i,
            prompt: r(["#"+r(hex)+r(hex)+r(hex)+r(hex)+r(hex)+r(hex),"#"+r(hex)+r(hex)+r(hex)]),
            btnOk: "Done",
            btnCancel: "Cancel",
            msg: "Enter color:",
            help: "Supported colors include any 3 or 6 digit <a href='javascript:(wiki())'>HEX code</a>."
          }, function(ok, text){
            if (ok){
              var color = `${text||"#fff"}`;
              var d = $window.current.id; $window.current.el.base.style.top = "0"; $window.current.el.base.style.left = "0"; $exe('3d ' + txt + " " + color);
              $log.blue.italic('Loading text...'); $log.succes('Text loaded'); $log.white.repeat('-');
            };
          });
        };
      });
    }
  }