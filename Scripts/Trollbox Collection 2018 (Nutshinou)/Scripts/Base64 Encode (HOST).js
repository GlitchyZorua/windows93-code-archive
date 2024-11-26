$prompt('Write javascript, like "alert(\'hello!\')"','alert(\'hello!\')',function(ok,txt){
$prompt('copy and paste in trollbox','/exe js data:application/javascript;base64,'+btoa(txt))
})