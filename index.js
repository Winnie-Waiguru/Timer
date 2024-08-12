const secondsText = $(".seconds");
const minutesText = $(".minutes");
const hoursText = $(".hours");

const startBtn = $(".start");
const stopBtn = $(".stop");
const resetBtn = $(".reset");

let seconds = 0;
let minutes = 0;
let hours = 0;

let interval;

// button sound
const buttonSound = () => {
  var sound = new Audio("sounds/click-button.mp3");
  sound.play();
};

const updateText = (element, value) => {
  element.text(value.toString().padStart(2, "0"));
};

const updateTimer = () => {
  updateText(secondsText, seconds);
  updateText(minutesText, minutes);
  updateText(hoursText, hours);
};
const startTimer = () => {
  seconds++;

  if (seconds > 59) {
    minutes++;
    minutesText.text(minutes);
    seconds = 0;
  }

  if (minutes > 59) {
    hours++;
    hoursText.text(hours);
    minutes = 0;
  }
  updateTimer();
};

// Click button to activate the timer
startBtn.on("click", function () {
  buttonSound();
  if (!interval) {
    interval = setInterval(startTimer, 1000);
  }
});

// Reset timer
resetBtn.on("click", function () {
  buttonSound();
  clearInterval(interval);
  interval = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  secondsText.text("00");
  minutesText.text("00");
  hoursText.text("00");
});

// Stop timer
stopBtn.on("click", function () {
  buttonSound();
  clearInterval(interval);
  //   Setting interval to null allows on to continue the timer where they left off
  interval = null;
});
