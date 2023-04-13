
var trollboxMessagesSent = 0
var trollboxMessagesSentThisMinute = 0;
var trollboxMessagesSentMinute = []
var leaves = 0
var joins = 0
function getAvarage(array){
      var e = 0;
    for(let i = 0;i < array.length;i++){
        e = e + array[i]
    }
      return Math.round(e / array.length)
}
setInterval(function(){
    trollboxMessagesSentMinute.push(trollboxMessagesSentThisMinute)
    trollboxMessagesSentThisMinute = 0
},60000)
socket.on('message',function(data){
    trollboxMessagesSent++
    trollboxMessagesSentThisMinute++
    if(data.msg.startsWith('!!')){
        data.msg = data.msg.slice(2)
        if(data.msg.startsWith('msgSent')){
            sendMsg(trollboxMessagesSent + '')
        }
          if(data.msg.startsWith('MpM')){
              sendMsg((getAvarage(trollboxMessagesSentMinute)||'Fail...')+'')
        }
          if(data.msg.startsWith('MtM')){
              sendMsg(trollboxMessagesSentThisMinute+'')
        }
          if(data.msg.startsWith('MtM')){
              sendMsg(trollboxMessagesSentThisMinute+'')
        }
          if(data.msg.startsWith('joins')){
              sendMsg(joins+'')
        }
          if(data.msg.startsWith('leaves')){
              sendMsg(leaves+'')
        }
    }
})
socket.on('user left',function(){
    leaves++
})
socket.on('user joined',function(){
    joins++
})
