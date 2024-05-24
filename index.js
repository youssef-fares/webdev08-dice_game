let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomNumber2 = Math.floor(Math.random() * 6 + 1);

let image1 = "./images/dice" + randomNumber1 + ".png";
let image2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 Wins! 🚩";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player2 Wins! 🚩";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
