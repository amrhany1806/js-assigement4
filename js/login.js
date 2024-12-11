let signinEmail = document.getElementById('signinEmail')
let signinPassword = document.getElementById('signinPassword')
let loginform = document.getElementById("loginform");
let loginalert = document.getElementById("loginalert");
let loginSuccessalert = document.getElementById("loginSuccessalert");


let Users = [];


if (localStorage.getItem("Users") !== null) {
    Users = JSON.parse(localStorage.getItem("Users"));
}



loginform.addEventListener("submit", function (e) {
    e.preventDefault();
    login();
});

function login() {
    let userData = {
        Email: signinEmail.value,
        Password: signinPassword.value,
    };
    console.log(userData);

    if (valid(userData) == true) {
        loginSuccessalert.classList.replace("d-none","d-block")
       window.location.href = "page.html"
        
    } else {
        loginSuccessalert.classList.replace("d-block","d-none")
        loginalert.classList.replace("d-none","d-block")
    }
}

function valid(userData) {
    for (let i = 0; i < Users.length; i++) {
        if (Users[i].Email.toLowerCase() == userData.Email.toLowerCase() &&
        Users[i].Password.toLowerCase() == userData.Password.toLowerCase() 
        ) {
            localStorage.setItem("UserName" , Users[i].name)
            return true;
        }

    }
}

