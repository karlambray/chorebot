let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let starButton = document.getElementById('start');

let botDoorPath = "img/robot.svg";
let beachDoorPath = "img/beach.svg";
let spaceDoorPath = "img/space.svg";
let closedDoorPath = "img/closed_door.svg";

door1.onclick = () => {
  if (!isClicked(door1)) {
  doorImage1.src = openDoor1;
  playDoor(door1);
  }
}

door2.onclick = () => {
  if (!isClicked(door2)) {
  doorImage2.src = openDoor2;
  playDoor(door2);
  }
}

door3.onclick = () => {
  if (!isClicked(door3)) {
  doorImage3.src = openDoor3;
  playDoor(door3);
  }
}

const isClicked = door => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

const gameOver = status => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  }
}

const playDoor = () => {
  numClosedDoors--;
  if (numClosedDoors ===0) {
    gameOver('win');
  }
}

const numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  } else {
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
}

randomChoreDoorGenerator();
