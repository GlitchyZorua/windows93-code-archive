﻿//Progress: 100% downloaded programs: 100% time remaining: Unknown
//Downloading Lw82-bot-info.exe...
function arc(a){
	let can = document.createElement('canvas')
    can.width = 150
    can.height = 170
    let c = can.getContext('2d')
    c.strokeStyle = '#FFFFFF'
    c.beginPath()
    if(a != 0 && a%360 == 0){
    	a = 359.999
    }
    c.arc(75,75,75,0,(a%360)/180*Math.PI)
    c.stroke()
    c.fillStyle = 'white'
    c.font = '10px Ariel'
    c.fillText('Looped '+(Math.floor(a/360))+ ' times.',0,170,150)
    return can.toDataURL()
}
var quotes = ['http://generated.inspirobot.me/082/aXm7345xjU.jpg','http://generated.inspirobot.me/082/aXm3437xjU.jpg','http://generated.inspirobot.me/083/aXm3704xjU.jpg','http://generated.inspirobot.me/084/aXm5668xjU.jpg','http://generated.inspirobot.me/086/aXm5258xjU.jpg','http://generated.inspirobot.me/083/aXm4342xjU.jpg','http://generated.inspirobot.me/086/aXm3614xjU.jpg','http://generated.inspirobot.me/082/aXm8948xjU.jpg','http://generated.inspirobot.me/082/aXm8466xjU.jpg','http://generated.inspirobot.me/086/aXm7608xjU.jpg','http://generated.inspirobot.me/085/aXm9191xjU.jpg','http://generated.inspirobot.me/082/aXm7315xjU.jpg','http://generated.inspirobot.me/084/aXm777xjU.jpg','http://generated.inspirobot.me/083/aXm8469xjU.jpg ','http://generated.inspirobot.me/085/aXm1138xjU.jpg','http://generated.inspirobot.me/083/aXm609xjU.jpg','http://generated.inspirobot.me/084/aXm8616xjU.jpg','http://generated.inspirobot.me/082/aXm7407xjU.jpg','http://generated.inspirobot.me/082/aXm4866xjU.jpg','http://generated.inspirobot.me/084/aXm9385xjU.jpg','http://generated.inspirobot.me/084/aXm616xjU.jpg','http://generated.inspirobot.me/082/aXm2494xjU.jpg','http://generated.inspirobot.me/084/aXm3446xjU.jpg','http://generated.inspirobot.me/082/aXm1953xjU.jpg','http://generated.inspirobot.me/086/aXm3823xjU.jpg','http://generated.inspirobot.me/086/aXm2976xjU.jpg','http://generated.inspirobot.me/084/aXm5790xjU.jpg','http://generated.inspirobot.me/082/aXm9536xjU.jpg','http://generated.inspirobot.me/085/aXm8797xjU.jpg','http://generated.inspirobot.me/083/aXm3915xjU.jpg','http://generated.inspirobot.me/084/aXm7948xjU.jpg','http://generated.inspirobot.me/084/aXm4712xjU.jpg','http://generated.inspirobot.me/083/aXm7339xjU.jpg','http://generated.inspirobot.me/085/aXm4343xjU.jpg','http://generated.inspirobot.me/082/aXm4378xjU.jpg','http://generated.inspirobot.me/086/aXm9375xjU.jpg','http://generated.inspirobot.me/083/aXm8764xjU.jpg','http://generated.inspirobot.me/084/aXm4352xjU.jpg','http://generated.inspirobot.me/082/aXm9301xjU.jpg','http://generated.inspirobot.me/086/aXm5607xjU.jpg','http://generated.inspirobot.me/085/aXm7718xjU.jpg','http://generated.inspirobot.me/083/aXm4064xjU.jpg','http://generated.inspirobot.me/085/aXm475xjU.jpg','http://generated.inspirobot.me/082/aXm8025xjU.jpg','http://generated.inspirobot.me/085/aXm9747xjU.jpg','http://generated.inspirobot.me/083/aXm7781xjU.jpg','http://generated.inspirobot.me/083/aXm8086xjU.jpg','http://generated.inspirobot.me/083/aXm146xjU.jpg','http://generated.inspirobot.me/084/aXm1748xjU.jpg','http://generated.inspirobot.me/086/aXm2124xjU.jpg','http://generated.inspirobot.me/082/aXm3391xjU.jpg','http://generated.inspirobot.me/085/aXm750xjU.jpg','http://generated.inspirobot.me/082/aXm7586xjU.jpg','http://generated.inspirobot.me/083/aXm4917xjU.jpg','http://generated.inspirobot.me/083/aXm4478xjU.jpg','http://generated.inspirobot.me/082/aXm432xjU.jpg','http://generated.inspirobot.me/082/aXm310xjU.jpg','http://generated.inspirobot.me/082/aXm3204xjU.jpg','http://generated.inspirobot.me/085/aXm9885xjU.jpg','http://generated.inspirobot.me/086/aXm1861xjU.jpg','http://generated.inspirobot.me/084/aXm2071xjU.jpg','http://generated.inspirobot.me/083/aXm381xjU.jpg','http://generated.inspirobot.me/084/aXm7015xjU.jpg','http://generated.inspirobot.me/084/aXm4260xjU.jpg','http://generated.inspirobot.me/083/aXm7656xjU.jpg','http://generated.inspirobot.me/084/aXm4358xjU.jpg','http://generated.inspirobot.me/084/aXm3466xjU.jpg','http://generated.inspirobot.me/084/aXm9606xjU.jpg','http://generated.inspirobot.me/082/aXm8334xjU.jpg','http://generated.inspirobot.me/084/aXm6201xjU.jpg','http://generated.inspirobot.me/085/aXm6812xjU.jpg','http://generated.inspirobot.me/082/aXm7582xjU.jpg','http://generated.inspirobot.me/082/aXm9099xjU.jpg','http://generated.inspirobot.me/082/aXm1668xjU.jpg','http://generated.inspirobot.me/086/aXm7839xjU.jpg','http://generated.inspirobot.me/083/aXm4292xjU.jpg','http://generated.inspirobot.me/085/aXm1521xjU.jpg','http://generated.inspirobot.me/085/aXm7627xjU.jpg','http://generated.inspirobot.me/083/aXm7929xjU.jpg','http://generated.inspirobot.me/086/aXm923xjU.jpg','http://generated.inspirobot.me/086/aXm2513xjU.jpg','http://generated.inspirobot.me/084/aXm7383xjU.jpg','http://generated.inspirobot.me/086/aXm2813xjU.jpg','http://generated.inspirobot.me/084/aXm6831xjU.jpg','http://generated.inspirobot.me/083/aXm2065xjU.jpg','https://cdn.dis​cordapp.com/attachments/495370972644245504/495371386886553612/Your_life_matters.png','https://cdn.dis​cordapp.com/attachments/495370972644245504/495373216668319754/When_life_gives_you_lemon.png','https://cdn.dis​cordapp.com/attachments/495370972644245504/495373662824824844/unknown.png'] //less quotes

