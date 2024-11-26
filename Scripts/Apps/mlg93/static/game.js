
// NETWORK

var socket = io();

var movement = {
  up: false,
  down: false,
  left:false,
  right:false,
  shift:false,
  space:false
}
document.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    //case 65: // A
    case 37: // A
      movement.left = true;
      break;
    //case 87: // W
    case 38: // W
      movement.up = true;
      break;
    case 39: // D
      movement.right = true;
      break;
    case 40: // S
      movement.down = true;
      break;  
    case 16: // Shift
      movement.shift = true;
      break; 
    case 32: // Space
      movement.space = true;
      break;
  }
});
document.addEventListener('keyup', function(event) {
  switch (event.keyCode) {
    case 37: // A
      movement.left = false;
      break;
    case 38: // W
      movement.up = false;
      break;
    case 39: // D
      movement.right = false;
      break;
    case 40: // S
      movement.down = false;
      break;
    case 16: // Shift
      movement.shift = false;
      break;     
    case 32: // Space
      movement.space = false;
      break;      
  }
});



setInterval(function() {
  socket.emit('movement', movement);
}, 1000 / 60);





socket.on('new player', function(data) {
  if (socket.id==data.id) {return};
  temp = new badGuy(data.x, data.y, data.angle, data.id);
  badGuys.push(temp);
  updateStats();
});

function removePlayer(id){
  for (var i = badGuys.length - 1; i >= 0; i--) {
    if(badGuys[i].id==id){
      delete players[id];
      scene.remove( badGuys[i].badGuy );
      badGuys.splice( badGuys.indexOf( badGuys[i] ), 1 );
      //
    }
  };
  return;
}

function removeShoot(id){
  for (var i = shootObjects.length - 1; i >= 0; i--) {
    if(shootObjects[i].id==id){

      boom = new explosionObject( shootObjects[i].myBox.position.x, shootObjects[i].myBox.position.z, shootObjects[i].myBox.position.y, shootObjects[i].myBox.rotation.y, shootObjects[i].id );
      explosionObjects.push(boom);

      scene.remove( shootObjects[i].myBox );
      shootObjects.splice( shootObjects.indexOf( shootObjects[i] ), 1 );

      
    }
  };
  return;
}

socket.on('player disconnect', function(data) {  
  if (socket.id==data.id) {return};

  for (var i = shootObjects.length - 1; i >= 0; i--) {
    remove=true;
      Object.keys(shoots).forEach(function(key) {
        //shoot = shoots[key];
        if (key==data.id){remove=false}
      });
    if (remove) {removeShoot(shootObjects[i].id)};
  };

  removePlayer(data.id);
  updateStats();
});


socket.on('kill', function(data) {  
  
  updateStats();

  killed=data[0];
  killer=data[1];

  if (killed!=socket.id) {
    removePlayer(killed);
  };

  if (killed==socket.id) {
    $('#me').html(killer+'<br> killed u.')
    $('canvas').hide();
    return
  };

  if (killer==socket.id) {
    $('#me').html('u killed <br>'+killed+'.')
    return
  };

  $('#me').html(killed+'<br> was killed by <br>'+killer+'.')

});


