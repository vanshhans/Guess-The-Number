"use strict";

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score=20;
const checkBtn = document.querySelector(".check");
const resetBtn=document.querySelector(".again");

checkBtn.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent ="Enter a number from 1 to 20";
  } 
  else if(guess===secretNumber){
    document.querySelector(".message").textContent="🎉Correct Number";
    document.querySelector("body").style.backgroundColor="green";
    document.querySelector(".number").textContent=guess;
    document.querySelector(".number").style.width="30rem";
    document.querySelector(".highscore").style.width=guess; 
    document.querySelector(".highscore").textContent=Math.max(score,document.querySelector(".highscore").textContent);
    score=20;
  }
  else if(guess!==secretNumber){
    if(score>1){
      score--;
      document.querySelector(".score").textContent=score;
      document.querySelector(".message").textContent=guess>secretNumber?"Too High":"Too Low";
      }
      else{
        document.querySelector(".message").textContent="You lost the game";
        document.querySelector(".score").textContent=0;
      }
  }
});

resetBtn.addEventListener("click",()=>{
  secretNumber= Math.floor(Math.random() * 20) + 1;
  document.querySelector(".guess").value="";
  document.querySelector(".message").textContent="Start guessing...";
  document.querySelector("body").style.backgroundColor="#222";
  document.querySelector(".number").textContent="?";
  document.querySelector(".score").textContent=score;
  document.querySelector(".number").style.width="15rem";
});
