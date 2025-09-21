$confirm('Welcome to 93antivirus. Click OK to cure.', function (ok){
  if (ok) {
    $exe('doctor --clean');
    $exe('fx none');
    le._dom.screen.classList.remove("acid");
    le._dom.screen.classList.remove("rotate");
    le._dom.screen.classList.remove("invert");
    le._dom.screen.classList.remove("grayscale");
    le._dom.screen.setAttribute("style", "");
    $alert.info('Your system is now good to go. <b>You may need to reboot your computer to take effect.</b>');
  }
});