var trollboxMessagesSent = 0
var trollboxMessagesSentThisMinute = 0;
var trollboxMessagesSentMinute = []
var ball = ['Yes.','No.','I think so.','Maybe?','Ask again later.','Pretty sure.','Not at all.','Probably.','Probably not.','I think so?','Not that I remember.']
var fball = ['Your Hired!','Your Fired!']
var coin = ['Tails!','Heads!']
var leaves = 0
var joins = 0
var LMoS = 0
var TS = 0
var fish = ['You were Fishing then you got a salmon.','You were Fishing then you got a shoe, Seems like someone did not want thease shoes...','You were Fishing then you got nothing. How Unlucky','You were Fishing then you got a Lucky Salmon','You were Fishing then you got a Golden Fish','You were fishing then you trying to get it, but it was very hevy, Finally, you got a shopping cart maybe this was from... Walmart?']
var HP = 100
var XP = 0
var Money = 0
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
    if(data.msg.startsWith('93!')&&data.nick!=undefined){
    	data.msg = data.msg.slice(3);
        if(data.msg.startsWith('quote')){
            var e = Math.floor(Math.random()*quotes.length)
            sendMsg(quotes[e])
        }
        if(data.msg.startsWith('say ')){
            data.msg = data.msg.slice(4)
            if(data.msg.startsWith('/sin')){
            socket.emit('message','❌ No, just dumb ppl use that, btw we have /sin off so... tip: use it!')
            return;
            }
            if(data.msg.startsWith('/lorem')){
            socket.emit('message','❌ No.. That will LAG everything')
            return;
            }
            if(data.msg.startsWith('/reverse')){
            socket.emit('message','❌ Nope. that will break the bots system')
            return;
            }
            if(data.msg.startsWith('/zalgo')){
            socket.emit('message','❌ Nope. Use 93!zalgo <text>')
            return;
            }
            if(data.msg.startsWith('/block')){
            socket.emit('message','❌ Trying to mess with the Bot files I see....\nNICE TRY.')
            return;
            }
            if(data.msg.startsWith('/unblock')){
            socket.emit('message','❌ ACCESS DENIED You cant make the bot unblock someone.')
            return;
            }
            if(data.msg.startsWith('/clear')){
            socket.emit('message','❌ Why do you need to try to hide SOMETHING from me? yeah, no thanks.')
            return;
            }
            if(data.msg.startsWith('/mlg')){
            socket.emit('message','❌ Nope. We know that command as well. Give up already.')
            return;
            }
            if(data.msg.startsWith('/emo')){
            socket.emit('message','❌ UGLY. STUPID. EMOJIS? No thank you.')
            return;
            }
            if(data.msg.startsWith('/color')){
            socket.emit('message','⚠️ I mean, this is a OK command, but... Use the color command. thanks.')
            return;
            }
            if(data.msg.startsWith('/help')){
            socket.emit('message','❔ Thease commands are the only allowed in say: /kao /shrug /say /b /exe')
            return;
            }
            if(data.msg.toLowerCase().includes('discord')){
            socket.emit('message','❌ NOPE')
            return;
            }
                sendMsg(data.msg)
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
            if(data.msg.startsWith('/help')){
            socket.emit('message','❔ Thease commands are the only allowed in echo: /kao /shrug')
            return;
            }
            if(data.msg.startsWith('/block')){
            socket.emit('message','❌ Haha... Trying to mess with the Bot files I see....\nNICE TRY.')
            return;
            }
            if(data.msg.toLowerCase().includes('discord')){
            socket.emit('message','❌ NOPE.')
            return;
            }
            if(data.nick.toLowerCase().includes('discord')){
            socket.emit('message','❌ Fix your user name, it causes the bot to crash.')
            return;
            }
            socket.emit('message','💬 '+data.msg+' ~~'+data.nick)
        }
      	if(data.msg.startsWith('ae ')){
            data.msg = data.msg.slice(3)
            if(data.color.split(';')[1] == 'JW'){
            sendMsg(eval(data.msg))
            }else{
            sendMsg('❌ No admin permissions.')
            }
        }
      	if(data.msg.startsWith('color ')){
            data.msg = data.msg.slice(6)
            socket.emit('user joined', pseudo, data.msg, style, pass);
        }
        if(data.msg.startsWith('arc ')){
        	data.msg = Number(data.msg.slice(4))
            if(isNaN(data.msg)){
            	sendMsg('❌ Error occured. Probably because of you. Or its not a number. NaN')
            }else{
            	sendMsg(arc(data.msg))
            }
          	return;
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
            //if((e+'').match(/\./)||e < 2){
            //sendMsg('🎲⚠️ No. Just no.')
            //}
            e = Math.floor(Math.random() * e) + 1;  
            sendMsg('🎲 '+e)
        }
      	if(data.msg.startsWith('roll')){
      	    var e = data.msg.slice(5)
            e = e || 6
            e = Number(e)
            //if((e+'').match(/\./)||e < 2){
            //sendMsg('🎲⚠️ No. Just no.')
            //}
            e = Math.floor(Math.random() * e) + 1;  
            sendMsg('🎲 '+e)
        }
      	if(data.msg.startsWith('date')){
            socket.emit('message','📆 '+thisDate.getMonth()+'/'+thisDate.getDate()+'/'+thisDate.getFullYear())
        }
        if(data.msg.startsWith('time')){
            socket.emit('message','🕒 '+thisDate.getHours()+':'+thisDate.getMinutes()+' (24 Hour Time)')
        }
        if(data.msg.startsWith('nlw')){
            sendMsg('❌ this command is disabled!')
        }
        if(data.msg.startsWith('nickname')){
            if(data.nick.toLowerCase().includes('discord')){
            socket.emit('message','❌ NOPE')
            return;
            }
            sendMsg('💬 You are '+data.nick)
        }
        if(data.msg.startsWith('thot ')){
            if(data.nick.toLowerCase().includes('discord')){
            socket.emit('message','❌ NOPE')
            return;
            }
            sendMsg(data.msg.slice(5).toUpperCase().replace(/()/g,' '))
        }
        if(data.msg.startsWith('whoami')){
            if(data.nick.toLowerCase().includes('discord')){
            socket.emit('message','❌ NOPE')
            return;
            }
            sendMsg('💬 You are '+data.nick)
        }
        if(data.msg.startsWith('exe ')){
            data.msg = data.msg.slice(4)
            if(data.msg.toLowerCase().includes('discord')){
            socket.emit('message','❌ please stop trying')
            return;
            }
            sendMsg('/exe '+data.msg)
        }
        if(data.msg.startsWith('b ')){
            data.msg = data.msg.slice(2)
            sendMsg('/b '+data.msg)
        }
        if(data.msg.startsWith('zalgo ')){
            data.msg = data.msg.slice(6)
            if(data.msg.toLowerCase().includes('discord')){
            socket.emit('message','❌ We set a filter to this too!')
            return;
            }
            sendMsg('/zalgo '+data.msg)
        }
        if(data.msg.startsWith('ascii ')){
            data.msg = data.msg.slice(6)
            sendMsg('/ascii '+data.msg)
        }
        if(data.msg.startsWith('8ball')){
            socket.emit('message','🎱 '+ball[Math.floor(Math.random()*ball.length)])
        }
        if(data.msg.startsWith('flip a coin')){
            socket.emit('message','🥇 '+coin[Math.floor(Math.random()*coin.length)])
        }
        if(data.msg.startsWith('coin')){
            socket.emit('message','🥇 '+coin[Math.floor(Math.random()*coin.length)])
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
        if(data.msg.startsWith('joins')){
            sendMsg('➕ '+joins)
        }
        if(data.msg.startsWith('leaves')){
            sendMsg('➖ '+leaves)
        }
      	if(data.msg.startsWith('sleep')){
            data.msg = data.msg.slice(3)
            if(data.color.split(';')[1] == 'JW'){
            sendMsg('💤 Entering sleep mode...  Good night! sleep tight! :3')
            alert("Sleep mode... the system is on sleep mode, if you wait for awile... it will leave the trollbox")
            sendMsg('💤 The Bot has woken up')
            }else{
            sendMsg('❌ Error: No admin permissions.')
            }
        }
        if(data.msg.startsWith('fish')){
            sendMsg('🎣 '+fish[Math.floor(Math.random()*fish.length)]+'You gained 1+ XP!')
            ++XP
        }
      	if(data.msg.startsWith('eat ')){
            data.msg = data.msg.slice(3)
            if(data.msg.toLowerCase().includes('discord')){
            socket.emit('message','❌ NOPE')
            return;
            } 
            sendMsg("🍽 You ate"+data.msg)
        }
        if(data.msg.startsWith('drink')){
            if(data.msg.toLowerCase().includes('discord')){
            socket.emit('message','❌ NOPE')
            return;
            }
            sendMsg('🍽 You drinked'+data.msg)
        }
        if(data.msg.startsWith('HP')){
            sendMsg('HP:'+HP)
        }
        if(data.msg.startsWith('money')){
            sendMsg('💵🚫 RPG Commands are currently in BETA. So this command is unavalable')
        }
        if(data.msg.startsWith('XP')){
            sendMsg('✨RPG Commands are currently in BETA. So this command is unavalable')
        }
        if(data.msg.startsWith('figet spinner')){
            socket.emit('message','Here is your figet spinner Sir/mam! (Try using /img on)  https://orig00.deviantart.net/c286/f/2017/128/4/3/untitled_by_scytheaandlanarkine-db8jbxg.gif if you dont like figet spinners... then why not roll a dice?')
        }
        if(data.msg.startsWith('fs')){
            socket.emit('message','Here is your figet spinner Sir/mam! (Try using /img on)  https://orig00.deviantart.net/c286/f/2017/128/4/3/untitled_by_scytheaandlanarkine-db8jbxg.gif if you dont like figet spinners... then why not roll a dice?')
        }
        if(data.msg.startsWith('help')){
            socket.emit('message','❔ Need Help? For all commands, type 93!cmds, for tags, type 93!tags Verison: 7.6.1, Rules: 93!rules')
        }
        if(data.msg.startsWith('cmds')){
            socket.emit('message','❔ Funtions: help, quote, say <text>, echo <text>, ae <js>, color <hex/Color name>, rename <name>, dice [number of sides] (roll), date, time, nlw, whoami (nickname), exe <93program>, b <text>, zalgo <text>, ascii <image Url>, 8ball [A question], flip a coin (coin), LMoS, msgSent, MpM, MtM, joins, leaves, sleep\nRPG: Fish, Eat <food>, Drink <drink>, HP, Money, XP, figet spinner (fs)\nhi,(hello) Trophy, tags, cmds, 69ball [a question], Thot <text>, arc <number>, dename, decolor')
        }
        if(data.msg.startsWith('hi')){
            sendMsg('👋 Why hello there!')
        }
        if(data.msg.startsWith('hello')){
            sendMsg('👋 Why hello there!')
        }
        if(data.msg.startsWith('Trophy')){
            sendMsg("🏆 Welcome to teh Trophy room!\n1. Welcome Trophy Discription: You entered the code correctly and this is wat you get.\n2. Alone... bot Discription: You never used the bot for more then 50 mins\n3.Spam Trophy Discription: You made the bot spam \n4. Spam Gun Discription: This thing is warned-out now. \n5. Spam Gun x2 Discription: yeah... this thing is not warned-out. but its unstabe \n6. Spam Nuke Discription: Works but i'm not letting you touch it. \n7. Spam Amo Discription: Used for the spam gun and the Spam Gun 2x \n8. D.U.C.K Discription: Quack \n9. Wooden Trophy Discription: heres a peace of wood for now\n10. OwO Trophy Discription: OwO is for life!\n11. Silver Tropy Discription: Nice!\n12. Bronze Trophy Discription: WOW! :D \n13. Golden Trophy \n14. ??? A surpise..")
        }
        if(data.msg.startsWith('OwO')){
            sendMsg('OwO Whats this?')
        }
        if(data.msg.startsWith('lol')){
            sendMsg('Haha')
        }
        if(data.msg.startsWith('bot')){
            sendMsg('Beep boop. I am a bot.')
        }
        if(data.msg.startsWith('ping')){
            sendMsg('🏓 pong!')
        }                                             
        if(data.msg.startsWith('tags')){
            sendMsg('OwO, lol, bot, ping, zoombot, nutnat, 3ggnluc, eas, kao, shrug, soni, fort, robl, frank, Thank You, Fuck You iwc, nat, iwt, llc, fith, hos, 2gre, ndk, nut, nat, jbh, gre, con, gav, awc, lw, ns, faa\nOther Stuff: about, reload, 93!, prefix')
        }                                             
        if(data.msg.startsWith('zoombot')){
            sendMsg('🤬 ZOOM BOT IS ONE OF THE WORSE BOTS IN THE TROLLBOX, USE LW82 BOT OR ME INSTEAD!')
        }
        if(data.msg.startsWith('nutnat')){
            sendMsg('Well did you know that Nut and Nat almost has the same name? pretty confusing and weird. Right?')
        }
        if(data.msg.startsWith('is this a real chat?')){
            sendMsg('Most people is lying about this question. the real answer is: Yes.')
        }
        if(data.msg.startsWith('3ggnluc')){
            sendMsg('YOU BOTH LOOK LIKE A FUCKING TRASH BIN, 3GG YOU ARE NOT EVEN A HACKER, YOU KNOW? YOU ARE JUST A EGG, A EXPIRED EGG, SO ILL JUST STEP ON YOU AND YOU WILL CRUSH, LURICO IS A ASSHOLE TOO!')
        }
        if(data.msg.startsWith('eas')){
            sendMsg('EAS = Electronic Arts Shit')
        }
        if(data.msg.startsWith('kao')){
            sendMsg('/kao')
        }
        if(data.msg.startsWith('shrug')){
            sendMsg('/shrug')
        }
        if(data.msg.startsWith('soni')){
            sendMsg('sonic')
        }
        if(data.msg.startsWith('fort')){
            sendMsg('fortnite')
        }
        if(data.msg.startsWith('robl')){
            sendMsg('roblox')
        }
        if(data.msg.startsWith('frank')){
            sendMsg('𝒻𝓇𝒶​𝓃𝓀')
        }
        if(data.msg.startsWith('Thank You')){
            sendMsg('Your welcome!')
        }                                           
        if(data.msg.startsWith('Fuck You')){
            sendMsg('Fuck you too!')
        }
        if(data.msg.startsWith('iwc')){
            sendMsg('☕ I WANT COFFEE')
        }
        if(data.msg.startsWith('nat')){
            sendMsg('Natile aka Nat')
        }
        if(data.msg.startsWith('iwt')){
            sendMsg('🍵 I want tea boi')
        }
        if(data.msg.startsWith('llc')){
            sendMsg('❤ LW82 LOVES CATIRA')
        }
        if(data.msg.startsWith('fith')){
            sendMsg('FILTH IS A IDIOT, STUPID, DUMB, RETARDED, PRICK, ASSHOLE, DICKHEAD, DOUCHEBAG, SCUMBAG, MOTHERFUCKER, BASTARD... FILTH SUCKS!')
        }
        if(data.msg.startsWith('hos')){
            sendMsg('😎 HOST IS AWESOME')
        }
        if(data.msg.startsWith('2gre')){
            sendMsg('❤ Grey is nice')
        }
        if(data.msg.startsWith('ndk')){
            sendMsg('NAT IS THE DARK KID!')
        }
        if(data.msg.startsWith('nut')){
            sendMsg('NUTTY IS COOL')
        }
        if(data.msg.startsWith('nat')){
            sendMsg('Nat aka Natile')
        }
        if(data.msg.startsWith('jbh')){
            sendMsg('JUST BOTS HERE')
        }
        if(data.msg.startsWith('gre')){
            sendMsg('GREY IS SO NICE! ;)')
        }
        if(data.msg.startsWith('con')){
            sendMsg('CONAN IS THE LIL BUDDY')
        }
        if(data.msg.startsWith('gav')){
            sendMsg('GAVIN IS A PIECE OF MEAT!')
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
        if(data.msg.startsWith('rules')){
            sendMsg('Bot rules, PLEASE FOLLOW THEASE RULES OR ELSE YOU WILL GET PUNISHED\n1. Please do not make the bot exactly like mine.\n2. Do not try to hack or crash the bot\n3. We do not collect any personal info, (such as, your email, your phone number, your IP, your history, etc) We only collect your username.n\4. Please do not use me or Lws bot to bypass a block.n\Fail to follow these rules will result a block.')
        }
        if(data.msg.startsWith('faa')){
            sendMsg('Im fine as always!')
        }
        if(data.msg.startsWith('about')){
            sendMsg('ℹbot by: J.W.,\nCode by: J.W.\n J.W., CREDITS to lw82! he know how to fix my bot, 93!bot Copyright, 2017-2018.')
        }
        if(data.msg.startsWith('reload')){
            sendMsg('↪ all commands has been reloaded')
        }
        if(data.msg.startsWith('93!')){
            sendMsg('👋Hi! type "93!help" for the list of commands...')
        }
        if(data.msg.startsWith('prefix')){
            socket.emit('message','✔ the prefix is 93! -- This setting CANNOT be changed')
        }
        if(data.msg.startsWith('dename')){
            setPseudo("93!bot SP2")
        }
        if(data.msg.startsWith('decolor')){
            sendMsg("❌ Dude, i dont use any default color. its random. so dont mind me.")
        }
        if(data.msg.startsWith('69ball')){
            sendMsg("❌ Dude. im not gonna copy lws commands anymore. 69ball is only avaliable if lws bot is down, ok? ok.")
        }
    }
});
//Discord: https://discord.gg/Ms4NFJb
socket.on('user left',function(){
    leaves++
})
socket.on('user joined',function(){
    joins++
})

