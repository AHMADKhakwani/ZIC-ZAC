// function hello(){
//     console.log("hello");
// }

// function demo(){
//     hello();
// }
// demo();

// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }
// function three (){
//     let ans = two() + one();
//     console.log(ans);
// }
// three();

// var name1 = "Aftab";
// console.log(name1);
// var name1 = "Aftab";
// console.log(name1);

// const ip = 2.5;
// ip = 2.6
// console.log(ip);

// let a =23;
// let b =23;
// let c =a + b;
// console.log(c);

// let car ={
//     brand : "toyota",
//     model : 2025
// }
// console.log(car);
// <-------------------
// let student={
//     name : "Ahmad",
//     age : 23,
//     courses:[
//         "app dev", "wordpres dev"
//     ]
// }
// console.log(student.age);
// <--------------------------
// // ARRAY
// let num =[1,2,3,4,5,6];
// console.log( num[0]);

// let student =["Ali","Ahmad","Arsalan"];
// console.log(student[1]);

// <-------------------
// Function
//  function student() {
//     console.log("Hello world");
//  }
 
//  student();

// function student(){
//     return 20;
// }
// function student(){
//     return 30;
// }
// function student(){
//     let ans = 20 + 30;
//     console.log(ans);
// }
// student();

// function student(a,b){
//     return a + b;
// }
//     console.log(student(20,30));

// <---------------------
// conditional statement

// var age = 23
// if(age < 18){
//     console.log("you are eligible");
// }else{
//     console.log("you are not eligible");
// }

// let marks = 40;
// if(marks >= 85){
//     console.log("Get A");
// }
// else if(marks >= 80 ){
//     console.log("Get B");
// }
// else if(marks >=70 ){
//     console.log("Get c");
// }else{
//     console.log("Get D");
// }

// <-----------------
// switch statement

// let color ="green";
// switch (color){
//     case "red":
//         console.log("break");
//         break;
//         case "yellow":
//             console.log("be ready");
//             break;
//             default:
//                 console.log("lets go");
// }
// <------------------
// callback hell
//  h1=document.querySelector("h1");

// setTimeout(()=>{
//     h1.style.color="red";
// },1000);
// setTimeout(()=>{
//     h1.style.color="yellow";
// },2000);
// setTimeout(()=>{
//     h1.style.color="blue";
// },3000);

// h1=document.querySelector("h1");

// function changeColor(color, delay){
//     setTimeout(() => {
//         h1.style.color=color;
//     }, delay);
// }
// changeColor("red",1000);
// changeColor("yellow",2000);
// changeColor("orange",3000);

//  Nested useCallback------------->

// let h1=document.querySelector("h1");

// function changeColor(color, delay, nextColorChange){
//     setTimeout(() =>{
//         h1.style.color= color;
//          if (nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor( "red" , 1000, () =>{
//     changeColor( "yellow" , 1000, () =>{
//          changeColor( "orange" , 1000, () =>{
//              changeColor( "green" , 1000, () =>{
//                 changeColor( "blue" , 1000, () =>{

//                 });
//             });
//         });
//     });
// });

// function savetoDb( data , success , failure){
//     let internetSpeed =Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4){
//         success();
//     }else{
//         failure();
//     }
// }
// savetoDb(
//     "apna college",
//     () => {
//         console.log("Success: your data was stored");
//     },
//     () => {
//         console.log("failure: your data is failed");
//     }
// );

// function savetoDb(data) {
//     return new Promise((resolve ,reject)=>{
//         let internetSpeed=Math.floor(Math.random()*10)+1;
//         if(internetSpeed > 4){
//             resolve("success : data is stored");
//         }else{
//             reject("failure : data is not stored");
//         }
//     });
// }

// savetoDb("apna college")
// .then((result)=>{
//     console.log("data1 saved");
//     console.log(result);
//     return savetoDb("hello world");
// })
// .then((result)=>{
//     console.log("data2 is saved");
//     console.log(result);
//     return savetoDb("apna college");
// })
// .then((result)=>{
//     console.log("data2 is saved");
//     console.log(result);
//     return savetoDb("Enigmatix");
// })
// .then((result)=>{
//     console.log("data4 is saved");
//     console.log(result);
// })
// .catch((error)=>{
//     console.log("promise is rejected ");
//     console.log(error);
// })


//  h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new promise((resolve , reject) =>{
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


// ---------------------------------------------------------------------->
// ASYNC
// ---------------------------------------------------------------------->

// async function greet(){
//     throw "page is not found";
//     return "hello!";
// }

// greet()
// .then((result)=>{
//     console.log("promise are resolved");
//     console.log("result was :", result);
// })
// .catch((err) =>{
//     console.log("404 page is not found", err);
// });

// let demo = async() =>{
//     return 5;
// };

// ---------------------------------------------------------------------->
//  AWAIT-KEYWORD
// ---------------------------------------------------------------------->
// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num= Math.floor(Math.random() *10) +1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();   
// }

