const timerDisplay = document.querySelector('.timerDisplay');
const stopBtn = document.getElementById('stopBtn');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

let msec = 00;
let secs = 00;
let mins = 00;

let timerId = null;
startBtn.addEventListener('click', () => {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10)
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
   
})

resetBtn.addEventListener('click', () => {
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
     msec = secs = mins = '0'
})
function startTimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }
    let msecStr = msec < 10 ? `0${msec}` : msec;
    let secsStr = secs < 10 ? `0${secs}` : secs;
    let minsStr = mins < 10 ? `0${mins}` : mins;
   
    timerDisplay.innerHTML = `${minsStr} : ${secsStr} : ${msecStr}`;
}