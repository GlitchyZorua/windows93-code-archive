var a = 0;
const s=require('socket.io-client')("http://windows93.net:8081",{
  transportOptions:{
    polling:{
      extraHeaders:{
        "Referer":"http://www.windows93.net/trollbox/"
      }
    }
  }
});
s.on("connect",()=>{
  s.emit('user joined','e'+a);
});
s.on('message',data=>{
  console.log(data);
  if (data.nick == "&#9825; HugBot &#9825;") {
    a++;
    s.emit('message', `eat my ass hugbot ${a}`);
    s.emit('user joined','e'+a);
  }
});
