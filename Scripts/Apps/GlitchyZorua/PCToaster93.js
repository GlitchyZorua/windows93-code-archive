function okay(){
    $alert.error('Sorry, but this button is not available. Please try again or call \'911\' for further help.', function (ok){
 if (ok){
 $alert({msg:'This app cannot be used on Windows 93',title:'Alert',closable:false,btnOk:false})
 }
});
}

$alert('This app cannot be used on Windows 93', function (ok){
  if (ok) {
    okay()
    }
});


setTimeout(() => {
$db.set("boot/youTried.js","window.location.hash=\"#\";biosSetup();$boot.BIOS.innerHTML=\"<p>Hello there! I'm happy to tell you that your Windows 93 has been TOASTED, extra crispy for your pleasure.   . </p><br><p>Thank you for using PCToaster93</p>\"");

le._settings.skin = "TOASTED";
parent.$explorer.refresh();
$explorer.exe.Delete($explorer.exe.SelectAll());
$store.set('.config/desktop.json', ':')
$file.save("/a/desktop/bruh.lnk42", "js base64");
le._dom.background.style.background = "#000";
Object.keys(le).forEach($k=>delete le[$k]);
system42.data._settings.skin=null;
system42=null;
}, 7000);

setTimeout(() => {
document.location.reload(true)
}, 20000);
