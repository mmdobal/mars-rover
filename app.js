// Rover Object Goes Here
// ======================
var rover = {
  directions: ["N", "S", "E", "W"],
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
// ======================
function turnLeft(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "W":
      rover.direction = "S";    
  }
  console.log("turnLeft was called!");
  console.log("Current direction: " + rover.direction);
}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "W":
      rover.direction = "N";    
  }
  console.log("turnRight was called!");
  console.log("Current direction: " + rover.direction);
}

function moveForward(rover){
  switch (rover.direction) {
    case "N":
      rover.y += 1;
      break;
    case "S":
      rover.y -= 1;
      break;
    case "E":
      rover.x += 1;
      break;
    case "W":
      rover.x -= 1;  
  }
  console.log("moveForward was called!")
  console.log("Current position: (x = " + rover.x + ", y = " + rover.y + ")");
  rover.travelLog.push([rover.x, rover.y]);
}


var str = 'rffrfflfrff';

function commands(str){
  for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "f":
        moveForward(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover); 
        break;
    }
  }
  console.log("Final position: (x = " + rover.x + ", y = " + rover.y + ")");
  console.log(rover.travelLog)
}
