`use strict`;
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const date = new Date();
  timeDisplay.textContent = date.toLocaleTimeString("en-US");
}
  setInterval(refreshTime, 1000);