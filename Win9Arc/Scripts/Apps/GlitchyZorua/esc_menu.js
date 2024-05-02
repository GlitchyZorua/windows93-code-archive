var MenuKey = `Escape`

// Since keycode is deprecated, we'll use key instead.

const pressEsc = (event) => {
	if(event.key === MenuKey){ 
        $window.form('Windows Security',{
            schema:{
                  r:{
                    title:"Welcome to the "+MenuKey+' Menu'+', What would you like to do?',
                      type:"object"
                },
                  tool:{
                    type:'string',
                     title:"Option:",
                      enum:[['Shutdown the computer','a'],['Reboot the Computer','b'],['Reinstall the Computer','c'],['Enter/Exit to fullscreen','d'],['Kill all running applications','e'],['Open Terminal','f'],['Wipe /a/boot/','g']]
                }
            }
        },function(f,h){
            if(f){
                  $store.set('.config/toolselect/name',h.name)
                switch (h.tool){
                  case 'a': // shutdown
                    $exe('shutdown')
                  break;
                  case 'b': // reboot
                    $exe('reboot')
                  break;
                  case 'c': // format
                    $exe('format')
                  break;
                  case 'd': // fullscreen
                    $exe('fullscreen')
                    break;
                  case 'e': // killall
                    $exe('killall')
                    break;
                  case 'f': // terminal
                    $exe('terminal')
                    break;
                  case 'g': // wipe /a/boot/
                    $confirm('Wipe /a/boot/?', function (ok){
                        if (ok) {
                          $file.delete("/a/boot/")
                          $alert.info ('Done. Rebooting might be required.')
                        } else {
                        }
                      });
                   break;
                }
            }
        })
    }
}

window.addEventListener("keydown", pressEsc)