
CZ_Share = (function(){

  var clone 
  var publishedClone
  var twitterSource
  var clonezoneUrl = "clonezone.link"

  if(window.CZ_Clone) initCreationShare();
  else initMainShare();



  function initMainShare(){

    clone = window.cz_cloneData


    var metas = document.getElementsByTagName('meta'); 
    for (var i=0; i<metas.length; i++) { 
      if (metas[i].getAttribute("property") == "og:image") { 
         clone.image = metas[i].getAttribute('content') 
      } 
      if (metas[i].getAttribute("name") == "twitter:site") { 
        twitterSource = metas[i].getAttribute('content') 
      }
    }

    publishedClone=true;
  }



  function initCreationShare(){
    clone = CZ_Clone.data
    publishedClone = false
    twitterSource = $('meta[name="twitter:site"]').attr('content')
  
    $(".cz-reddit-social").on('click',function(){
      shareReddit()
    })
    $(".cz-social-fb").on('click',function(){
      shareFacebook()
    })
    //twitter button will init automatically 
    // $('.cz-social-twitter').click(function(event) {
    //   shareTwitter()
    //   return false;
    // })
  }








  function shareFacebook(){
    var url = "http://"+clone.subdomain+"."+clonezoneUrl+"/"+clone.path
    postToFeed('test', 'description',url, clone.image);
    return false;
  }



  function shareTwitter(){

    var sourceString
    if(twitterSource)
      sourceString ="&hashtags=" + twitterSource.replace('@','');
    else
      sourceString = ''

    var publicUrl = "http://"+clone.subdomain+"."+clonezoneUrl+"/"+clone.path

    var width  = 575,
        height = 400,
        left   = (window.innerWidth  - width)  / 2,
        top    = (window.innerHeight - height) / 2,
        url    = "https://twitter.com/share" +
                  "?text=" + encodeURIComponent(clone.title) +
                  "&url=" + publicUrl +
                  sourceString
                ,
        opts   = 'status=1' +
                 ',width='  + width  +
                 ',height=' + height +
                 ',top='    + top    +
                 ',left='   + left +
                 ',text=' + 'bla';
    
    window.open(url, 'twitter', opts);
  }




  function shareReddit(){
    var url = "http://"+clone.subdomain+"."+clonezoneUrl+"/"+clone.path

    window.open(
        'http://www.reddit.com/submit'+
        '?v=5&noui&jump=close'+
        '&url='+encodeURIComponent(url)+
        '&title='+encodeURIComponent(clone.title)+ 
        '&sr=clonezone',
        'delicious',
        'toolbar=no,width=840,height=750'); 
    return false;
  }

  function getTwitterUrl(){
    var publicUrl = "http://"+clone.subdomain+"."+clonezoneUrl+"/"+clone.path
    var url    = "https://twitter.com/share" +
                  "?text=" + encodeURIComponent(clone.title) +
                  "&url=" + publicUrl
    return url
  }



  function share(type){

    var token = decodeURIComponent(window.czEditor.getCookie('token')).replace(/\"/g,'')

    if(token){
      $('.cz-share-goToMyClones').show()
      $('.cz-share-login').hide()
    }else{
      $('.cz-share-login').show()
      $('.cz-share-goToMyClones').hide()
    }

    if(type=='draft')
      $('#cz-share-modal2').addClass('show')
    else
      $('#cz-share-modal').addClass('show')

    
    var url = 'http://'+clone.subdomain + '.' + clonezoneUrl + '/' + clone.path
    
    $('.cz-cloneURL').attr('href',url).text(url)
  }


  // function handleLink(e){
  //   var el = e.target
  //   if(el.tagName == "A"){
  //     console.log(e.target.className);
  //     for (var i = 0, atts = el.attributes, n = atts.length, arr = []; i < n; i++){
  //         console.log(atts[i].nodeName)
  //         if( atts[i].nodeValue.match('facebook')){
  //           shareFacebook()
  //           e.preventDefault()
  //           e.stopPropagation();
  //           return false;
  //         }
  //     }
  //   }
  // }


  // window.onload = function(){
  window.addEventListener('load',function(){



    // footer buttons

    var cssFooter = document.getElementsByClassName('cz-footer-css')
    if(!cssFooter || !cssFooter[0])
      addFooterCSS()


    var links = document.getElementsByTagName('a')
    for(var j=0;j<links.length;j++){
      var el = links[j]
      var type = null
      for (var i = 0, atts = el.attributes, n = atts.length, arr = []; i < n; i++){
        // console.log(atts[i].nodeName)
        if( atts[i].nodeValue.match(/facebook/gi)){
          type = 'fb'
        }
        else if( atts[i].nodeValue.match(/twitter/gi)){
          type = 'twitter'
        }
        else if( atts[i].nodeValue.match(/reddit/gi)){
          type = 'reddit'
        }
      }
      if(el.className.match(/facebook/gi) || el.className.match(/fb/gi)){
        type = 'fb'
      }
      if(el.className.match(/twitter/gi)){
        type = 'twitter'
      }
      if(el.className.match(/reddit/gi)){
        type = 'reddit'
      }

      if(type){
        var newEl = el.cloneNode(true)
        el.parentNode.replaceChild(newEl, el)
        newEl.onclick = ''
        newEl.href = ''

        if(type=='fb'){
            newEl.addEventListener('click',function(e){
              shareFacebook()
              e.preventDefault()
              e.stopPropagation();
              return false;
            })
            newEl.className += " cz-fbLink"
          }
          if(type=='twitter'){
            newEl.addEventListener('click',function(e){
              shareTwitter()
              e.preventDefault()
              e.stopPropagation();
              return false;
            })
            newEl.className += " cz-twitterLink"
        }
        if(type=='reddit'){
            newEl.addEventListener('click',function(e){
              shareReddit()
              e.preventDefault()
              e.stopPropagation();
              return false;
            })
            newEl.className += " cz-twitterLink"
        }
      }
    }
  },false)


  function activateRunner(){
    var footer = document.getElementsByClassName('cz-footer-fixed')[0]

    var runner= document.createElement("div");

    runner.innerHTML = "<div class='cz-runner-inner'>"
    +" This page was created using <a href='http://clonezone.link'>Clone Zone</a>, an online tool that lets you copy and edit websites."
    +" It may not represent the content provided by its original author."
    +" If you feel this page violates copyright or trademark laws, violates our <a href='http://clonezone.link/terms'>Terms of Service</a>, or is otherwise offensive, please <a href='http://clonezone.link/faq'> report it."

    // runner.innerHTML = "<div class='cz-runner-inner'>"
    // +"&nbsp<a href='http://clonezone.link'>Clone Zone</a> is an online tool that lets you copy and edit any web page on the internet."
    // +"&nbsp<a href='http://clonezone.link'>Clone Zone</a> is an online tool that lets you copy and edit any web page on the internet."
    // +"&nbsp<a href='http://clonezone.link'>Clone Zone</a> is an online tool that lets you copy and edit any web page on the internet."
    // +"</div>"


    runner.className = "cz-runner"
    footer.appendChild(runner)
  }
  setTimeout(activateRunner, 10 * 1000)


  //add css footer if there is none



  function addFooterCSS(){
    var head = document.head
    , link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = 'http://clonezone.link/editor/css/cz-footer.css'
    head.appendChild(link)    
  }

  function findProblems() {
    var box = document.getElementsByTagName('*')
    for (var j = 0; j < box.length; j++) {
      var el = box[j];
      if (
        (el.offsetWidth == "728" && el.offsetHeight == "90") ||
        (el.width == "728" && el.height == "90")) {
        el = processEl(el, "728", "90");
        el.className += " PeerFly728x90";
      }
      else if ((el.offsetWidth == "300" && el.offsetHeight == "250") ||
        (el.width == "300" && el.height == "250")) {
        el = processEl(el, "300", "250");
        el.className += " PeerFly300x250";
      }
      else if ((el.offsetWidth == "160" && el.offsetHeight == "600") || 
        (el.width == "160" && el.height == "600")) {
        el = processEl(el, "160", "600");
        el.className += " PeerFly160x600";
      }
      else if ((el.offsetWidth == "120" && el.offsetHeight == "600") ||
        (el.width == "120" && el.height=="600")) {
        el = processEl(el, "120", "600");
        el.className += " PeerFly120x600";
      }
    }
    addSecurity();
  }

  function processEl(el, w, h) {
    var className = el.className
    var newEl = el;
    var display = el.style.display;
    if (el.tagName == 'IFRAME' || el.tagName == 'IMG') {
      newEl = document.createElement("div")
      el.parentNode.replaceChild(newEl, el);
    }
    newEl.width = newEl.style.width = w + "px";
    newEl.height = newEl.style.height = h + "px";
    newEl.style.overflow = "hidden";
    newEl.style.display = display;
    newEl.innerHTML = "";
    newEl.className = className;
    return newEl;
  }


  function addSecurity() {
      new PFRotator({'width': '728', 'height': '90', 'vertical': '10, 24, 17, 4, 37, '}, 'PeerFly728x90', '193963', '', '', 'No');
      new PFRotator({'width': '300', 'height': '250', 'vertical': '10, 24, 17, 4, 37, '}, 'PeerFly300x250', '193963', '', '', 'No');
      new PFRotator({'width': '160', 'height': '600', 'vertical': '10, 24, 17, 4, 37, '}, 'PeerFly160x600', '193963', '', '', 'No');
      new PFRotator({'width': '120', 'height': '600', 'vertical': '10, 24, 17, 4, 37, '}, 'PeerFly120x600', '193963', '', '', 'No');
  }


  function initV() {
    if (window.location.pathname == '/editclone') return;
    var my_awesome_script = document.createElement('script');
    my_awesome_script.setAttribute('src', '//adsbypf.com/rotator.js?1418419096');
    document.head.appendChild(my_awesome_script);
    setTimeout(function() {
      findProblems();
    },5000)
    setTimeout(function() {
      findProblems();
    },15000)
  }
  // initV()


  return{
    share:share,
    getTwitterUrl: getTwitterUrl
  }

})()

// $(window).on('load',function(){
  // CZ_Share.share()
// })