///////////////////////////////
///
/// AnimatedNicknames v0.0.4
/// Created by @DracoZ12
///
///////////////////////////////

var AnimatedNick = {};
AnimatedNick.speed = 100;
AnimatedNick.pos = -20;
AnimatedNick.name = $store.get('.config/trollbox/nick');
AnimatedNick.color = $store.get('.config/trollbox/color');;
AnimatedNick.type = "rainbow";
AnimatedNick.now = "!";
AnimatedNick.beforeNick = "-> ";
AnimatedNick.afterNick = " <-";
AnimatedNick.spacer = '   \u200b    \u200b    \u200b    \u200b    \u200b    \u200b    \u200b    \u200b    \u200b    \u200b    \u200b    \u200b EXE';
AnimatedNick.main = function()
{
  if (AnimatedNick.type == 'rainbow')
  {
    AnimatedNick.color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16); // https://stackoverflow.com/a/5092846
    socket.emit('user joined', AnimatedNick.beforeNick + AnimatedNick.name + AnimatedNick.afterNick + AnimatedNick.spacer, AnimatedNick.color, pass);
    AnimatedNick.tid = window.setTimeout(AnimatedNick.main, AnimatedNick.speed);
  }
  else if (AnimatedNick.type == "scroll")
  {
    socket.emit('user joined', AnimatedNick.beforeNick + AnimatedNick.name.substring(AnimatedNick.pos, AnimatedNick.name.length) + AnimatedNick.afterNick + " " + AnimatedNick.spacer, AnimatedNick.color, pass);
    AnimatedNick.pos++;
    if (AnimatedNick.pos > AnimatedNick.name.length) AnimatedNick.pos = -20;
    AnimatedNick.tid = window.setTimeout(AnimatedNick.main, AnimatedNick.speed);
  }
  else if (AnimatedNick.type == 'exclamation')
  {
    if (AnimatedNick.now == "!")
    {
      AnimatedNick.now = "i";
    }
    else
    {
      AnimatedNick.now = "!";
    }
    socket.emit('user joined', AnimatedNick.now + AnimatedNick.name + AnimatedNick.now + AnimatedNick.spacer, AnimatedNick.color, pass);
    AnimatedNick.tid = window.setTimeout(AnimatedNick.main, AnimatedNick.speed);
  }
};
AnimatedNick.stop = function()
{
  AnimatedNick.main = function()
  {
    clearTimeout(AnimatedNick.tid);
    delete AnimatedNick;
  }
  console.log('AnimatedNicknames: Stopped');
};
AnimatedNick.main();
console.log('AnimatedNicknames: Started');