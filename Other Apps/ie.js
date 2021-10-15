$exe('layer https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F87%2Feb%2Ff8%2F87ebf826d48efbd8ec2cb060d07e0799--internet-explorer-web-browser.jpg&f=1&nofb=1')

  setTimeout(doSomething, 3000);

function doSomething (){
$alert({
  title: 'Info',
  msg: 'Thank you for using Microsoft Internet Explorer! By using this software, you agree to Windows 93 TOS.',
  icon: 'https://win98icons.alexmeub.com/icons/png/msie1-4.png', // leave blank for nothing
  img: 'https://win98icons.alexmeub.com/icons/png/msg_question-0.png',
  btnOk: 'Agree',
  btnCancel: 'Disagree',
  onok: function(){
    $window.current.destroy();
    ob();
  }
});
}


function ob(url){
var browser = $window({
  url: url || localStorage.getItem('browsermain') || 'https://www.example.com/',
  title: 'Internet Explorer',
width: 984,
        height: 684,
icon: 'https://win98icons.alexmeub.com/icons/png/msie1-2.png',
  menu: [
    {
      name: "Options",
      items: [
        {
          name: "Open Main Page",
          action: function () {
            if(localStorage.getItem('browsermain')){ 
              browser.el.iframe.src = localStorage.getItem('browsermain');
              document.getElementById('browser_url').value = '';
            } else {
              browser.el.iframe.src = 'https://www.example.com/';
            }
          }
        },
        {
          name: "Change Main Page",
          action: function () {
            $prompt('Insert new main page URL.', '', function(ok, text) {
              if (ok) {
                localStorage.setItem('browsermain', text);
                $confirm('Main page changed. Do you wish to open the main page now?', function (ok){
                  if (ok) {
                    browser.el.iframe.src = localStorage.getItem('browsermain');
                  }
                });
              }
            });
          }
        },
        {name:"---"},
        {
          name:"Show/Hide URL",
          action: function () {
            if(browser.el.menu.firstChild.style.display == 'none'){
              browser.el.menu.firstChild.style.display = 'flex';
            } else {
              browser.el.menu.firstChild.style.display = 'none';
            }
          }
        }
      ]
    }
  ]
});
let browsernav = document.createElement('div');
browsernav.className = 'browser_nav';
browsernav.style.display = 'flex';
browsernav.innerHTML = `<input type="text" id="browser_url" style="flex:1;"><button class="browser_browse" onclick="browse();">Go</button>`;
browser.el.menu.insertBefore(browsernav, browser.el.menu.firstChild);
browse = () => {
  browser.el.iframe.src = document.getElementById('browser_url').value;
}
}
le._apps.browser = {
exec: function() {
let args = this.arg.arguments;
if(args[0]){
  ob(args[0]);
  $log('Opened URL ' + args[0]);
} else {
  ob();
  $log('Opened browser.');
};
},
hascli: true,
terminal: true,
}


























