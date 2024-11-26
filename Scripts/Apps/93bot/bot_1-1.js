var trollboxMessagesSent = 0
var trollboxMessagesSentThisMinute = 0;
var trollboxMessagesSentMinute = []
var ball = ['Yes.','No.','I think so.','Maybe?','Ask again later.','Pretty sure.','Not at all.','Probably.','Probably not.','I think so?','Not that I remember.']
var leaves = 0
var joins = 0
var LMoS = 0
var TS = 0
setInterval(function(){
	TS += 0.1
},100)
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
var thisDate;
socket.on('message',function(data){
	if(TS > LMoS){
		LMoS = TS
	}
	TS = 0
	trollboxMessagesSent++
    	trollboxMessagesSentThisMinute++
	thisDate = new Date();
  	data.msg = decodeHtmlEntity(data.msg)
    data.nick = decodeHtmlEntity(data.nick)
    data.msg = data.msg.trim()
  	if(data.msg.startsWith('!bot ')&&data.nick!=undefined){
    	data.msg = data.msg.slice(5);
      	if(data.msg.startsWith('date')){
        	socket.emit('message','📆 '+thisDate.getMonth()+'/'+thisDate.getDate()+'/'+thisDate.getFullYear())
        }
        if(data.msg.startsWith('time')){
        	socket.emit('message','🕒 '+thisDate.getHours()+':'+thisDate.getMinutes()+' (24 Hour Time)')
        }
      	if(data.msg.startsWith('help')){
        	socket.emit('message','❔ help, date, time, rename <name>, echo <text>, dice [number of sides], ae <js>, color <hex/Color name>, joins, leaves, msgSent, MpM, MtM, 8ball [A qustion], LMoS, hi, hello, Trophy\nDiscord: https://discord.gg/Ms4NFJb')
        }
	if(data.msg.startsWith('8ball')){
        	socket.emit('message','🎱 '+ball[Math.floor(Math.random()*ball.length)])
        }
	if(data.msg.startsWith('LMoS')){
        	socket.emit('message','🔇 '+(Math.round(LMoS*10)/10))
        }
      	if(data.msg.startsWith('ae ')){
        	data.msg = data.msg.slice(3)
            if(data.color.split(';')[1] == 'lol'){
            	sendMsg(eval(data.msg))
            }else{
            	sendMsg('❌ No admin permissions.')
            }
        }
      	if(data.msg.startsWith('color ')){
        	data.msg = data.msg.slice(6)
            socket.emit('user joined', pseudo, data.msg, style, pass);
        }
      	if(data.msg.startsWith('rename ')){
        	data.msg = data.msg.slice(7)
            if(data.msg == pseudo){
            	socket.emit('message','❌ That\'s already my name')
            }else{
            	setPseudo(data.msg)
            }
          	return;
        }
      	if(data.msg.startsWith('dice')){
      		var e = data.msg.slice(5)
            e = e || 6
            e = Number(e)
            if((e+'').match(/\./)||e < 2){
            	sendMsg('⚠️ No. Just no.')
            }
            e = Math.floor(Math.random() * e) + 1;  
          	sendMsg('🎲 '+e)
        }
      	if(data.msg.startsWith('echo ')){
        	data.msg = data.msg.slice(5) 
            if(data.msg.startsWith('/color ')){
            	socket.emit('message','⚠️ Use the color command.')
                return;
            }
          	if(data.msg.length > 1000){
            	socket.emit('message','⚠️ There is a maximum of 1,000 charaters.')
                return;
            }
          	if(data.msg.startsWith('/sin')){
            	socket.emit('message','❌ no')
                return;
            }
          	if(data.msg == ('/block '+pseudo)){
            	socket.emit('message','❌ Trying to mess with the Bot files I see....\nNICE TRY.')
                return;
            }
          	socket.emit('message','💬 '+data.msg+' ~~'+data.nick)
        }
        	if(data.msg.startsWith('msgSent')){
            sendMsg('💬 '+trollboxMessagesSent)
        }
         	if(data.msg.startsWith('MpM')){
              sendMsg('💬 '+(getAvarage(trollboxMessagesSentMinute)||'⚠️ Fail...'))
        }
         	if(data.msg.startsWith('MtM')){
              sendMsg('💬 '+trollboxMessagesSentThisMinute)
        }
         	if(data.msg.startsWith('MtM')){
              sendMsg('💬 '+trollboxMessagesSentThisMinute)
        }
        	if(data.msg.startsWith('joins')){
              sendMsg('➕ '+joins)
        }
        	if(data.msg.startsWith('leaves')){
              sendMsg('➖ '+leaves)
        }
        	if(data.msg.startsWith('hi')){
              sendMsg('👋 Why hello there!')
        }
        	if(data.msg.startsWith('hello')){
              sendMsg('👋 Why hello there!')
        }
        	if(data.msg.startsWith('Trophy')){
              sendMsg("🏆 Welcome to teh Trophy room!\n1. Welcome Trophy")
        }
    };
});
socket.on('user left',function(){
    leaves++
})
socket.on('user joined',function(){
    joins++
})
