le._apps.hypercam93 = {
  name: "Unregistered Hypercam 93",
  exec: function ( )
  {
    if ( location.protocol == "http:" )
    {
      return $alert.error( "Hypercam93 doesn't work when using Windows93 over HTTP. Try connecting to Windows93 over HTTPS:\n\n<a href=\"https://www.windows93.net/\">https://www.windows93.net/</a>" );
    }
    navigator.mediaDevices.getUserMedia(
      {
        video:
        {
          mediaSource: "screen"
        }
      } )
      .then( stream =>
      {
        var recorder = new MediaRecorder( stream );
        var chunks = [ ];
        recorder.ondataavailable = ( e ) => chunks.push( e.data );
        recorder.start( );
        $alert(
        {
          title: "Unregistered Hypercam 93",
          msg: "Recording your screen...",
          btnOk: "Stop",
          btnCancel: "Discard",
          minimizable: true,
          img: "data:image/gif;base64,R0lGODlhIAAgAKEDAGoAaf8A/4CAgP///yH/C05FVFNDQVBFMi4wAwEAAAAh/hFDcmVhdGVkIHdpdGggR0lNUAAh+QQJZAADACwAAAAAIAAgAAACfpyPA8ubDw8LtFIWM7Ccg5ws3Vg54Eaml6a2wQehLgkIjzzTtpS7sIHrjWo8YapmCxo7ROXS0nweBQKn9EW1SpHaJ/c6zIKZVMW4RE2eL2nzGlkEI3dAeZru3rZD+nKsyzSHl1CVIzj4UCUytHCHGJHVwOD4CEJ5WQlygKlZAAAh+QQJZAADACwAAAAAIAAgAAACHpyPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gubBQA7",
          sound: false
        }, ( keep ) =>
        {
          recorder.onstop = ( e ) =>
          {
            if ( keep )
            {
              file = "/a/hc93/" + new Date( )
                .toISOString( ) + ".webm";
              var blob = new Blob( chunks,
              {
                "type": "video/webm"
              } );
              $file.save( file, blob );
            }
            stream.getTracks( )
              .map( t => t.stop( ) );
          }
          recorder.stop( );
        } );
      } )
      .catch( err =>
      {
        if ( err.name != "NotAllowedError" )
        {
          $alert( "Hypercam 93 couldn't grab your screen.\n\n" + err.toString( ) );
        }
      } );
  }
}