le._apps.js = {
  categories: "Viewer",
  name: "Run JS",
  icon: "apps/iframe.png",
  accept: "application/javascript",
  exec: function() {
    var url = this.arg.arguments.join(" ");
    
    if (!url) {
      $log("Usage: js [PATH/CODE]");
      $log('e.g. : "js /a/hello.js", "js alert(42)"');
    } else {
      try {
        eval(url);
      } catch (err) {
        if (url.indexOf("/c/") === 0) {
          $loader.script(url);
        } else {
          $file.open(url, "URL", function(val) {
            $loader.script(val);
          });
        }
      }
    }
  }
};