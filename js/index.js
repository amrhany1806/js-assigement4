let registerForm = document.getElementById("registerForm")
let signUpName = document.getElementById("signUpName")
let signUPEmail = document.getElementById("signUPEmail")
let signUpPassword = document.getElementById("signUpPassword")
let nameAlert = document.getElementById("nameAlert")
let EmailAlert = document.getElementById("EmailAlert")
let PasswordAlert = document.getElementById("PasswordAlert")
let existAlert = document.getElementById("existAlert")
let SuccessAlert = document.getElementById("SuccessAlert")
let loginalert = document.getElementById("loginalert")
let loginSuccessalert = document.getElementById("loginSuccessalert")
let Users = []


if(localStorage.getItem("Users")!== null){
Users = JSON.parse(localStorage.getItem("Users"))
}

registerForm.addEventListener("submit", function (e) {
    e.preventDefault();
 
    if(CheckifAllInputsAreValid()){
        console.log("User is added");
        addUser()
    }

})

function addUser(){
    let newUser ={
        name:signUpName.value,
        Email:signUPEmail.value,
        Password:signUpPassword.value,
    };

    if(isExist(newUser) == true){
        console.log("Email is already exists");
        existAlert.classList.replace("d-none", "d-block")
    }else{
        Users.push(newUser)
        localStorage.setItem("Users",JSON.stringify(Users))
        existAlert.classList.replace("d-block", "d-none")
        SuccessAlert.classList.replace("d-none", "d-block")

        setTimeout(function(){
            window.location.href = "../index.html"
        },1000)
    }
    }



function isExist(newUser){
    for(let i = 0 ; i < Users.length; i++ ){
        if(Users[i].Email.toLowerCase() == newUser.Email.toLowerCase()){
            
         return true   
        }
    }
}

function validateInputs(pattern, element, alertmsg) {
    let regex = pattern;
    if (regex.test(element.value) == true) {
        alertmsg.classList.replace("d-block", "d-none")
        return true
    } else {
        nameAlert.classList.replace("d-none", "d-block")
        return false
    }
}


function CheckifAllInputsAreValid() {
    if (validateInputs(/^[a-zA-Z]{2,}$/, signUpName, nameAlert) && 
    validateInputs(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/, signUPEmail, EmailAlert) && 
    validateInputs(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, signUpPassword, PasswordAlert)) {
        console.log("all inputs are good");
        return true;
    }else{
        console.log("wrong");
        return false;
    }
}

