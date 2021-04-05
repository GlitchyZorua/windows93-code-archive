function uninstall(){
$file.delete("/a/win94/")
$file.delete("/a/boot/94l.js")
$file.delete("/a/desktop/Performance Tweaker.lnk42")
$alert('Successfully uninstalled Windows 94. Press OK to reboot.', function (ok){
  if (ok) {
 $store.set('desktop/uninstall.txt', '- Removed /a/win94/\n- Removed /a/boot/94l.js\n- Removed Performance Tweaker Shortcut\n\nIf you find this tool useful, consider checking out my github for more tools like this here: https://github.com/Jacobwworkman. \n\nYou may now safely remove this txt (or keep it). ');
$exe("reboot")
  }
});
}

$confirm('Would you like to uninstall Windows 94? Please be sure to backup your files before doing this.', function (ok){
  if (ok) {
  uninstall();
  } else {
   return
  }
});