socket.on('state', function(data) {

  players=data[0];
  for (var id in players) {
    var player = players[id];
    if (player.id==socket.id) {
      playerPos[0]=player.x;
      playerPos[1]=player.y;
      playerPos[2]=player.angle;
    }else{
      for (var i = badGuys.length - 1; i >= 0; i--) {
        if(badGuys[i].id==player.id){
          badGuys[i].badGuy.position.x=player.x;
          badGuys[i].badGuy.position.z=player.y;
          badGuys[i].badGuy.rotation.y=player.angle/360*(Math.PI*2);
        }
      }
    }
  }

  shoots=data[1];
  

  for (var id in shoots) {
    var shoot = shoots[id];    
    for (var i = shootObjects.length - 1; i >= 0; i--) {      
      if (shootObjects[i].id==shoot.id) {
        temp=shoot.id;
        shootObjects[i].myBox.position.x=shoot.x;
        shootObjects[i].myBox.position.z=shoot.y;
      };
    };
  }

  //clean shoots
  for (var i = shootObjects.length - 1; i >= 0; i--) {
    remove=true;
      Object.keys(shoots).forEach(function(key) {
        shoot = shoots[key];
        if (key==shootObjects[i].id){remove=false}
      });
    if (remove) {removeShoot(shootObjects[i].id)};
  };

/*
  //clean guys
  for (var i = badGuys.length - 1; i >= 0; i--) {
    remove=true;
      Object.keys(players).forEach(function(key) {
        player = players[key];
        if (player.life==true){remove=false}
      });
    if (remove) {removePlayer(player.id)};
  };
*/


});


socket.on('cmd', function(data) {
  eval(data);
  console.log(data);
});

var arena;
socket.on('arena', function(data) {
  arena=data;
  init();
  animate();
});

var badGuys2add;
socket.on('spawn', function(data) {
  playerPos=[data[0].x,data[0].y,data[0].angle];
  badGuys2add=data[1];
});



  socket.on('player shoot', function(data) {
    //console.log(data);
    temp = new shootObject( data.x, data.y, 0, data.angle, data.angle/360*(Math.PI*2), data.id );
    shootObjects.push(temp);

  });

  function shootObject( posX, posZ, posY, angle, rotation, id ) {

        //if (id < 100){var material = new THREE.MeshLambertMaterial( { side: THREE.DoubleSide } );};
        var material = new THREE.MeshLambertMaterial( { ambient: 0xc3ff00, side: THREE.DoubleSide } );
        //var material = new THREE.MeshLambertMaterial( { ambient: 0xc3ff00, side: THREE.DoubleSide } );
        //var material = new THREE.MeshLambertMaterial( { ambient: 0xFFFFFF, side: THREE.DoubleSide } );

        this.myBox = new THREE.Mesh( new THREE.BoxGeometry( 5, 5, 5 ), material );
    this.myBox.position.set( posX, posY-4, posZ );
    scene.add( this.myBox );

    this.playerShootRadius = 30;

    this.myBox.rotation.y = rotation;
    this.tirAngle = angle % 360 ;
    this.tirPos = [posX,posZ];
    this.tirPosInit = [posX,posZ];
    //this.myBox.position.y = posY-4;

    this.working = 1;

    this.id = id;

  }




// GFX

if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var container, stats;
var camera, scene, renderer;
var sceneInterface, rendererInterface;
var gun;
var playerPos=[0,0,270];
var playerYRun, playerUp, playerDown, playerLeft, playerRight, ShiftDown=0;
var playerWidth = 4;
var playerYRun = 0, playerYRunSpeed = 0, playerYRunSpeedSens = 1;
var shootObjects = [], explosionObjects = [], badGuys = [];
var playerShootKey = 0; playerShoot = 0; playerShootWait = 1;
var blockWidth = 100, BoxCount;
playerPos[2] = 270;
playerY = 0;
//init();
//animate();