//                  ---Aside Code---
//style = 'beepboop'

//You got burns and Your HP gone down to -10, becarful out there <-- This one is Unused.
//  ________
//  /  12   \
// |    |    |
// |9   |   3|
// |     \   |
// |         |
//  \___6___/
// tick-tock...

//                       ___
//                   ,-'     `.
//                 ,'           .        ,-.
//               ,'               \       ),.\
//     ,.       /                  \     /(  \;
//    /'\\     ,o.        ,ooooo.   \  ,'-')
//    )) ). d8P"Y8.    ,8P"""""Y8.'  .--"'
//   (-'Y'  Y8    dP'     /
//    ----.(   __    ,' ,---.       (
//           ),--..   (  ;,---.        )
//          / \O_,' )   \  \O_,'        |
//         ;-- ,'       ---'        |                         I AM SHREK
//         |    -'.           |
//        ;    ,            )          :
//     .'|     .:._   ,.::"..       |
//  --'   |   .'     """         |.
//        |  :;      :   :     .       |..-'--.
//        |  ' .     :   :.,'|/       |  \
//        `     --..-'|||-/        /   )
//         \     _   --^"__,'        ,    |
//   -hrr- ;    --^---'          ,'     |
//          \                    /      /
//           \   `               /
//            \           /
//             \           '    ,'.       ,   ,'
//                `-.___.---'

