let timer;
let timeLeft = 25 * 60; // Default 25 minutes in seconds
let isRunning = false;

const timeDisplay = document.querySelector('.time-display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const setTimeButton = document.getElementById('set-time');
const minutesInput = document.getElementById('minutes');

// Update timer display
function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Start the timer
function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;
      alert('Time’s up! Take a break.');
    }
  }, 1000);
}

// Pause the timer
function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
}

// Reset the timer
function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = 25 * 60; // Reset to default 25 minutes
  updateDisplay();
}

// Set a custom timer
function setCustomTime() {
  const minutes = parseInt(minutesInput.value, 10);
  if (isNaN(minutes) || minutes < 1) {
    alert('Please enter a valid number greater than 0.');
    return;
  }
  clearInterval(timer);
  isRunning = false;
  timeLeft = minutes * 60;
  updateDisplay();
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
setTimeButton.addEventListener('click', setCustomTime);

// Initialize display
updateDisplay();
