let randomNumber = Math.floor(Math.random() * 20) + 1;
let check = document.querySelector("#subm");
let restart = document.querySelector("#restart");
let rand = document.querySelector("#random");
let score = 20;
let start = document.querySelector("#msg");
let scoreText = document.querySelector("#score");
let highText = document.querySelector("#highscore");
scoreText.innerText = score;

//validating
check.addEventListener("click", function(){
    let guessed = parseInt(document.querySelector("#inp").value);
if(rand.innerText != randomNumber){
    
    if (guessed < 1 || guessed>20|| isNaN(guessed) ){
        if(score > 1){
         start.innerText = "Input must be between 1-20!";
         score--;
         scoreText.innerText = score;
         document.querySelector("#inp").value = "";
        } else {
            start.innerText = "Game Over";
        }
     }
    else if(guessed === randomNumber){
         start.innerText = "Correct!";
         scoreText.innerText = score;
         highText.innerText = (highText.innerText < score) ? score : highText.innerText;
         rand.innerText = randomNumber;
         document.body.style.backgroundColor = " rgb(0, 255, 42)"
     } else if(guessed !== randomNumber){
        if(score > 1){
         start.innerText =(guessed > randomNumber)? "Too high": "Too low";
         score--;
         scoreText.innerText = score;
        }else {
         start.innerText = "Game Over!";
        }
     }  
}
})

restart.addEventListener("click", function(){
    randomNumber = Math.floor(Math.random() * 20) + 1;
    start.innerText = "Start Guessing!";
    document.querySelector("#inp").value = "";
    rand.innerText = "?"
    document.body.style.backgroundColor = " rgb(223, 204, 204)";
    score = 20;
    scoreText.innerText = score;
    console.log(randomNumber);
});
console.log(randomNumber);