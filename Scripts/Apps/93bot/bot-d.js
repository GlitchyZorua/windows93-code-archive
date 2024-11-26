var thisDate;
socket.on('message',function(data){
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
        	socket.emit('message','💡 help, date, time, rename <name>, echo <text>, dice [number of sides]')
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
    };
});
