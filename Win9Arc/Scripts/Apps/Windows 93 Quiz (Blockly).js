le._apps.quiz = {
    icon: "/c/sys/skins/w93/question.png",
    title: "Quiz",
    categories: "Amusement;Game;QuizGame",
    exec: function(){
      { 
  let quizData = [ 
    {question:"What is the exe for the Calculator on Windows 93?",answer:"calc",img:"/c/sys/skins/w93/apps/calc.png"},
    {question:"True or false?\nIn Windows 93 v1, Cat Explorer had a rainbow icon.",answer:["true","t"],img:"/c/sys/skins/w93/apps/catexplorer.png"},
    {question:"Who was the first Myspace user?",answer:"tom",img:"/c/sys/skins/w93/apps/catexplorer.png"},
    {question:"What is the phone number for the merchant in Robby?",answer:"66602",img:"/c/sys/skins/w93/apps/robby.png"},
    {question:"What app is most known for being glitchy?",answer:["solitude","solitare"]},
    {question:"What cant Doctor Marburg fix?\n\na. hydra\nb. IE6\nc. crazy\nd. dereg32",answer:["crazy","crazy error","crazy.exe","c"],img:"/c/sys/skins/w93/apps/doctor.gif"},
    {question:"Name one currently banned word on Trollbox.",answer:["sonic","discord","roblox","fornite","covid-19","corona","futur1993","among us"],img:"/c/sys/skins/w93/apps/chat.gif"},
    {question:"What file has a special effect when you delete it?",answer:["system32.dll","system32"]},
    {question:"Which of the following apps was removed in Windows 93 v2?\n\na. Piskel\nb. Calc\nc. NECRONOMICOIN\nd. FramaPad",answer:["framapad","d"],img:"/c/sys/skins/w93/win93.png"},
    {question:"Who created Windows93?",answer:["jankenpopp","zombectro"]}
  ]; 
  let index = 0; let qn = 1;
  function quiz(){ 
    if(index >= quizData.length){ 
        $alert({
          msg: "Congrats! You completed the quiz!\nNo password here, tho",
          title: "Quiz",
          img: "/c/sys/skins/w93/question.png",
          btnOk: "Cool story, bro"
        });
        return; 
    };
    let q = quizData[index];
    $prompt({ 
      icon: "/c/sys/skins/w93/question.png",
      title: "Question " + qn,
      msg: q.question, 
      img:`${q.img||"/c/sys/skins/w93/question.png"}`,
      btnOk: "Answer",
      btnCancel: ""
    },"",function(ok,text){
      if(!ok) return;
      let answer = q.answer;
      text = text.toLowerCase().trim();
      if(!answer instanceof Array) answer = [answer];
      if(answer.includes(text)){
        if (text == ""){
          $audio('error').play();
          $confirm("Incorrect. Retry?",function(ok){
            if(ok) quiz();
          });
        } else {
          index++; quiz(); ++qn;
        };
      }else{
        $audio('error').play();
        $confirm("Incorrect. Retry?",function(ok){
          if(ok) quiz();
        });
      };
    });
  };
  function yt(){
    window.open('http://youtube.com/c/Blockly806');
  };
  let title = "Quiz"; let icon = "/c/sys/skins/w93/question.png"; let okay = "Continue"; let can = "Quit";
  $confirm({
    title: title,
    img: icon,
    btnOk: okay,
    btnCancel: can,
    msg: "Welcome to the Windows 93 Quiz, made by Blockly.",
    help: "<b>Credits</b><br>Made by: <a href='#' onclick='yt()'>Blockly806</a><br>Script template by: 'HOST'*\n\n<span style='font-size: 4px;'>*i think</span>",
  }, function(ok){
    if (ok){
      $alert({
        sound: "",
        title: title,
        img: icon,
        btnOk: okay,
        msg: "There will be 10 questions on this quiz.\nClick the X button on the top of the window to quit at any time."
      }, function(ok){
        if (ok){
          quiz();
        };
      });
    };
  });
};
    }
  };