let code="password";

while(true) {
    let password = prompt("enter password");
    if (password == code) {
        alert ("correct password"); 
        break;
    } else {
        alert ("wrong password");
    }
}

var customerName = prompt("Please enter your name");

if (customerName!= null) {

    document.getElementById("welcome").innerHTML =

    "Hello " + customerName + "! How are you today?";

}
function myFunction2() {
     document.getElementById("demo").innerHTML = "Keep your head down!";
    
}
 
function myFunction() {
     document.getElementById("demo").innerHTML = "Play Well!";
    
}

function myFunction3() {
     document.getElementById("demo").innerHTML = "Partly cloudy with a 100% chance of golf";
    
}

function guessNumber() {

    const random = 5

    let number = parseInt(prompt('Guess a number from 1 to 10: '));

    while(number !== random) {
        number = parseInt(prompt('Guess a number from 1 to 10: '));
    }

    if(number == random) {
        alert('You guessed the correct number.');
    }

  }

guessNumber();

function feedback() {  
  var answer = prompt("How many balls do you use in a round?", " "); 

let text = "";  
 

if (answer < 6){
for (let i=1; i <= answer; i++) {
    text = "That's too many!" + answer + "**" + "<br>"; 

    document.getElementById("demo").innerHTML = text;
    let img = document.createElement("img");
    img.src = "./golfball.png";
    document.querySelector("body").appendChild(img);

}
}    
 else {
  text = "Your rating is greater than 5, try again"; 
}  
}