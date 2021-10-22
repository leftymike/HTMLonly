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

var customerName = prompt("Please enter your name", "<name goes here>");

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