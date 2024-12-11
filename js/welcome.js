let Namewhite = document.getElementById("Namewhite")

window.addEventListener('load', function(){
    displayusername()
})


function displayusername(){
    if(localStorage.getItem("UserName")!== null){
Namewhite.innerHTML = `Welcome ${localStorage.getItem("UserName")}`
    }else{
        Namewhite.innerHTML = "";
    }
    
}