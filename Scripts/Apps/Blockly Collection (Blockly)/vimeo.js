```js
le._apps.vimeo = {
  name: "Tube93",
  icon: "http://windows96.net/system36/icons96/mytube.png",
  categories: "Amusement;Video",
  exec: ()=>{
    $thumbnail=(n,u,t,a)=>{return `<button style="margin-bottom:4px" onclick="${a}"><img src="${t}" width="180"><br><b>${n}</b><br><span style="font-size:7px">${u}</span></button><br>`}
    spr=()=>{
      $window({
        url: "https://www.youtube.com/embed/lNEXAwwnSVs?showinfo=0&amp",
        icon: "http://windows96.net/system36/icons96/mytube.png",
        title: "SUPERPLAYER - WinTube",
        width: 560,
        height: 315
      })
    }
    mpt=()=>{
      $window({
        url: "https://www.youtube.com/embed/C7fKoamz0nY?showinfo=0&amp",
        icon: "http://windows96.net/system36/icons96/mytube.png",
        title: "MASHED POTATOES - WinTube",
        width: 560,
        height: 315
      })
    }
    ant=()=>{
      $window({
        url: "https://www.youtube.com/embed/sy8Utr0CvBI?showinfo=0&amp",
        icon: "http://windows96.net/system36/icons96/mytube.png",
        title: "Windows93 Anthology - WinTube",
        width: 560,
        height: 315
      })
    }
    maz=()=>{
      $window({
        url: "https://www.youtube.com/embed/jNQXAC9IVRw?showinfo=0&amp",
        icon: "http://windows96.net/system36/icons96/mytube.png",
        title: "Me at the zoo - WinTube",
        width: 560,
        height: 315
      })
    }
    stv=()=>{
      var a = document.createElement('style')
      a.innerText = "ofxh {overflow: hidden}"
      document.head.appendChild(a)
      $window({
        html: `<video style="width:98%;height:98%" controls name="media"><source src="/c/files/movies/stive.mp4" type="video/mp4"></video>`,
        icon: "http://windows96.net/system36/icons96/mytube.png",
        title: "stive - WinTube",
        width: 400,
        height: 320,
        minWidth: 490,
        minHeight: 312,
        bodyClass: "ofxh"
      })
    }
    $window({
      title: "WinTube",
      icon: "http://windows96.net/system36/icons96/mytube.png",
      width: 1000,
      height: 950,
      html: `<h1>Welcome to WinTube.com – Jankenpopp's personal video sharing websight</h1><h3>Trending</h3><hr>${$thumbnail("SUPERPLAYER","jankenpopp","https://i.ytimg.com/vi/lNEXAwwnSVs/maxresdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC5kYR5VZAk6zjUqdlLezBigCi7SQ","spr()")+$thumbnail("MASHED POTATOES","jankenpopp","https://i.ytimg.com/vi/C7fKoamz0nY/maxresdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCz_5lG3tPQ6fmGcHZ1Rh7tLuBOkA","mpt()")+$thumbnail("Windows93 Anthology","billgates","https://i.ytimg.com/vi/sy8Utr0CvBI/maxresdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCKpGlVh3XmIfPC855U_JwiVA5zng","ant()")+$thumbnail("Me at the zoo","jawed","https://i.ytimg.com/vi/jNQXAC9IVRw/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAhT44PmL5zBWvj2ijvFyrVtgzfWQ","maz()")+$thumbnail("stive","vidéosépiques","https://i.imgur.com/8yFqKU0.png","stv()")}`
    })
  }
}
```