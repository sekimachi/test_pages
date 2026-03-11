let time = 0;
let interval;

const timer = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const circle = document.querySelector(".progress-circle");

const radius = 100;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

startBtn.addEventListener("click", startTimer);

function startTimer(){

    clearInterval(interval);
    time = 0;

    interval = setInterval(() => {

        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        timer.textContent =
            String(minutes).padStart(2,"0") + ":" +
            String(seconds).padStart(2,"0");

        let progress = time / 60;
        circle.style.strokeDashoffset = circumference * (1 - progress);

        time++;

        if(time > 60){
            clearInterval(interval);
            alert("1分経過！");
        }

    },1000);
}