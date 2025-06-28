let timer;
let isRunning = false;
let sessionType = 'Work';
let sessionCount = 0;

let workDuration = 25;
let shortBreak = 5;
let longBreak = 15;
let pomodorosBeforeLong = 4;

let timeLeft = workDuration * 60;

const timerDisplay = document.getElementById('timer');
const sessionDisplay = document.getElementById('sessionType');
const indicatorsDisplay = document.getElementById('indicators');

const workInput = document.getElementById('workInput');
const shortBreakInput = document.getElementById('shortBreakInput');
const longBreakInput = document.getElementById('longBreakInput');
const cyclesInput = document.getElementById('cyclesInput');

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
  sessionDisplay.textContent = sessionType;
}

function startTimer() {
  if (!isRunning) {
    applyCustomSettings();
    isRunning = true;
    timer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateDisplay();
      } else {
        clearInterval(timer);
        isRunning = false;
        handleSessionEnd();
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  sessionType = 'Work';
  sessionCount = 0;
  applyCustomSettings();
  updateIndicators();
  updateDisplay();
}

function handleSessionEnd() {
  if (sessionType === 'Work') {
    sessionCount++;
    sessionType = sessionCount % pomodorosBeforeLong === 0 ? 'Long Break' : 'Short Break';
  } else {
    sessionType = 'Work';
  }

  applyCustomSettings();
  updateIndicators();
  updateDisplay();
  startTimer(); // auto-start next session
}

function applyCustomSettings() {
  workDuration = parseInt(workInput.value) || 25;
  shortBreak = parseInt(shortBreakInput.value) || 5;
  longBreak = parseInt(longBreakInput.value) || 15;
  pomodorosBeforeLong = parseInt(cyclesInput.value) || 4;

  if (sessionType === 'Work') timeLeft = workDuration * 60;
  else if (sessionType === 'Short Break') timeLeft = shortBreak * 60;
  else timeLeft = longBreak * 60;
}

function updateIndicators() {
  let icons = '';
  for (let i = 0; i < pomodorosBeforeLong; i++) {
    icons += i < sessionCount % pomodorosBeforeLong ? '🔴 ' : '⚪ ';
  }
  indicatorsDisplay.textContent = icons.trim();
}

resetTimer();
