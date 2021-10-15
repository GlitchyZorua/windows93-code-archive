{
  let num,
      counter = 0,
      total,
      goal = false,
      win = $window({
        center: true,
        title: "2763 Counter",
        width: 140,
        height: 140,
        maximizable:false,
        resizable:false,
        html: "<center><h3></h3><span style='font-size: 7px;opacity: 0;'><b></b> numbers were generated for 2763 to happen</span></center>",
        footer: "<center>Numbers generated: <span></span></center>",
        ondestroy: function(){
            clearInterval(interval);
        }
      }),
      b = win.el.body.firstChild,
      interval = setInterval(function(){
        //if($window.current == win){
            num = Math.floor(Math.random() * 9000) + 1000;
            b.children[0].innerText = num;
            counter++;
            win.el.footer.firstChild.firstChild.firstElementChild./*firstChild.firstChild.firstChild.*/innerText = counter;
            if(goal == false && num == 2763){
                goal = true, total = counter;
                b.children[1].firstChild.innerText = total;
                b.children[1].style.opacity = "100";
            }
        //}
    }, 400);
}