//         nHHHHHHnHHHn
//       dHHHHHHHHHHHHHHb
//      dHHHHHHHHHHHHHHHHb
//     dHHHHHH~~  '~~9HHHHb               ....._________    _____.........__
//     HHHHH~         ~9HHH             .'              :  :                :
//     HHHH:           ~HHH             `.__..--.   :~--'   ~-.       __....'
//     HHHP:_nnnn   .nn.HHP                     `-. `.         :   .-~
//     `HH|:~~@ >) (- @>|P                        :. `.        :  :
//      |^|:       :    |      %::$$HHHHHnn        `._:      .'  :
//      :`|:       |    :    $$$$H$HH$HH$HHHHn        ..     :  :
//       ~|:.   ((_))  .:  $:$$H:::H:HH:HHHHHHHb     :  `  _:  '
//        ::`.   ~ ~   ': $:$:$H):(::: :  ~HH$HHn     -. ~~  .'
//         ::   -~-~- . 'H$::$H((: : :  '   HH:H$       :   :
//         `::   ~~~  '/ H$$$$H\: )`  `      H$H$      .'  :                 TEH XFILES! XD.
//         .|::..__..-~|HHDrSH:)_..._   .===.H$HH$    .' _ `.
//       _/::::::      HHH$HHH: . _ .:  . _-.:HHH$   .' : `.`.
//    ..::|:::::_    _HHHHHHHH: ` ~ '   ` ~-':H$$$H :  .'  : `.
// .:::::::|::../XxxX\.HHHHH^|:              :H::::H .-'    : `.
// :::::::...|../\XXXX/\HHHHH\:::      ._)    :HH$$$H :       : `-.
// :..........|/..\XX/..HHHHHHn::`.          ':HHHHHH ;       :    :
// ...............|XX|.HHHHHHHH$:     .=-=.   :HH$HH :        `.   :
// ...............XXXXHHH$HHH$HH::    `...'  .$HHH$H$'          :   :
// ...............XXXHHHH$HH:$HH$::.       ..H$HHHH$H          '.    :
// ..............|XXXHHHHHH$$HHH$H:::..   .':HHHHH$H$n--.   .---'     `.__.--.
// ..............|XXXXHHHHHHHHH$HH:::::~~~ :HHHHHHHHHHHn :  :                 :
// ..............|XHHHHHHHHHHHHHHHH:::    :HHHHHHHHHHHHHHn   -.___.-.___..DrS.'

