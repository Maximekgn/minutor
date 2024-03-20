const user_input = prompt("Entrez les minutes");
let totalMinutes = Number(user_input);
let hours = Math.floor(totalMinutes / 60);
let minutes = totalMinutes % 60;
let secondes = 0;



let timer = setInterval(function() {
    if (secondes == 0 && minutes != 0) {
        secondes = 59;
        minutes--;
    } else if (secondes == 0 && minutes == 0 && hours != 0) {
        secondes = 59;
        minutes = 59;
        hours--;
    } else {
        secondes--;
    }
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('secondes').innerText = secondes;

    if (hours == 0 && minutes == 0 && secondes == 0) {
        clearInterval(timer);
    }
}, 1000);
