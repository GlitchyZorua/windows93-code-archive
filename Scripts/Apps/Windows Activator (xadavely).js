$notif('You are using an unactivated verison of Windows 93. Press here to activate it.')
var TrayIcon = function ( options )
{
    var tray = document.createElement( "img" );
    tray.src = options.icon || "/c/sys/skins/w93/16/settings.png";
    var id = "tray-" + Math.floor( Math.random( ) * 10000 );
    var ctx = $menu( options.menu );
    tray.id = id;
    system42.data._dom.taskbar.querySelector( "#s42_notif" )
        .insertAdjacentElement( 'afterbegin', tray );
    if ( options.menu ) $el( le._dom.taskbar )
        .on( "mouseup _touchstart", "#" + id, function ( e )
        {
            if ( e.button === 2 )
            {
                ctx.show(
                {
                    el: this
                },
                { of : e,
                    within: le._dom.screen
                } );
            }
        } );
    options.onclick && tray.addEventListener( "click", options.onclick );
    options.ondblclick && tray.addEventListener( "dblclick", options.ondblclick );
    return tray;
}
var tray = TrayIcon(
{
    icon: "/c/sys/skins/w93/alert.png",
    ondblclick: function ( )
    {
        $alert( "onlinekeychecker.dll not found or corrupted" );
    },
    onclick: function ( )
    {
        $alert( "Error while opening win93activator.exe" );
    },
    menu: [
        {
            name: "Activate with .key file",
            action: function ( )
            {
                $alert( "Unsupported" );
            }
     },
     {
         name: "Hide Icon",
         action: function(){
             tray.remove();
         }
     } ]
} );