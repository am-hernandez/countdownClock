let timerElement = document.getElementById("timer");
let timeRemaining = timerElement.innerText;

function countdown() {
  timeRemaining -= 1;
  if (timeRemaining <= 0) {
    timerElement.innerText = "🚀";
  } else {
    timerElement.innerText = timeRemaining;
  }
}

btn1.addEventListener("click", function(){
  timerElement.classList.add("animated");
  setInterval(countdown, 1000);
});
