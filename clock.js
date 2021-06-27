let timeRemaining = 5;
let timerElement = document.getElementById("timer");
let timer = setInterval(countdown, 1000);

function countdown() {
  timeRemaining -= 1;
  if (timeRemaining <= 0) {
    timerElement.innerText = "🚀";
  } else {
    timerElement.innerText = timeRemaining;
  }
}
