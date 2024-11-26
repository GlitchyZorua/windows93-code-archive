le._apps.dotsh = {
  exec: function() {
    var myArgs = this.arg.arguments;
    if (this.arg.arguments.length == 0) {
    	$log.fail(`Please specify a file.`);
	} else if (this.arg.arguments.length == 1) {
		if (localforage.getItem(this.arg.arguments[0].replace('/a/', '')).then(function(a){return a}) !== null && $store.getRaw(this.arg.arguments[0].replace('/a/', '')) !== null) {
			$store.getRaw(this.arg.arguments[0].replace('/a/', '')).split('\n').forEach(okthen => {
				if ($exe(okthen.split(' ')[0]) !== false) {
					$exe(okthen);
				} else {
					$log.fail(`Command ${okthen.split(' ')[0]} does not exist.`);
				}
			})
		} else {
			$log.fail(``)
		}
	} else {
		$log.fail(`Too much arguments!`);
	}
  },
  hascli: true,
  terminal: true
}