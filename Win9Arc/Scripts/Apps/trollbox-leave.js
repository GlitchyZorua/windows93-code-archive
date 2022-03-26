var u=0;
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
  s.emit('user joined','←','#f00');
});
s.on('update users',data=>{
  for(var a in u){
    if(!data[a]){
      s.emit('message',`${require('ent').decode(u[a].nick)} has left teh trollbox`);
    };
  };
  u=data;
});
