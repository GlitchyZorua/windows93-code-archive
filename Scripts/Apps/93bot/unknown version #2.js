


var thisDate;

socket.on('message',function(data){

    thisDate = new Date();

    data.msg = decodeHtmlEntity(data.msg)

    data.nick = decodeHtmlEntity(data.nick)

    data.msg = data.msg.trim()

    if(data.msg.startsWith('!bot ')&&data.nick!=undefined){

        data.msg = data.msg.slice(5);

        if(data.msg.startsWith('date')){

            socket.emit('message',thisDate.getMonth()+'/'+thisDate.getDate()+'/'+thisDate.getFullYear())

        }

        if(data.msg.startsWith('time')){

            socket.emit('message',thisDate.getHours()+':'+thisDate.getMinutes()+' (24 Hour Time)')

        }

        if(data.msg.startsWith('help')){

            socket.emit('message','date, time, rename [name], echo [text]')

        }

        if(data.msg.startsWith('rename ')){

            data.msg = data.msg.slice(7)

            if(data.msg == pseudo){

                socket.emit('message','That\'s already my name')

            }else{

                setPseudo(data.msg)

            }

            return;

        }

        if(data.msg.startsWith('echo ')){

            data.msg = data.msg.slice(5) 

            if(data.msg.startsWith('/color ')){

                socket.emit('message','Thats for when color command comes out!')

                return;

            }

            if(data.msg.startsWith('/sin')){

                socket.emit('message','no')

                return;

            }

            if(data.msg == ('/block '+pseudo)){

                socket.emit('message','Trying to mess with the Bot files I see....\nNICE TRY.')

                return;
