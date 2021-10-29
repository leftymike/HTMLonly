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

const ratingStars = [...document.getElementsByClassName("rating__star")];

function executeRating(stars) {
  const starClassActive = "rating__star fas fa-star";
  const starClassInactive = "rating__star far fa-star";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className===starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
      }
    };
  });
}
executeRating(ratingStars);
