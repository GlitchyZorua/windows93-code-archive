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
	var vA = new THREE.Vector2();
	var vB = new THREE.Vector2();
	vA.x = myA[0];
	vA.y = myA[1];
	vB.x = myB[0];
	vB.y = myB[1];
	var distance = vA.distanceTo( vB ); // Fonction dépendante de THREE.JS ! (En attendant de trouver mieux)
	return distance;
}