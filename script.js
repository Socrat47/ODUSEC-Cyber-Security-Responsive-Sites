const hamburger = document.getElementById("hamburger");
const backlist = document.querySelector(".back-list");

let durum = false

const click = (e) =>{
    if(durum === false){
        backlist.style.display="block"
        durum = true;
    }
    else{
        backlist.style.display="none"
        durum = false;
    }
}




hamburger.addEventListener("click", click);