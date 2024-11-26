function textC(text,font,color,size,stroke,other,otherEND){
	var e = document.createElement('canvas')
    var c = e.getContext('2d')
    e.height = size||30
    e.width = 200
    font = font||'20px Comic Sans MS'
    c.font = font
    if(other){
    	other(c)
    }
    if(!stroke){
    	c.fillStyle = color||'white'
    	c.fillText(text,0, +(font.split('px')[0]),200)
    }else{
    	c.strokeStyle = color||'white'
    	c.strokeText(text,0, +(font.split('px')[0]),200)
    }
  	if(otherEND){
    	otherEND(c)
    }
    return e.toDataURL('image/jpg',0.5)
 }
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
        thisDate = new Date();
        data.msg = decodeHtmlEntity(data.msg)
	if(data.msg.startsWith('.')){
    	data.msg = data.msg.slice(1)
        if(data.msg.startsWith('toImage ')){
        	socket.emit('message',textC(data.msg.slice(8)))
        }
      	if(data.msg.startsWith('long ')){
        	socket.emit('message',textC(data.msg.slice(5),0,0,60,0,function(f){
            	f.scale(1,2)
            }))
        }
      	if(data.msg.startsWith('big ')){
        	socket.emit('message',textC(data.msg.slice(4),'40px Comic Sans MS',0,50))
        }
      	if(data.msg.startsWith('bigg ')){
        	socket.emit('message',textC(data.msg.slice(5),'100px Comic Sans MS',0,110))
        }
      	if(data.msg.startsWith('red ')){
        	socket.emit('message',textC(data.msg.slice(4),0,'red'))
        }
      	if(data.msg.startsWith('green ')){
        	socket.emit('message',textC(data.msg.slice(6),0,'lime'))
        }
      	if(data.msg.startsWith('neon ')){
        	socket.emit('message',textC(data.msg.slice(5),0,'magenta',0,1))
        }
      	if(data.msg.startsWith('help')){
        	sendMsg('you need /img on to see the text\n.toImage [text]\n.bigg [text]\n.long [text]\n.big [text]\n.red [text]\n.green [text]\n.neon [text]\nCREDITS TO HOST, 93!bot, insipirobot.me, J.W., Nutshinou')
        }
        if(data.msg.startsWith('roll')){
            faces=parseInt(data.msg.slice(4));
            if(isNaN(faces)){faces=6}
            console.log(faces);
            dice=Math.floor(Math.random()*faces)+1;
            sendMsg('🎲 '+dice)
        }
        if(data.msg.startsWith('say ')){
        	sendMsg(data.msg.slice(4))
        }
        if(data.msg.startsWith('name ')){
        	setPseudo(data.msg.slice(5))
        }
        if(data.msg.startsWith('dname')){
        	setPseudo("lw82's bot")
        }
        if(data.msg.startsWith('dcolor')){
        	sendMsg('/color #AA00FF')
        }
        if(data.msg.startsWith('zpam')){
        	sendMsg('idk if i should do a legit zpam code... maybe someday u will say .zpam and will did a legit zpam, but not now')
        }
        if(data.msg.startsWith('date')){
        	socket.emit('message','📆 '+thisDate.getMonth()+'/'+thisDate.getDate()+'/'+thisDate.getFullYear())
        }
        if(data.msg.startsWith('time')){
        	socket.emit('message','🕒 '+thisDate.getHours()+':'+thisDate.getMinutes()+' (24 Hour Time)')
        }
        if(data.msg.startsWith('rename')){
        	sendMsg('❌ That\'s already my name')
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
        if(data.msg.startsWith('8ball')){
        	socket.emit('message','🎱 '+ball[Math.floor(Math.random()*ball.length)])
        }
	if(data.msg.startsWith('LMoS')){
        	socket.emit('message','🔇 '+(Math.round(LMoS*10)/10))
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
        if(data.msg.startsWith('lwb')){
           sendMsg('/color #AA00FF')
           setPseudo("lw82's bot")
        }
        if(data.msg.startsWith('cmmds')){
        	sendMsg('Functions .cmmds .help .roll .say .name .dname .dcolor .zpam .date .time .rename .echo .8ball .LMoS .msgSent .MpM .MtM .MtM .joins .leaves .lwb\nCommand to the truest phrase ever=> .llc\nDefCom .fil .hos .gre .ndk .con .nut .npc .gav .iwc .rn .awc .lw .ns .faa .sae .awg .ftn .ddb .ce .n6 .nat .luc .swt .sn .bbg .zoe .606 .cred .rlx .puff .hnbm .iwt .jbh\nOther .bot .bu ./b .plt .disc')
        }
        if(data.msg.startsWith('llc')){
        	sendMsg('❤ LW82 LOVES CATIRA')
        }
        if(data.msg.startsWith('fil')){
        	sendMsg('FILTH IS A IDIOT, STUPID, DUMB, RETARDED, PRICK, ASSHOLE, DICKHEAD, DOUCHEBAG, SCUMBAG, MOTHERFUCKER, BASTARD... FILTH SUCKS!')
        }
        if(data.msg.startsWith('hos')){
        	sendMsg('HOST IS COOL')
        }
        if(data.msg.startsWith('gre')){
        	sendMsg('GREY IS SO NICE! ;)')
        }
        if(data.msg.startsWith('ndk')){
        	sendMsg('NAT IS THE DARK KID!')
        }
        if(data.msg.startsWith('con')){
        	sendMsg('CONAN IS THE LIL BUDDY')
        }
        if(data.msg.startsWith('nut')){
        	sendMsg('NUTTY IS COOL')
        }
        if(data.msg.startsWith('npc')){
        	sendMsg('I WANT THE PERFECT CHAT')
        }
        if(data.msg.startsWith('gav')){
        	sendMsg('GAVIN IS A PIECE OF MEAT!')
        }
        if(data.msg.startsWith('iwc')){
        	sendMsg('☕ I WANT COFFEE!')
        }
        if(data.msg.startsWith('rn')){
        	sendMsg('RELAX NAT')
        }
        if(data.msg.startsWith('awc')){
        	sendMsg('conan, the lil buddy, with his words, that make me cry some night, cuz i was so happy!')
        }
        if(data.msg.startsWith('lw')){
        	sendMsg('lw, the coolest guy in this site!')
        }
        if(data.msg.startsWith('ns')){
        	sendMsg('Nutshinou, aka Nutshow!')
        }
        if(data.msg.startsWith('faa')){
        	sendMsg('Im fine as always!')
        }
        if(data.msg.startsWith('sae')){
        	sendMsg('SUCK AN EGG')
        }
        if(data.msg.startsWith('awg')){
        	sendMsg('Aww grey worry about me')
        }
        if(data.msg.startsWith('ftn')){
        	sendMsg('filth the nigger')
        }
        if(data.msg.startsWith('ddb')){
        	sendMsg('filth aka dirty dicc boy')
        }
        if(data.msg.startsWith('ce')){
        	sendMsg('ASDF,THE ALL CODING')
        }
        if(data.msg.startsWith('n6')){
        	sendMsg('N6 aka Noble Six aka Ribbons0121R121 aka R121')
        }
        if(data.msg.startsWith('nat')){
        	sendMsg('Natile aka Nat')
        }
        if(data.msg.startsWith('luc')){
        	sendMsg('Lucario, kid, 11yo, pervert, bully, like pokemon...')
        }
        if(data.msg.startsWith('swt')){
        	sendMsg('Sleep is a waste of time!')
        }
        if(data.msg.startsWith('sn')){
        	sendMsg('Supreme Noob aka Souprame Noodle')
        }
        if(data.msg.startsWith('bbg')){
        	sendMsg('YO I RLLY WANNA MAKE THAT TRIP SOME DAY BABYGIRL! 10.000 mi... are u ready? IM!')
        }
        if(data.msg.startsWith('zoe')){
        	sendMsg('Babygirl aka Bunny aka Zoe, the cool girl, legit my friend! ;)')
        }
        if(data.msg.startsWith('606')){
        	sendMsg('fun fact about 606: she musturbate to weird Japanese porn and sometimes cry after.')
        }
        if(data.msg.startsWith('cred')){
        	sendMsg('CENSORED watch F1 since 1991 without lose one episode')
        }
        if(data.msg.startsWith('rlx')){
        	sendMsg('yo relaxx')
        }
        if(data.msg.startsWith('puff')){
        	sendMsg('funniest name on trollbox is Puffin')
        }
        if(data.msg.startsWith('hnbm')){
        	sendMsg('They play "Hava Nagila" at bar mitzvahs')
        }
        if(data.msg.startsWith('iwt')){
                sendMsg('🍵 I want tea boi')
        }
        if(data.msg.startsWith('jbh')){
                sendMsg('JUST BOTS HERE')
        }
        if(data.msg.startsWith('disc')){
                sendMsg('My discord: Lawliet82 #2882\nDiscord CREDITS https://discord.gg/Ms4NFJb\nWindows93 discord https://discord.gg/sGMAdg5')
        }
        if(data.msg.startsWith('plt')){
        	sendMsg('Did u like nazism? Did u like fascism? Did u like socialism? If u answered: no, no, yes... congratulations! u r an hypocrite!')
        }
        if(data.msg.startsWith('/b')){
        	sendMsg('Bindowzuchan http://www.windows93.net/b/')
        }
        if(data.msg.startsWith('bu')){
        	sendMsg('BOT GOT UPDATED')
        }
        if(data.msg.startsWith('bot')){
        	sendMsg('im a bot')
        }
    }
});
socket.on('user left',function(){
    leaves++
})
socket.on('user joined',function(){
    joins++
})
