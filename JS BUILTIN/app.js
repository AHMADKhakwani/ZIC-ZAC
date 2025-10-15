// let gameSeq = [];
// let userSeq = [];

// let btns =["red","blue","green","yellow"];

// let started = false;
// let level = 0;

// let h2=document.querySelector("h2");

// document.addEventListener("keypress", function(){
//     if(started == false){
//         console.log("game is started");
//         started = true;

//         levelUp();
//     }
// });

// function gameFlash(btn){
//     btn.classList.add("flash");
//     setTimeout(function(){
//         btn.classList.remove("flash");
//     },1000);
// }
// function userFlash(btn){
//     btn.classList.add("userflash");
//     setTimeout(function(){
//         btn.classList.remove("userflash");
//     },1000);
// }


// function levelUp(){
//     userSeq=[];
//     level++;

//     h2.innerText = `Level ${level}`;

//     let randIdx = Math.floor(Math.random() * 3);
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);
//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     gameFlash(randBtn);
// }

// function checkAns(idx){
//     if(userSeq[idx] === gameSeq[idx]){
//         if(userSeq.length == gameSeq.length){
//             setTimeout(levelUp,1000);
//         }
//     }else{
//         //   h2.innerText = `Game Over ! press any key to start`;
//           h2.innerHTML = `Game Over ! your score was <b> ${level}</b>  <br>press any key to start`;
//           document.querySelector("body").style.backgroundColor ="red";
//           setTimeout(function(){
//             document.querySelector("body").style.backgroundColor ="white";
//           }, 150);
//           reset();
//     }
// }

// function btnPress(){
//     console.log(this);
//     let btn = this;
//     userFlash(btn);
    
//     userColor=btn.getAttribute("id");
//     userSeq.push(userColor);

//     checkAns(userSeq.length-1);
// }
// let allBtns =document.querySelectorAll(".btn");
//     for(btn of allBtns){
//         btn.addEventListener("click", btnPress);
//     }
// function reset(){
//     userSeq =[];
//     gameSeq =[];
//     started = false;
//     level = 0;
// }



//  h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//  new promise((resolve , reject) =>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             resolve("color change!");
//         },  delay);
//     });
// }

// changeColor("red", 1000)
// .then(()=>{
//     console.log("red color was completed");
//     return changeColor("orange", 1000);
// })
// .then(()=>{
//     console.log("orange color was completed");
//     return changeColor("blue", 1000);
// })
// .this(()=>{
//     console.log("blue color was completed");
//     return changeColor("yellow", 1000);
// })
// .then(()=>{
//     console.log("red color was completed");
// });