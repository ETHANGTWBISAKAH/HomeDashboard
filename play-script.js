document.addEventListener('DOMContentLoaded', () => {

    const timerDisplay = document.querySelector('.timer-value');
    const ringProgress = document.querySelector('.ring-progress');
    const sliderValue = document.querySelector('.slider-value');

    const startBtn = document.querySelector('.focus-button--start');
    const pauseBtn = document.querySelector('.focus-button--pause');
    const resetBtn = document.querySelector('.focus-button--reset');

    const presetButtons = document.querySelectorAll('.timer-buttons .timer-button');
    const minusBtn = document.querySelector('.yearbutton.minus');
    const plusBtn = document.querySelector('.yearbutton.plus');

    let totalTime = 25 * 60;
    let timeLeft = totalTime;
    let timeInterval = null;
    let isRunning = false;

    const radius = 95;
    const circumference = 2 * Math.PI * radius;
    ringProgress.style.strokeDasharray = circumference;

    function updateDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    sliderValue.textContent = minutes;

    const offset = circumference - (timeLeft / totalTime) * circumference;
    ringProgress.style.strokeDashoffset = offset;
}

function setTimerDuration(mins) {
        clearInterval(timeInterval);
        isRunning = false;
        totalTime = mins * 60;
        timeLeft = totalTime;
        updateDisplay();
    }

function startTimer() {
        if (isRunning) return;
        if (timeLeft <= 0) timeLeft = totalTime;

        isRunning = true;
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            }
            else {
                clearInteravl(timerInteravl);
                isRunning = false;
                alert("focus session complete!");
            }
        }, 1000);
    }

function resetTimer() {
        clearInterval(timerInterval);
        isRunning = false;
        timeLeft = totalTime;
        updateDisplay();
    }

    function pauseTimer(){
        clearInterval(timerInterval);
        isRunning = false;
    }

presetButtons.forEach(button => {
        button.addEventListener('click', () => {
            const match = button.textContent.match(/(\d+)/);
            if (match) {
                const mins = parseInt(match[0], 10);
                setTimerDuration(mins);
            }
        });
    });

    plusBtn.addEventListener('click', () => {
        let currentMins = Math.floor(totalTime / 60);
        if (currentMins < 120) {
            setTimerDuration(currentMins + 1);
        }
    });

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();
});