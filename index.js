let image1 = document.querySelector(".img1");
let image2 = document.querySelector(".img2");
let title = document.querySelector("h1");

var randomNumber1 =  "/images/dice" + Math.floor((Math.random() * 6) + 1) + ".png";
image1.setAttribute("src" , randomNumber1);

var randomNumber2 =  "/images/dice" + Math.floor((Math.random() * 6) + 1) + ".png";
image2.setAttribute("src" , randomNumber2);

if (randomNumber1 > randomNumber2) {
    title.textContent = "🚩Player 1 Wins"; 
} else if (randomNumber1 < randomNumber2) {
    title.textContent = "Player 2 Wins🚩"; 
} else {
    title.textContent = "🚩Match Draw🚩"; 
} 