function init() {

  playerUp;
  playerDown;
  playerLeft;
  playerRight;
  tirPos = [0,0];
  tirPosInit = [0,0];

  container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 2000 );

  scene = new THREE.Scene();
  sceneInterface = new THREE.Scene();

  var light, object;

  scene.add( new THREE.AmbientLight( 0xdddddd ) );
  sceneInterface.add( new THREE.AmbientLight( 0xdddddd ) );

  light = new THREE.DirectionalLight( 0xffffff );
  light.position.set( 0, 200, 0 );
  scene.add( light );
  sceneInterface.add( light );

  var material = new THREE.MeshNormalMaterial(  { shading: THREE.SmoothShading});
  
  for (var y = arena.length - 1; y >= 0; y--) {

    for (var x = arena[y].length - 1; x >= 0; x--) {
      if (arena[y][x]==1) {
      var monY = (y * blockWidth);
      var monX = (x * blockWidth);
      object = new THREE.Mesh( new THREE.BoxGeometry( blockWidth, 70, blockWidth ), material );
      object.position.set( monX, 0, monY );
      scene.add( object );
      };      
    };

  };

  BoxCount = scene.children.length;

  console.log(badGuys2add);


  Object.keys(badGuys2add).forEach(function(key) {
    if (key!=socket.id) {
     // console.log(badGuys2add[key]);
        temp = new badGuy(badGuys2add[key].x, badGuys2add[key].y, badGuys2add[key].angle, key);
        badGuys.push(temp);
    };
  });
  delete badGuys2add;

  //items
/*
  for (var y = arena.length - 1; y >= 0; y--) {
    for (var x = arena[y].length - 1; x >= 0; x--) {

      if (arena[y][x]==6) {
        
        tempBadGuyObject = new badGuy(x*blockWidth, y*blockWidth, 0, 90);
        badGuys.push(tempBadGuyObject);
        
      };

    };
  };
*/

  gunObjectInit();


  var material = new THREE.MeshLambertMaterial( { ambient: 0x000000, side: THREE.DoubleSide } );
  object = new THREE.Mesh( new THREE.BoxGeometry( arena.length*blockWidth, 10, arena.length*blockWidth ), material );
  object.position.set( arena.length*blockWidth/2 , -40, arena.length*blockWidth/2 );
  scene.add( object );

  renderer = new THREE.WebGLRenderer( { antialias: false, logarithmicDepthBuffer: false, alpha: false } );
  renderer.setSize( window.innerWidth, window.innerHeight );

  rendererInterface = new THREE.WebGLRenderer( { antialias: false, logarithmicDepthBuffer: false, alpha: true } );
  rendererInterface.setSize( window.innerWidth, window.innerHeight );


  container.appendChild( renderer.domElement );

  container.appendChild( rendererInterface.domElement );

  //

  window.addEventListener( 'resize', onWindowResize, false );

  updateStats();

}


