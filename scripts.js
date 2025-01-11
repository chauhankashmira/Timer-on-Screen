
    let timerInterval;
    let elapsedTime = 0;

    const timerDisplay = document.getElementById('timer');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');

    // Format time as HH:MM:SS
    function formatTime(seconds) {
      const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
      const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
      const secs = String(seconds % 60).padStart(2, '0');
      return `${hrs}:${mins}:${secs}`;
    }

    // Update the timer display
    function updateTimer() {
      timerDisplay.textContent = formatTime(elapsedTime);
    }

    // Start the timer
    startButton.addEventListener('click', () => {
      if (!timerInterval) {
        timerInterval = setInterval(() => {
          elapsedTime++;
          updateTimer();
        }, 1000);
      }
    });

    // Stop the timer
    stopButton.addEventListener('click', () => {
      clearInterval(timerInterval);
      timerInterval = null;
    });

    // Reset the timer
    resetButton.addEventListener('click', () => {
      clearInterval(timerInterval);
      timerInterval = null;
      elapsedTime = 0;
      updateTimer();
    });

    // Initialize timer display
    updateTimer();
  