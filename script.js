let login = document.querySelector(`.login`);
let signup = document.querySelector(`.Signup`);
let container = document.querySelector('.container');


login.onclick = function(){
    container.classList.add(`signinForm`);
}
signup.onclick = function(){
    container.classList.remove(`signinForm`);
}


// For Sign Up section script

function createbtn() {
    var uname = document.getElementById("uname").value;
    var mail = document.getElementById("mail").value;
    var pwd = document.getElementById("pass").value;
    var cpwd = document.getElementById("pass-conf").value;

    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
	var letters = /^[A-Za-z]+$/;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(uname == ''){
        alert("Enter your user name");
    }else if(!letters.test(uname)){
        alert("User name field required only alphabet characters");
    }else if(mail == ''){
        alert("Please enter your user e-mail");
    }else if(!filter.test(mail)){
        alert("Please enter a valid mail id");
    }else if(pwd == ''){
        alert("Enter your password");
    }else if(!pwd_expression.test(pwd)){
        alert("Upper case, Lower case, Special character and Numeric letter are required in Password filed");
    }else if(cpwd == ''){
        alert("Please confirm password");
    }else if(pwd != cpwd){
        alert("Password didn't match");
    }else if(document.getElementById("pass-conf").value.length < 6){
        alert("Minimum password length must be 6");
    }else if(document.getElementById("pass-conf").value.length > 12){
        alert("Password max length must be 12");
    }else{
        alert(uname + ", you have created your Account");
    }
}

// Sign In section script

function loginbtn(){
    var uname = document.getElementById("uname1").value;
    var pwd = document.getElementById("pass1").value;

    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
	var letters = /^[A-Za-z]+$/;

    if(uname == ''){
        alert("Enter your user name");
    }else if(!letters.test(uname)){
        alert("User name field required only alphabet characters");
    }else if(pwd == ''){
        alert("Enter your password");
    }else if(!pwd_expression.test(pwd)){
        alert("Upper case, Lower case, Special character and Numeric letter are required in Password filed");
    }else if(uname == '' && pwd == ''){
        alert("Please fill the username and password");
    }else{
        alert(uname + ", you are logged in");
    }
}
