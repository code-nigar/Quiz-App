function signup()
{
    document.querySelector(".login-form-container").style.cssText = "display: none;";
    document.querySelector(".signup-form-container").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = "background: linear-gradient(to left, hsl(162, 5%, 88%), hsl(162, 9%, 68%));";
    document.querySelector(".button-1").style.cssText = "display: none";
    document.querySelector(".button-2").style.cssText = "display: block";
    document.querySelector("#side-para").innerHTML = "Already have an account! \nSign in now "
};

function signin()
{
    document.querySelector(".signup-form-container").style.cssText = "display: none;";
    document.querySelector(".login-form-container").style.cssText = "display: block;";
    document.querySelector(".container").style.cssText = "background: linear-gradient(to left, hsl(212, 5%, 45%),  hsl(221, 9%, 27%));";
    document.querySelector(".button-2").style.cssText = "display: none";
    document.querySelector(".button-1").style.cssText = "display: block";

    document.querySelector("#side-para").innerHTML = "Don't have an account !! Sign-up now "
}
var currentUser;
var user_accounts = []
function userAccount(
    name,
    password,
    email
){
    this.name = name;
    this.password = password;
    this.email = email;
}
//register user account
document.getElementById("signup-form").addEventListener('submit',function(event)
    {
    event.preventDefault();
    var username = document.getElementById("signup-userName").value;
    var password = document.getElementById("signup-userPass").value;
    var mail = document.getElementById("signup-userEmail").value;

    user_accounts.push(new userAccount(username,password,mail));
    
    signin();
        
console.log(user_accounts);
   }
)
//authenticate user to login
document.getElementById("login-form").addEventListener('submit',function(event)
    {
    event.preventDefault();
    var username = document.getElementById("login-userName").value;
    var password = document.getElementById("login-userPass").value;
    for(let x=0; x<user_accounts.length; x++){
        if(user_accounts[x].name === username && user_accounts[x].password === password){
            console.log("login successful");
            currentUser = username;        
            console.log(currentUser);
            sessionStorage.setItem("userName", currentUser);
            let currentPath = window.location.pathname;
            let newpath = currentPath.slice(0,currentPath.indexOf("index.html")) + "pages/dashboard.html"
            window.location.pathname = newpath;
            break;
        }
        else{
            console.log("incorrect usernae or password");
        }
    }
   }
)
