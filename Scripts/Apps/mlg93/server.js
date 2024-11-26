/*
npm init
npm install --save express socket.io
node server.js
*/

// Dependencies.
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', 8084);
app.use('/static', express.static(__dirname + '/static'));

// Routing
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(8084, function() {
  console.log('Starting server on port 8084');
});

var players = {};
var shoots = {};


var arena=[];
arena[0]=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
arena[1]=[1,3,0,1,0,0,0,1,0,0,0,1,0,5,1];
arena[2]=[1,4,0,0,0,1,2,0,0,0,0,0,0,0,1];
arena[3]=[1,1,1,1,1,1,0,1,1,1,1,1,1,1,1];
arena[4]=[1,1,1,1,1,1,0,0,1,1,1,1,1,1,1];
arena[5]=[1,3,0,1,0,0,0,1,0,0,0,1,0,5,1];
arena[6]=[1,4,0,0,0,1,2,0,0,0,0,0,0,0,1];
arena[7]=[1,1,1,1,1,0,0,0,1,1,1,1,1,1,1];
arena[8]=[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
arena[9]=[1,1,0,0,0,0,0,0,0,0,0,0,0,1,1];
console.log(arena)
/*arena[0]=[1,1,1,1,1,1,1,1,1,1];
arena[1]=[1,3,0,0,0,0,0,0,5,1];
arena[2]=[1,0,1,1,4,1,1,1,0,1];
arena[3]=[1,0,1,0,0,0,0,1,0,1];
arena[4]=[1,0,0,0,0,1,0,1,0,1];
arena[5]=[1,0,1,1,0,0,0,0,0,1];
arena[6]=[1,0,0,1,0,1,1,1,0,1];
arena[7]=[1,1,0,1,0,0,0,1,0,1];
arena[8]=[1,3,0,1,2,1,0,0,2,1];
arena[9]=[1,1,1,1,1,1,1,1,1,1];*/
var walls=[];
var spawns=[];
var blockWidth = 100;
for (var y = arena.length - 1; y >= 0; y--) {
    for (var x = arena[y].length - 1; x >= 0; x--) {
      if (arena[y][x]==1) {
        walls[walls.length] = [x * blockWidth, y * blockWidth];
      };      
      if (arena[y][x]==2) {
        spawns[spawns.length] = [x * blockWidth, y * blockWidth, 270];
      };
      if (arena[y][x]==3) {
        spawns[spawns.length] = [x * blockWidth, y * blockWidth, 0];
      };
      if (arena[y][x]==4) {
        spawns[spawns.length] = [x * blockWidth, y * blockWidth, 90];
      };
      if (arena[y][x]==5) {
        spawns[spawns.length] = [x * blockWidth, y * blockWidth, 180];
      };


    };
  };

console.log(walls)
console.log(spawns)
io.on('connection', function(socket) {
  //
  socket.on('new player', function(pseudo) {

    spawn=parseInt(Math.random()*spawns.length);

    players[socket.id] = {
      x: spawns[spawn][0],
      y: spawns[spawn][1],
      angle: spawns[spawn][2],
      width: 4,
      shoot:false,
      life:true,
      score:0,
      id:socket.id,
      nick:pseudo
    };

    socket.emit('spawn', [players[socket.id],players]);
    socket.emit('arena', arena);
   
    io.sockets.emit('new player', players[socket.id]);
  });
  //
  socket.on('movement', function(data) {

    var player = players[socket.id] || {};

    if (player.life==false) {
      if (data.space){
  
          spawn=parseInt(Math.random()*spawns.length);
           
          players[socket.id].x = spawns[spawn][0];
          players[socket.id].y = spawns[spawn][1];
          players[socket.id].angle = spawns[spawn][2];
          players[socket.id].shoot =true;
          players[socket.id].life =true;
          
          socket.emit('cmd', "$('canvas').show();");
          
          io.sockets.emit('new player', players[socket.id]);

          setTimeout(function(){ 
            players[socket.id].shoot=false;
          }, 1000);
      }
      return
    };

    if (data.up){movePLayer(player, 0)}
    if (data.down) {movePLayer(player, -180)}   
    if (data.left&&data.shift) {
      movePLayer(player, -90)
    }else{
      if (data.left) {player.angle = (player.angle - 5)%360}
    }
    if (data.right&&data.shift) {
      movePLayer(player, 90)
    }else{
      if (data.right) {player.angle = (player.angle + 5)%360}
    }
    
    if (data.space&&player.shoot==false){
      player.shoot=true;
      shoots[socket.id] = {
        x: player.x,
        y: player.y,
        angle: player.angle,
        initPos: [player.x,player.y],
        radius: 30,
        working: true,
        id:socket.id
      };
      io.sockets.emit('player shoot', shoots[socket.id]);
    }


  });
  //
  socket.on('disconnect', function() {
    io.sockets.emit('player disconnect', players[socket.id]);
    delete shoots[socket.id];
    delete players[socket.id];

  })
  //
});

function testBadGuyIntersection(PosX, PosZ, widthFrom, widthTo){

  var result = "";

  // intersection
  var RectA = {
    left:   PosX - widthFrom,
    top:    PosZ - widthFrom,
    right:  PosX + widthFrom,
    bottom: PosZ + widthFrom
  };
  // select bLocks (to work : allways keep blocks as scene's first objects)

   Object.keys(players).forEach(function(key) {
      player = players[key];
      temp = widthTo / 2;
      blockRect = {
        left:   player.x - temp,
        top:    player.y - temp,
        right:  player.x + temp,
        bottom: player.y + temp
      };
      if (intersectRect(RectA,blockRect)==1) {
        result = key;
      };

    });

   return result;

/*
  var count =  badGuys.length;
  for ( var i = count-1; i >= 0; i-- ) {
    var object = badGuys[i].badGuy;
    // get blockRect
    var temp = widthTo / 2;
    var blockRect = {
      left:   object.position.x - temp,
      top:    object.position.z - temp,
      right:  object.position.x + temp,
      bottom: object.position.z + temp
    };

    if (intersectRect(RectA,blockRect)==1) {
      result = i;

    };
  }

  */

}



function shootUpdate() {

  var tirSpeed = 8;
  var tirWidth = 5;
  var playerWidth = 8;

 //console.log(shoots.length)

 Object.keys(shoots).forEach(function(key) {
      shoot = shoots[key];
      tempPoint = pointFromPointAngleRadius(shoot.initPos, shoot.angle, shoot.radius);
      // walls
      if (shoot.radius < 50 || testBlockIntersection(tempPoint[0], tempPoint[1], tirSpeed/2)==0) {
        shoot.radius = shoot.radius + tirSpeed ;
      }else{
        if (shoot.working) { shoot.working = false };
      }
      // test players
      Object.keys(players).forEach(function(playerKey) {
        if (playerKey!=key) {
          var thisGuy = testBadGuyIntersection(shoot.x, shoot.y, tirWidth, playerWidth);
          if (thisGuy !=""&&thisGuy!=shoot.id&&players[thisGuy].life) {
            players[thisGuy].life=false;
            players[shoot.id].score=players[shoot.id].score+1;
            io.sockets.emit('state', [players,shoots]);
            io.sockets.emit('kill', [thisGuy,shoot.id]);
            if (shoot.working) { shoot.working = false };
          }
        };
      });
      //
      shoot.x = tempPoint[0];
      shoot.y = tempPoint[1];
  });

   // clean
  Object.keys(shoots).forEach(function(key) {
    shoot = shoots[key];
    if (shoot.working==false){
      players[key].shoot=false;
      delete  shoots[key];
    }
  });
  

}

setInterval(function() {

  shootUpdate();

  //console.log(shoots)

  io.sockets.emit('state', [players,shoots]);
}, 1000 / 60);



function movePLayer(player, angle){
      var newPoint = [player.x,player.y];
      var temp = pointFromPointAngleRadius(newPoint, player.angle+angle, player.width);
      if (testBlockIntersection(temp[0], temp[1], player.width)==0) {
        player.x = temp[0];
        player.y = temp[1];
      }else{
        if (testBlockIntersection(player.x, temp[1], player.width)==0){
          player.y = temp[1];
        };
        if (testBlockIntersection(temp[0], player.y, player.width)==0){
            player.x = temp[0];
        };      
      }
}



// Fonctions Utiles

function intersectRect(r1, r2) {
  return !(r2.left > r1.right || 
           r2.right < r1.left || 
           r2.top > r1.bottom ||
           r2.bottom < r1.top);
}

// 

function angleFromPointAandB(myA, myB){
  var myAngle = 0;
  var xyDelta = [];
  xyDelta[0] = myB[0] - myA[0];
  xyDelta[1] = myB[1] - myA[1];
  if (xyDelta[0] == 0) { 
    myAngle = 90;
  }else{
    myAngle = Math.atan( Math.floor(Math.abs(xyDelta[1])) / Math.floor(Math.abs(xyDelta[0])) );
    };
  myAngle = Math.min(90, Math.round((myAngle * 115) / 2) );
  if ((xyDelta[0] > 0) && (xyDelta[1] < 0) ){ 
    myAngle = 90 + (90 - myAngle);
  }else{
    if ((xyDelta[0] > 0)&&(xyDelta[1] >= 0)) {
      myAngle = 180 + myAngle;
    }else{
      if ((xyDelta[0] <= 0)&&(xyDelta[1] >= 0)) {
        myAngle = 270 + (90 - myAngle);
      };
    };
  };
    myAngle = (myAngle) % 360;
  return(myAngle);
}

//

function pointFromPointAngleRadius(myPoint, myAngle, myRadius){
    newPoint = [0.0,0.0];
    newPoint[0] = myPoint[0] + Math.cos(myAngle*3.14/180.0)*Math.floor(myRadius);
    newPoint[1] = myPoint[1] + Math.sin(myAngle*3.14/180.0)*Math.floor(myRadius);
    return(newPoint);
}

//

function distanceBetweenPointAandB(myA,myB){ 
  distance = Math.sqrt( Math.pow((myA[0]-myB[0]), 2) + Math.pow((myA[1]-myB[1]), 2) );
  return distance;
}

//

      function testBlockIntersection(PosX, PosZ, width){

        var result = 0;

        // intersection
        var playerRect = {
          left:   PosX - width,
          top:    PosZ - width,
          right:  PosX + width,
          bottom: PosZ + width
        };
        // select bLocks (to work : allways keep blocks as scene's first objects)

        for ( var i = walls.length-1; i >= 0; i-- ) {
          var temp = blockWidth / 2;
          var blockRect = {
            left:   walls[i][0] - temp,
            top:    walls[i][1] - temp,
            right:  walls[i][0] + temp,
            bottom: walls[i][1] + temp
          };
          if (intersectRect(playerRect,blockRect)==1) {
            result = 1;

          };
          
        }

        return result;

      }