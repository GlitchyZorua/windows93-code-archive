$prompt('Before doing anything in this window, say "win" in the terminal. Then, type the number here. for example, if you want to inject this into the trollbox, say win in the terminal. if it says #ui_window_5 ..Trollbox, and you want to inject into the trollbox, you would type 5 here. (it has to have an iframe)','',function(ok,wow){
    if(ok){
        if($window.instances[+wow]){
            $prompt('now the js to inject','',function(ok,dat){
                if(ok){
                    $window.instances[+wow].el.iframe.contentWindow.eval(dat)
                }
            })
        }else{
            $alert('invalid ID')
        }
    }
})