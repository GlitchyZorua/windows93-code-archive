//created by _gherry
(() => {
  var button = document.createElement("button");
  button.classList.add("taskbar_show-desktop");
  button.title = "Show desktop";
  document.querySelector("#s42_taskbar").append(button);
  var style = document.createElement("style");
  style.innerHTML = ".taskbar_show-desktop {margin: -4px -3px -3px 5px}";
  document.body.append(style);

  var minimized = false;
  var minimizedWindows = [];
  function toggle() {
    if (!minimized) {
      minimized = true;
      minimizedWindows = [];
      for (let i = 0; i < $window.instances.length; i++) {
        if ($window.instances[i]) {
          if (
            !$window.instances[i].el.base.classList.contains(
              "ui_window--minimized"
            )
          ) {
            $window.instances[i].minimize();
            minimizedWindows.push($window.instances[i]);
          }
        }
      }
    } else {
      for (let i = 0; i < minimizedWindows.length; i++) {
        minimizedWindows[i].restore();
      }
      minimized = false;
      minimizedWindows = [];
    }
    console.log([minimized, minimizedWindows]);
  }

  button.onclick = toggle;
})();