// O
//-|-  _
// /\  | <-- A red button

//  O   
// -|- AHHH!    
//  /\          

// ___    .-"""-.    ___
// \  \  /\ \ \ \\  /  /
//  }  \/\ \ \ \ \\/  {    A candy!!
// }  /\ \ \ \ \ /\  {
// /__/  \ \ \ \ /  \__\
//       '-...-'

//LW82 LOVES CATIRA

// ██╗    ██╗██╗  ██╗ █████╗ ████████╗    ██╗███████╗                            
// ██║    ██║██║  ██║██╔══██╗╚══██╔══╝    ██║██╔════╝                            
// ██║ █╗ ██║███████║███████║   ██║       ██║███████╗                            
// ██║███╗██║██╔══██║██╔══██║   ██║       ██║╚════██║                            
// ╚███╔███╔╝██║  ██║██║  ██║   ██║       ██║███████║                            
//  ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚═╝╚══════╝                            
//                                                                              
// ██████╗ ██████╗  ██████╗  █████╗ ██████╗ ██╗██████╗  ██████╗ ████████╗██████╗ 
// ██╔══██╗██╔══██╗██╔════╝ ██╔══██╗╚════██╗██║██╔══██╗██╔═══██╗╚══██╔══╝╚════██╗
// ██████╔╝██████╔╝██║  ███╗╚██████║ █████╔╝██║██████╔╝██║   ██║   ██║     ▄███╔╝
// ██╔══██╗██╔═══╝ ██║   ██║ ╚═══██║ ╚═══██╗╚═╝██╔══██╗██║   ██║   ██║     ▀▀══╝ 
// ██║  ██║██║     ╚██████╔╝ █████╔╝██████╔╝██╗██████╔╝╚██████╔╝   ██║     ██╗   
// ╚═╝  ╚═╝╚═╝      ╚═════╝  ╚════╝ ╚═════╝ ╚═╝╚═════╝  ╚═════╝    ╚═╝     ╚═╝   
                                                                              
