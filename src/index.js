import generateJoke from "./generateJoke";
import "./style/style.scss";
import laugh from "./assets/laugh.jpg";
console.log(123);
console.log(generateJoke);
const laughImg = document.getElementById("laugh");
const laughbtn = document.getElementById("jokeBtn");
laughbtn.addEventListener("click", generateJoke);
laughImg.src = laugh;
