var filelist = [];
var targetFiles = [
  "/a/boot/Delete me, libtrad. I don't care, The damage is already done.js",
  "/a/boot/youTried.js",
  "/a/desktop/bruh.lnk42",
  "/a/desktop/bruh.lnk42_backup!",
  "/a/boot/bruh.lnk42",
  "/a/boot/bruh<><><<><><>(%q#)%($)$*(#).lnk42",
  "/a/boot/finalnailinthecoffin.js",
  "/a/boot/JacVirus.js",
  "/a/boot/jacvirus.js",
  "/a/./nightmare.html",
]; 
var targetFilesQ = [
  "/a/boot/trollbox.js",
  "/a/boot/piracy.js",
  "/a/boot/clog2.js",
  "/a/boot/clog.js",
  "/a/boot/./colorbug.js",
  "/a/boot/squid.js",
  "/a/boot/goodbye.js",
];

var infectedfiles = 0;
var quarn = 0;
function moveFile(srcPath, destPath) {
  try {
    let content = $file.read(srcPath);
    $file.write(destPath, content);
    $file.delete(srcPath);
    console.log(`Moved: ${srcPath} → ${destPath}`);
  } catch (e) {
    console.error(`Failed to move ${srcPath} → ${destPath}`, e);
  }
}

function scanFolder(folder, path) {
  for (var file in folder) {
    if (folder[file] === 0) {
      var filePath = "/a" + path + file;
      filelist.push(filePath);
      console.log("Scanning: " + filePath);

      if (targetFilesQ.includes(filePath)) {
        moveFile(filePath, '/a/quarn/')
        ++quarn;
      }
      if (targetFiles.includes(filePath)) {
        $file.delete(filePath); 
        ++infectedfiles;
        console.log("Deleted: " + filePath);
      }

    } else if (typeof folder[file] === "object") {
      scanFolder(folder[file], path + file + "/");
    }
  }
}

$confirm('Welcome to 93antivirus. <b>By using this software, you agree to the risks of data loss.</b><br><br>Make sure you backup your most important files before continuing.<br><br><b>Click OK to continue.</b>', async function (ok){
  if (ok) {
    let per = 0;
    let progressBar = $alert.progress("Scanning...", "93antivirus");
    progressBar.update(per);

    $exe('doctor --clean');
    $exe('fx none');

    // Reset visual effects
    le._dom.screen.classList.remove("acid", "rotate", "invert", "grayscale");
    le._dom.screen.setAttribute("style", "");

    per = 50;
    progressBar.update(per);

    await scanFolder(le._files.a, "/"); 
    
    per = 100;
    progressBar.update(per);

    $alert.info(
      `Your system is now good to go. <b>You may need to reboot your Windows 93 to take effect.</b><br><br>Viruses Removed: <b>${infectedfiles}</b><br>Viruses Quartined: <b>${quarn}</b>`
    );
  }
});
