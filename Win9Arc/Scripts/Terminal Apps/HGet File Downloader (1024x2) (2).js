le._apps.hget = {
  cli: true,
  exec: async function() {
    const log = this.cli.log;

    try {
      if (this.arg.arguments.length == 2) {
        const [url, target] = this.arg.arguments;

        const res = await fetch(url);

        if (!res.ok) {
          log.yellow(res.status + " " + res.statusText);

          if (!this.arg.options.i) return;
        }

        $file.save(this.arg.arguments[1], await res.blob(), () => log.succes("download done!"));
      } else {
        log.red(`usage: hget [-i] [url] [output]
-i ignores errors`)
      }
    } catch (err) {
      log.red("error: " + err);
    }
  }
}