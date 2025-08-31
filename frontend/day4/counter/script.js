const input = document.getElementById("secondsInput");
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const timeCounter = document.getElementById("timer");
let timer;
let intervalId;

start.addEventListener("click", () => {
    if (input.value) timer = input.value > 0 ? input.value : 0;
    else timer = 0;

    timeCounter.innerText = timer;
    start.classList.add("Disabled");
    startTimer();
});

reset.addEventListener("click", () => {
    timeCounter.innerText = 0;
    clearInterval(intervalId);
});

const startTimer = function() {
    intervalId = setInterval(timerHelper, 1000);
}

const timerHelper = function() {
    timer--;
    timeCounter.innerText = timer;
    if (timer <= 0) clearInterval(intervalId);
}
