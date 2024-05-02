// created by GlitchyZorua
// v0.0.0
$prompt('Question?', '', function(ok) {
    var ballanswer = ['It is certain.','It is decidedly so.','Without a doubt.','Yes definitely.','You may rely on it.','Yes.','As I see it, yes.','Most likely','Outlook Good.','Signs point to yes.','Reply hazy, try again','Ask again later','Better not tell you now.','Cannot predict now.','Concentrate and ask again.','Don\'t count on it.','No.','My reply is no.','Outlook not so good.','Maybe.','Very doubtful.']
    var pick = ballanswer[Math.floor(Math.random()*ballanswer.length)];
    if (ok) {
        $alert({
            title: '8ball',
            msg: pick,
            icon: 'https://i.imgur.com/LrCodMZ.png',
            img: 'https://i.imgur.com/LrCodMZ.png',
            btnOk: 'Close'
          })
        }
});
