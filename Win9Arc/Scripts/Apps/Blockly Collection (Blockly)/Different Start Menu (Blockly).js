  function menuFromFileTree(obj, path) {
    var files = [];
    var dirs = [];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop) && prop !== "." && prop !== "..") {
        if (typeof obj[prop] == "number") {
          var nfo = $fs.utils.getInfo(prop);
          var openers = $fs.utils.getOpeners(prop);
          files.push({
            name: prop,
            icon: nfo.icon,
            action: (function(obj, nfo, openers) {
              return function() {
                $exe(openers[0] + " " + path + obj);
              };
            })(prop, nfo, openers),
          });
        } else if ($io.is.obj(obj[prop]) || $io.is.arr(obj[prop])) {
          dirs.push({
            name: prop,
            icon: "/c/sys/skins/" + le._settings.skin + "/places/16/folder.png",
            items: (function(obj, path) {
              return function() {
                return menuFromFileTree(obj, path);
              };
            })(obj[prop], path + prop + "/"),
          });
        }
      }
    }
    return dirs.sort().concat(files.sort());
  };
  function menuFromAppsAtlas(obj) {
    var commands = [];
    var openers = [];

    var keys = Object.keys(obj);
    $io.arr.all(keys.sort(), function(prop) {
      if (obj[prop] && obj[prop].exec) {
        var name = obj[prop].name
          ? prop + ' <em class="startmenu_cmd">(' + obj[prop].name + ")</em>"
          : prop;
        var icon =
          obj[prop].icon ||
          "/c/sys/skins/" + le._settings.skin + "/programs.png";
        if (icon.indexOf("/") !== 0)
          icon = "/c/sys/skins/" + le._settings.skin + "/" + icon;
        (obj[prop].cmd ? commands : openers).push({
          name: name,
          icon: icon,
          action: (function(prop) {
            return function() {
              $exe(prop);
            };
          })(prop),
        });
      }
    });
    return openers;
  };
!(()=>{function a(){var a=[],c=Object.keys(b._apps).sort().filter(b=>!b.cmd),d=function(){var a=c.filter(a=>b._apps[a].cats&&b._apps[a].cats.includes("Root"));return a}(),e=function(){var a={name:"Other",keys:c.filter(a=>!b._apps[a].cats&&!(b._apps[a].terminal||b._apps[a].hascli))};return a}(),f=function(){function a(b){var c=[],d=[];for(var e in b){var f=b[e];0===f?c.push(e):"object"==typeof f&&d.push({name:e,keys:a(f)})}return d.concat(c)}return a(function(){var a={};for(var d in c){var e=b._apps[c[d]];if(e.cats&&e.cats[0])for(var f in e.cats){var g=e.cats[f];if("Root"!=g){var h=g.split(">"),i=a;for(var j in h){var k=h[j];i[k]||(i[k]={}),j==h.length-1?i[k][c[d]]=0:i=i[k]}}}}return a}())}();a=f.concat([e]).concat(d);var g=a=>{if(b._apps[a]&&b._apps[a].exec){var c=b._apps[a].name?b._apps[a].name+" <em class=\"startmenu_cmd\">("+a+")</em>":a,d=b._apps[a].icon||"/c/sys/skins/"+b._settings.skin+"/programs.png";return 0!==d.indexOf("/")&&(d="/c/sys/skins/"+b._settings.skin+"/"+d),{name:c,icon:d,action:function(a){return function(){$exe(a)}}(a)}}return"---"==a?{name:"---"}:void 0},h=c=>{var d=[];for(var e in c){var f=c[e];"string"==typeof f?d.push(g(f)):"object"==typeof f&&(d.push({icon:"/c/sys/skins/"+b._settings.skin+"/places/16/folder.png",name:f.name}),d[d.length-1].items=h(f.keys))}return d};return h(a)}var e=[
    {
      name: "Programs",
      icon: "/c/sys/skins/w93/programs.png",
      items: function() {
        return menuFromAppsAtlas(le._apps);
      },
    },
    {
      name: "Documents",
      icon: "/c/sys/skins/w93/documents.png",
      items: function() {
        return menuFromFileTree(le._files.c, "c/");
      },
    },
    {
      name: "Storage",
      icon: "/c/sys/skins/w93/cdrom.png",
      items: function() {
        return menuFromFileTree(le._files.a, "a/");
      },
    },
    //{name: 'Settings', icon: '/c/sys/skins/'+le._settings.skin+'/settings.png', action: actions.settings},
    {
      name: "Find",
      icon: "/c/sys/skins/w93/find.png",
      action: function(){$alert("<b>Did you know ?</b><br>You can use Find to locate your real father.<br>But I will save you the trouble.<br><b>Windows 93 is your real father.</b>")},
    },
    {
      name: "Help",
      icon: "/c/sys/skins/w93/help.png",
      action: function(){
        $window({
          title: "Help",
          url: "//www.windows93.net/wiki/93.php?Home",
          width: 800,
          height: 600
        });
      },
    },
    {
      name: "Run...",
      icon: "/c/sys/skins/w93/run.png",
      action: function(){
        var funny = [
          function(){$alert.error('There is nowhere you can run')},
          function(){$alert.error("Are you kidding!? Your computer doesn't have any legs!")},
          ]; $io.arr.random(funny)();
      }
    },
  {
    name: "Store",
    icon: "/c/sys/skins/w93/store.png",
    action: function(){$exe('store')}
  },
    {
      name: "Fullscreen",
      icon: "/c/sys/skins/w93/apps/dora.png",
      action: function(){$fullscreen()},
    },
    { name: "---" },
  {
    name: "Power",
    icon: "/c/sys/skins/w93/shutdown.png",
    items: [
      {
      name: "Reinstall",
      icon: "/c/sys/skins/w93/install.png",
      action: function(){$exe('format')},
    },
    {
      name: "Reboot...",
      icon: "/c/sys/skins/w93/16/redo.png",
      action: function(){location.reload()},
    },
    {
      name: "Shutdown",
      icon: "/c/sys/skins/w93/shutdown.png",
      action: function(){$exe('shutdown')},
    }
      ]
  }],f=document.getElementById("s42_start"),g=f.cloneNode(!0);f.parentNode.replaceChild(g,f),$menu(document.getElementById("s42_start"),e,{mode:"popup",position:{within:le._dom.desktop}})})();