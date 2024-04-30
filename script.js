let minutes = 1;
let secondes = 0;
let running = false;
const debuterbtn = document.getElementById("debuterbtn");
const pausebtn = document.getElementById("pausebtn");
const resumerbtn = document.getElementById("resumerbtn");   
const resetbtn = document.getElementById("resetbtn");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function afficher() {
    min.innerText = minutes;
    sec.innerText = secondes;
}

function decrementer() {
    if (minutes > 0 && secondes == 0) {
        minutes--;
        secondes = 59;
    } else if (secondes > 0) {
        secondes--;
    }
    else running = false;
    afficher();
}

let intervalId;

debuterbtn.addEventListener("click", () => {
    running = true ;
    debuterbtn.style.display = "none";
    pausebtn.style.display = "inline-block";
    intervalId = setInterval(decrementer, 1000);
})

resumerbtn.addEventListener("click", () => {
    resumerbtn.style.display = "none";
    pausebtn.style.display = "inline-block";
    intervalId = setInterval(decrementer, 1000);

})

pausebtn.addEventListener("click", () => {
    pausebtn.style.display = "none";
    resumerbtn.style.display = "inline-block";
    clearInterval(intervalId);
})

resetbtn.addEventListener("click", () => {
    resumerbtn.style.display = "none";
    debuterbtn.style.display = "inline-block" ;
    minutes = 25;
    secondes = 0;
    afficher();
    clearInterval(intervalId);
    debuterbtn.style.display = "inline-block";
    pausebtn.style.display = "none";
})