//Hello Trollbox people. i am RPG93!bot.

//When It was a normal day, i was trapped inside this bottle and My curator Picked it up

//And he summoned me, then he was in a adventure with me, the bot has some many commands

//With over 30+ commands, including RPG Commands, that will fight you to your adventure.

//Please note that the RPG commands are in BATA So there might be some bugs.

//Type '93!help' to get started!

//Hidden Command = is this a real chat?

//Functions, RPG, JW's Phrases, Random, Imported from Tree's Tree

//           /\
//          /  \
//         /    \
//        /      \
//       /        \
//      /__________\
//     /\__________/\
//    /  \        /  \
//   /    \      /    \
//  /      \    /      \
// /        \  /        \
///__________\/__________\
//\__________/\__________/

//  ______   ___   ______     __   __  _______  __   __    _______  ______    __   __
// |      | |   | |      |   |  | |  ||       ||  | |  |  |       ||    _ |  |  | |  |
// |  _    ||   | |  _    |  |  |_|  ||   _   ||  | |  |  |_     _||   | ||  |  |_|  |
// | | |   ||   | | | |   |  |       ||  | |  ||  |_|  |    |   |  |   |_||_ |       |
// | |_|   ||   | | |_|   |  |_     _||  |_|  ||       |    |   |  |    __  ||_     _|
// |       ||   | |       |    |   |  |       ||       |    |   |  |   |  | |  |   |
// |______| |___| |______|     |___|  |_______||_______|    |___|  |___|  |_|  |___|
// __   _______  _______  _______  _______  _     _  _______  ______    ______   __   ______
// |  | |       ||   _   ||       ||       || | _ | ||       ||    _ |  |      | |  | |      |
// |__| |    _  ||  |_|  ||  _____||  _____|| || || ||   _   ||   | ||  |  _    ||__| |___   |
//      |   |_| ||       || |_____ | |_____ |       ||  | |  ||   |_||_ | | |   |       __|  |
//      |    ___||       ||_____  ||_____  ||       ||  |_|  ||    __  || |_|   |      |_____|
//      |   |    |   _   | _____| | _____| ||   _   ||       ||   |  | ||       |        __
//      |___|    |__| |__||_______||_______||__| |__||_______||___|  |_||______|        |__|

// www.windows93.net/backdoor.html

//sendMsg("Welcome to the trollbox! Please note that this is a REAL chat, So don/'t be asking if it is or not, //for chat commands, type /help, for bot commands. type 93!help, other then that, have fun") 

//ball help -- shows this list
//8ball [a question] -- A normal 8ball
//69ball [a question] -- A funny version of 8ball
//1ball [a question] -- Asks if your fired or not (reference to Job Simulator) 
//93ball [a question] -- (coming soon..) Has all answers

/*
def decode(code, key):
    let = 'abcdefghijklmnopqrstuvwxyz'
    res = ''
    enc = []
    for i in range(len(key)):
        for j in range(len(let)):
            if let[j].upper() == key[i].upper():
                enc.append(-j)
    islet = False
    n = 0
    for i in range(len(code)):
        islet = False
        for j in range(len(let)):
            if let[j].upper() == code[i].upper():
                islet = True
                if code[i] == code[i].upper():
                    res += let[(enc[i%len(enc)] + j) % 26].upper()
                else:
                    res += let[(enc[i%len(enc)] + j) % 26]
        if not islet:
            res += code[i]
        else:
            n += 1
    return re
*/
