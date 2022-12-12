
arr = ["/images/dice1.png","/images/dice2.png","/images/dice3.png","/images/dice4.png","/images/dice5.png","/images/dice6.png"];
var rand =Math.floor(Math.random() * 6)+1;

var final = arr[rand];
document.querySelector(".img1").setAttribute("src", final);



// // 2 set of random numbers
// var randomNumber1 = Math.floor(Math.random() * 6)+1;
// var randomNumber2 = Math.floor(Math.random() * 6)+1;

// //function to implement the random numbers into string link and store it into variables
// function player1(){
//     var arry = "/images/dice"+randomNumber1+".png";
//     return arry;
//     }
// function player2(){
//     var arry = "/images/dice"+randomNumber2+".png";
//     return arry;
//     }

//     //compairing 2 random numbers then make the output from scoreboard >>h1
//         if(randomNumber1 === randomNumber2){
//             document.querySelector(".scoreboard").innerHTML = ("DRAW");
//         }
//         else if(randomNumber1>randomNumber2){
//             document.querySelector(".scoreboard").innerHTML = ("Player 1 WINS");
//         }
//         else{
//             document.querySelector(".scoreboard").innerHTML = ("Player 2 WINS");
//         }

    
//     document.querySelector(".img1").setAttribute("src", player1());
//     document.querySelector(".img2").setAttribute("src", player2());

