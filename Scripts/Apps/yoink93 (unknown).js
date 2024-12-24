const fs = require("fs");
const path = require("path");
const http = require("http");

try {
  fs.mkdirSync(process.argv[2]);
} catch (err) {}

var filelist = [
  "/index.php",
  "/error.js",
  "/sys/",
  "/sys/hotfix.css",
  "/sys/start.js",
  "/sys/desktop.js",
  "/sys/upgrade.js",
  "/sys/apps.js",
  "/sys/apps/",
  "/sys/apps/clippy.js",
  "/sys/apps/layer.js",
  "/sys/apps/pony.js",
  "/sys/apps/sp3.js",
  "/sys/apps/g80.m3u.js"
];

function scanFolder(folder, path) {
  if (path != "/") filelist.push(path);
  for (var file in folder) {
    if (folder[file] === 0) {
      filelist.push(path + file);
    } else {
      scanFolder(folder[file], path + file + "/");
    }
  }
}

function getFile(url) {
  return new Promise((res, rej) => {
    http.get(url, (r) => {
      var chunks = [];
      r.on("data", (d) => chunks.push(d));
      r.on("end", () => res(Buffer.concat(chunks)));
    });
  });
}

async function downloadFiles() {
  for (var i in filelist) {
    var file = filelist[i];
    if (file.startsWith("/c/files")) continue;
    console.log("[" + ((i / filelist.length) * 100).toFixed(0).padStart(3) + "%] saving " + file + "...");
    if (file.endsWith("/")) {
      try {
        await fs.promises.mkdir(process.argv[2] + file);
      } catch (err) {}
    } else {
      await fs.promises.writeFile(process.argv[2] + file, await getFile("http://www.windows93.net" + encodeURI(file)));
    }
  }
}

getFile("http://www.windows93.net/files.json")
  .then((buf) => {
    console.log(buf.toString("utf-8"));
    scanFolder(JSON.parse(buf.toString("utf-8")), "/");
    downloadFiles();
  });
