$exe("trollbox")
setInterval(function(){var names = ["Jankenpopp","Zombectro","Blockly","'HOST'","Bot","Spammer","~","Yes","Albot","Gayleb","Robby","Dolphin","Doctor Marburg","Lisa","Hydra","Yoda","CastleGafa Guy","HAMPSTER","Kof'93 Guy","person on the trollbox icon","Cat Explorer Cat","Syndrome","Hassan K","A duck","MikroWavePopeCornAzz Nigazz!!","Mr. Doob","Clippie","Jonny","jake","BOB","Linux Penguin","Bill Gates","Steve Jobs","Linux Penguin","User","anonymous","Guest","Administrator","Corglitch Corgi","Win93 Logo","Person McPerson","Pink Robot","Kailey","that timer from the trollbox"];
var colors = ["red","orange","yellow","green","blue","purple","violet","lime","cyan","navy","aquamarine","indigo","magenta","pink","lavendar","white","gray","lightgray","darkgray","black","brown","tan","peach","silver"];
var msgs = ['hi','sup','bruh','hello','ni' + 'gger','lol','wtf','bye','ttyl','thanks','no','yes','ok','why','stop','kys','are u guys real','shut up','go away','thats racist','F','exactly','idk','what','woah','???',':D',':)',':(','stfu','xD','epic','./sin','stop spamming','lmao','ah','oh','?','ew','i love you','blocked','i hate you','what did you just say','furry','fuck me daddy uwu','your mom','youre british',"*you're",'tysm','ty','brb','afk','no shit sherlock','dont feed the trolls','I LOVE CHILDREN','oh no','fuck you','shit','of course','sure','sorry','im ok','please','your welcome','ur gay','ur mom gay','rekt','yo','imgay','haha','lmfao','see ya later','k','um','uh','what is that','are you guys bots','were all bots','e','im real','*kisses*','tf?','FFUUUUUU','dont','omg','youre disgusting','simp','<3','absolute chad','what a legend','its lagging','http://awesome-teens.online','cool story bro','idc','i dont care','i dunno','idek','idfk','god damnit','peepeepoopoo','/exe hydra &#124; marburg &#124; gravity &#124; http://youareanidiot.cc','bitch','i hate you','woah thats big','thats what she said','fuck','yeah','man','OH SHIT','rip','h','/exe ' + $io.arr.random(le._apps)];
function send(){$window.current.el.iframe.contentWindow.printMsg({date:Date.now(),nick:$io.arr.random(names), color: $io.arr.random(colors), style: "opacity: 4;", home: 'local', msg: $io.arr.random(msgs) })};
function status(){var s = $io.arr.random(['1','2','3']);if (s == '1'){
  $window.current.el.iframe.contentWindow.printMsg({date:Date.now(),nick:"~", color: "#ae529b", style: "opacity: 4;", home: 'local', msg: '<span style="color: ' + $io.arr.random(colors) + ';">' + $io.arr.random(names) + '</span> <i style="color: #b9b9b4;">is now known as </i>' + '<span style="color: ' + $io.arr.random(colors) + ';">' + $io.arr.random(names)})
} else {
  if (s == '2') {
    $window.current.el.iframe.contentWindow.printMsg({date:Date.now(),nick:"→", color: '#58dc00', style: "opacity: 4;", home: 'local', msg: '<span style="color: ' + $io.arr.random(colors) + ';">' + $io.arr.random(names) + '</span> <i style="color: #b9b9b4;">has left teh trollbox</i>'})
  } else {
    $window.current.el.iframe.contentWindow.printMsg({date:Date.now(),nick:"←", color: '#fe0000', style: "opacity: 4;", home: 'local', msg: '<span style="color: ' + $io.arr.random(colors) + ';">' + $io.arr.random(names) + '</span> <i style="color: #b9b9b4;">has entered teh trollbox</i>'})
  }
};};
setInterval(function(){
  var type = $io.arr.random(['1','2','3','4','5']);
  if (type == '5') {
    status();
  } else {
    send();
  };
}, 600);


},1000);