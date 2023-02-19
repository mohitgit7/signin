let login = document.querySelector(`.login`);
let signup = document.querySelector(`.Signup`);
let container = document.querySelector('.container');


login.onclick = function(){
    container.classList.add(`signinForm`);
}
signup.onclick = function(){
    container.classList.remove(`signinForm`);
}


// For Sign in section script

var user = document.querySelector(`#namee`);
var passcode = document.querySelector(`#pass`);
var objectUser = [
    {
        username: "Mohit",
        userpasscode: "Rohit"
    },
    {
        userName: "Mohit7",
        userPasscode: "Mohit"
    }
];

function loginbtn(){
    var username = document.getElementById("namee").value;
    var userpasscode = document.getElementById("pass").value;

   for(i = 0; i < objectUser.length; i++){
    if((username == objectUser[i].username) && (userpasscode == objectUser[i].userpasscode)){
        console.log(username + "You are logged in");
        // alert(username + "You are logged in !!");
        return;
    }
}
console.log("Enter a valid data");
    
}