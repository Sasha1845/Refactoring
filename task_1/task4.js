class PageTimer {
  constructor(timerElementId) {
    this.timerElement = document.getElementById(timerElementId);
    this.totalSeconds = parseInt(localStorage.getItem('pageTime')) || 0;
    this.intervalId = null;
    this.updateTimer();
    this.setupVisibilityHandler();
    this.startTimer();
  }

  formatTime(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secs}`;
  }

  updateTimer() {
    this.timerElement.textContent = `Time on page: ${this.formatTime(this.totalSeconds)}`;
  }

  startTimer() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.totalSeconds++;
        localStorage.setItem('pageTime', this.totalSeconds);
        this.updateTimer();
      }, 1000);
    }
  }

  stopTimer() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  setupVisibilityHandler() {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    });
  }
}
document.addEventListener('DOMContentLoaded', () => {
  new PageTimer('timer');
});