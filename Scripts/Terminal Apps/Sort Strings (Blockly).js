le._apps.sort = {
    terminal: true,
    icon: "/c/sys/skins/w93/config.png",
    title: "Sort",
    exec: function(){
      if (this.arg.arguments.length == 0){
        $log.info('Type "sort" followed by words to sort alphabetically'); $log('');
        $log.yellow.center('Example:');
        $log.info('Input:'); $log('~ sort lorem ipsum dolor sit amet'); $log('');
        $log.blue('5 items found:<br><br>'); $log('[<br>  "' + ['lorem','ipsum','dolor','sit','amet'].sort().join('",<br>  "') + '"<br>];<br><br>');
        $log.info.italic('Note: Output will either just make a list or make it an array');
      } else {
        $log.blue(this.arg.arguments.length + " items found:<br><br>");
        $log($io.arr.random([this.arg.arguments.sort().join('<br>'),'[<br>  "' + this.arg.arguments.sort().join('",<br>  "') + '"<br>];']));
      };
    }
  }