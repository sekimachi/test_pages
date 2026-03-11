let time = 60;
let interval;

const timer = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", startTimer);

function startTimer(){

    clearInterval(interval);
    time = 60;

    interval = setInterval(() => {

        let minutes = Math.floor(time / 60);
        let seconds = time % 60;

        timer.textContent =
            String(minutes).padStart(2,"0") + ":" +
            String(seconds).padStart(2,"0");

        time--;

        if(time < 0){
            clearInterval(interval);
            alert("時間終了！");
        }

    },1000);
}