// h1 = document.querySelector("h1");

// function changeColor(color, delay){
// return new promise((resolve , reject) =>{
//     setTimeout(()=>{
//         let num =Math.floor(Math.random() *5) +1;
//         if(num > 3){
//             reject("promise rejected");
//         }
//         h1.style.color =color;
//         console.log(`color change to ${color}!`);
//         resolve("color changed");
//     },delay);
// });
// }

// async function demo(){
//     try{
//         await changeColor("red", 1000);
//         await changeColor("orange", 1000);
//         await changeColor("blue", 1000);
//         await changeColor("green", 1000);
//         await changeColor("yellow", 1000);
//     }catch(err){
//         console.log("error caught");
//         console.log(err);
//     }
// }

// ------------------------------------------------------------->
// Fetch 
// ---------------------------------------------------------------->


// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("data1 =",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data2 =", data2.fact);
// })
// .catch((err)=>{
//     console.log("ERROR-", err);
// });

// -------------------------------------------------------->
// fetch in Async and Await
// ------------------------------------------------------------>

// let url = "https://catfact.ninja/fact";

// async function getFacts(){
//     try{
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
//     }catch(e){
//         console.log("Error-",e);
//     }
//     console.log("bye");
// }

// ------------------------------------------------->
// AXIOS
// --------------------------------------------------->

// let btn = document.querySelector("button");

// btn.addEventListener("click", async ()=>{
//     let fact= await getFacts();
//     console.log(fact);
//     let p = document.querySelector("fact");
//     p.innerHTML=fact;
// });
// let url="https://dog.ceo/api/breeds/image/random";

// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }catch(e){
//         console.log("Error-",e); 
//         return "No fact found";
//     }
// }


// let btn = document.querySelector("button");
// let url2="https://dog.ceo/api/breeds/image/random";


// btn.addEventListener("click", async ()=>{
//     let link = await getImage();

//     let img = document.querySelector("fact ");
//     img.setAttribute("src" , link);
//     console.log(link);
// });

// async function getImage(){
//     try{
//         let res = await axios.get(url2);
//         return res.data.message;
//     }catch(e){
//         console.log("Error-",e); 
//         return "/";
//     }
// }

// ---------------------------------------->
// HEADER API
// ------------------------------------------>


// const url = "https://icanhazdadjoke.com/";

// async function getJokes(){
//     try{
//         const config = {headers: {Accept: "application/json"}};
//         let res = await axios.get(url,config);
//         console.log(res);
//     }catch(err){
//         console.log(err);
//     }
// }

// ------------------------------------------------>
// Axios query strings
// ------------------------------------------------------->

// let url ="http://universities.hipolabs.com/search?name=";
// let btn =document.querySelector("button");

// btn.addEventListener("click", async() =>{
//     let country =document.querySelector("input").value;
//     console.log(country);

//     let colArr = await getColleges(country); 
//     show(colArr);
// });

// function show (colArr){
//     let list =document.querySelector("#list");
//     for(col of colArr){
//         console.log(col.name);

//         let li =document.createElement("li");
//         li.innerText =col.name;
//         list.appendChild(li);
//     }
// }

// async function getColleges(country){
//     try{
//         let res = await axios.get(url + country);
//         return res.data;
//     }catch(e){
//         console.log("Error-",e);
//         return [];
//     }
// }

// Strings in js
// var text ="ahmad";
// console.log(text.toUpperCase());


// var text ="ahmad";
// console.log(text.toLowerCase());

// var text ="javascript";
// console.log(text.length);


// var text ="javascript";
// console.log(text.slice(0,6));


// var text ="i like apples";
// console.log(text.replace("apples","mangos"));

// var first="hello";
// var second = "world";

// console.log(first.concat(" ", second));

// var text = " hello ";
// console.log(text.trim());

// var text ="hello";
// console.log(text.charAt(1));
// ------------------------------->
// ternary operator
// ------------------------------->

// let age =23;
// let result =(age >= 18)? "You can vote" : "To Young";
// console.log(result);

// ------------------------------------>
// switch
// ----------------------------------->
// let day = "Friday";

// switch(day){
//     case "Monday":
//         console.log("start week");
//         break;
//     case "Friday":
//         console.log("Weekend Near");
//         break;
//     default:
//         console.log("just another day");
// }

// -------------------------->
// alert and prompt
// -------------------------->

// let name = prompt("Enter user Name");
// alert("Hello," + name +"!");
// console.log(name);
// ------------------------->
// function reverseString(str){
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("AHMAD"));
// ------------------------------->
// For Loop
// ------------------------------>

// for(let i=1; i<=10; i++){
//     console.log(i);
// }
// --------------------->
// while loop
// ------------------------>
let i =1;
while(i<=5){
    console.log(i);
    i++;
}