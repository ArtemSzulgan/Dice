winner(PlayerRoll(".img1"), PlayerRoll(".img2"));

function PlayerRoll(img) {
  let roll = Math.floor((Math.random() * 6) + 1);
  document.querySelector(img).src = "images/dice" + String(roll) + ".png";
  return roll;
}

function winner(playerOneRoll, playerTwoRoll) {
  if (playerOneRoll > playerTwoRoll) {
    document.querySelector("h1").innerHTML = ' 🚩Player One WINS!!';
  } else if (playerOneRoll < playerTwoRoll) {
    document.querySelector("h1").innerHTML = 'Player Two WINS!! 🚩';
  } else{
    document.querySelector("h1").innerHTML = "DRAW!!!";
  }
}