function animate() {
  requestAnimationFrame( animate );
  render();
}
//
function render() {
  if (camera.position.x != playerPos[0]) {camera.position.x = playerPos[0];};
  if (camera.position.z != playerPos[1]) {camera.position.z = playerPos[1];};
  var temp = playerY + playerYRun;
  if (camera.position.y != temp) {camera.position.y = temp;};
  var temp = (((360-playerPos[2])-90) / 360) * (Math.PI * 2)  ;
  if (camera.rotation.y != temp) {camera.rotation.y = temp;};
  // updates      
  explosionObjectUpdate();
  gunObjectUpdate();
  //
  renderer.render( scene, camera );
  rendererInterface.render( sceneInterface, camera );
}
//
function gunObjectInit(){
  gun = new THREE.Object3D();
  var material = new THREE.MeshLambertMaterial( { side: THREE.DoubleSide } );
  var box;
  box = new THREE.Mesh( new THREE.BoxGeometry( 10, 10, 20 ), material );
  box.position.set( 0, 0, 0 );
  gun.add( box );
  sceneInterface.add( gun );
}
//
function gunObjectUpdate(){
  var newPoint = pointFromPointAngleRadius([playerPos[0],playerPos[1]], playerPos[2], 50);
  var rotation = camera.rotation.y;
  gun.rotation.y = rotation;
  gun.position.set( newPoint[0], playerY-15, newPoint[1] );
}
//
function badGuy(posX, posZ, rotation, id){

  if (socket.id==id) {return};

  this.badGuy = new THREE.Object3D();
  this.id=id;
  this.pos=[posX,posZ,rotation];

  var material = new THREE.MeshLambertMaterial( { ambient: 0xFF00FF, side: THREE.DoubleSide } );

  head = new THREE.Mesh( new THREE.BoxGeometry( 8, 10, 8 ), material );
  head.position.set( 0, 8, 0 );
  this.badGuy.add( head );

  body = new THREE.Mesh( new THREE.BoxGeometry( 12, 18, 12 ), material );
  body.position.set( 0, -6, 0 );
  this.badGuy.add( body );

  jambe = new THREE.Mesh( new THREE.BoxGeometry( 5, 20, 5 ), material );
  jambe.position.set( 0, -25, -3.8 );
  this.badGuy.add( jambe );
  jambe = new THREE.Mesh( new THREE.BoxGeometry( 5, 20, 5 ), material );
  jambe.position.set( 0, -25, 3.8 );
  this.badGuy.add( jambe );

  this.badGuy.position.set( posX, 0, posZ );
  this.badGuy.rotation.y = rotation/360*(Math.PI*2);

  scene.add( this.badGuy );
}
//
function explosionObject( posX, posZ, posY, rotation, id ) {
  var material = new THREE.MeshLambertMaterial( { ambient: 0xc3ff00, side: THREE.DoubleSide } );
  this.rotation = Math.round(rotation*60);
  this.myRadius = 0;
  this.myBox = [];
  this.posX=posX;
  this.posY=posY;
  this.posZ=posZ;
  particuleCount = 8;
  for (var i = particuleCount - 1; i >= 0; i--) {
    var mySize = Math.random(5)+1;
    this.myBox[i] = new THREE.Mesh( new THREE.BoxGeometry( mySize, mySize, mySize ), material );
    this.myBox[i].position.set( posX, posY, posZ );
    this.myBox[i].rotation.y = rotation;
    scene.add( this.myBox[i] );
  };
  this.working = 1;
  this.mySpeed = 4;
}
//
function explosionObjectUpdate(){
  for (var i = 0; i <= explosionObjects.length - 1; i++) {
    var myPoint = [explosionObjects[i].posX, explosionObjects[i].posZ];
    var myBoxNumb = 0;
    explosionObjects[i].myBox[myBoxNumb].position.y = explosionObjects[i].myBox[myBoxNumb].position.y + explosionObjects[i].mySpeed / 2 ;
    var myBoxNumb = 1;
    explosionObjects[i].myBox[myBoxNumb].position.y = explosionObjects[i].myBox[myBoxNumb].position.y - explosionObjects[i].mySpeed;
    var myBoxNumb = 2;
    var tempPoint = pointFromPointAngleRadius(myPoint, explosionObjects[i].rotation, explosionObjects[i].myBox[1].position.y);
    explosionObjects[i].myBox[myBoxNumb].position.x = tempPoint[0];
    explosionObjects[i].myBox[myBoxNumb].position.z = tempPoint[1];
    explosionObjects[i].myBox[myBoxNumb].position.y = explosionObjects[i].myBox[myBoxNumb].position.y - 0.5;
    var myBoxNumb = 3;
    var tempPoint = pointFromPointAngleRadius(myPoint, explosionObjects[i].rotation-180, explosionObjects[i].myBox[1].position.y);
    explosionObjects[i].myBox[myBoxNumb].position.x = tempPoint[0];
    explosionObjects[i].myBox[myBoxNumb].position.z = tempPoint[1];
    explosionObjects[i].myBox[myBoxNumb].position.y = explosionObjects[i].myBox[myBoxNumb].position.y - 0.5;
    var myBoxNumb = 4;
    var tempPoint = pointFromPointAngleRadius(myPoint, explosionObjects[i].rotation+90, explosionObjects[i].myBox[1].position.y);
    explosionObjects[i].myBox[myBoxNumb].position.x = tempPoint[0];
    explosionObjects[i].myBox[myBoxNumb].position.z = tempPoint[1];
    explosionObjects[i].myBox[myBoxNumb].position.y = explosionObjects[i].myBox[myBoxNumb].position.y - 0.5;
    var myBoxNumb = 5;
    var tempPoint = pointFromPointAngleRadius(myPoint, explosionObjects[i].rotation-90, explosionObjects[i].myBox[1].position.y);
    explosionObjects[i].myBox[myBoxNumb].position.x = tempPoint[0];
    explosionObjects[i].myBox[myBoxNumb].position.z = tempPoint[1];
    explosionObjects[i].myBox[myBoxNumb].position.y = explosionObjects[i].myBox[myBoxNumb].position.y - 0.5;
    var myBoxNumb = 6;
    explosionObjects[i].myBox[myBoxNumb].position.y = explosionObjects[i].myBox[myBoxNumb].position.y + explosionObjects[i].mySpeed / 3 ;
    var tempPoint = pointFromPointAngleRadius(myPoint, explosionObjects[i].rotation+45, explosionObjects[i].myBox[1].position.y);
    explosionObjects[i].myBox[myBoxNumb].position.x = tempPoint[0];
    explosionObjects[i].myBox[myBoxNumb].position.z = tempPoint[1];
    explosionObjects[i].myBox[myBoxNumb].position.y = explosionObjects[i].myBox[myBoxNumb].position.y - 0.5;
    var myBoxNumb = 7;
    explosionObjects[i].myBox[myBoxNumb].position.y = explosionObjects[i].myBox[myBoxNumb].position.y + explosionObjects[i].mySpeed / 3 ;
    var tempPoint = pointFromPointAngleRadius(myPoint, 90+explosionObjects[i].rotation+45, explosionObjects[i].myBox[1].position.y);
    explosionObjects[i].myBox[myBoxNumb].position.x = tempPoint[0];
    explosionObjects[i].myBox[myBoxNumb].position.z = tempPoint[1];
    explosionObjects[i].myBox[myBoxNumb].position.y = explosionObjects[i].myBox[myBoxNumb].position.y - 0.5;
    if (explosionObjects[i].myBox[1].position.y < -50) {
      for (var j = explosionObjects[i].myBox.length - 1; j >= 0; j--) {
        scene.remove( explosionObjects[i].myBox[j] );
      }
      explosionObjects[i].working = 0;
    };
  };
  var purge = 0;
  for (var i = 0; i <= explosionObjects.length - 1; i++) {
    if (explosionObjects[i].working == 1) {
      purge++;
    };
  }
  if (purge == 0) {explosionObjects = [];};
}
//
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
  rendererInterface.setSize( window.innerWidth, window.innerHeight );
}

function updateStats(){

  //console.log(players);

  var arr=[];
  var i=0;
  Object.keys(players).sort().forEach(function(key) {
    arr[i]= players[key];i=i+1;
  });
  arr.sort(function (a, b) {
      return a.score - b.score;
  });
  str="";
  for (var i = arr.length - 1; i >= 0; i--) {
    c=" ";
    name=arr[i].id;    
    if (arr[i].id==socket.id) {name="You";};
    if (i==arr.length - 1) {c=" 👑"};
    str=str+name+c+": "+arr[i].score+"<br>";
  };

  //console.log(arr);
  $('#stats').html(str);
  $('#stats').show();


}

function getPseudo () {
  if (window.top === window) {
    pseudo = prompt('nickname ?');

    if (pseudo==null)  {pseudo="anonymous"};
    if (pseudo) {} else {pseudo="anonymous"};
    
    setPseudo(pseudo);

  } else {
    window.top.$prompt('nickname ?', '', function (ok, txt) {
      setPseudo(txt);
    });
  }
}

function setPseudo (txt) {
  pseudo = txt;
  //$store.set('.config/arena/nick', pseudo);
  // socket.emit('user joined', pseudo, color, style, pass);
  socket.emit('new player',pseudo);
}
getPseudo ()
