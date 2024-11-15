class Time {
  constructor(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  getFormattedTime(timeformat) {
    // Ensure time is always in 2-digit format for readability
    const formattedHours = this.hours < 10 ? "0" + this.hours : this.hours;
    const formattedMinutes =
      this.minutes < 10 ? "0" + this.minutes : this.minutes;
    const formattedSeconds =
      this.seconds < 10 ? "0" + this.seconds : this.seconds;

    if (timeformat === "24-hour format") {
      return `${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
    } else if (timeformat === "12-hour format") {
      const displayHours = this.hours % 12 === 0 ? 12 : this.hours % 12;
      return `${displayHours} : ${formattedMinutes} : ${formattedSeconds}`;
    } else {
      return `${formattedHours} : ${formattedMinutes} : ${formattedSeconds}`;
    }
  }

  get12HourTime() {
    return this.hours >= 12 ? "PM" : "AM";
  }
}

let customized = "12-hour format";

// Function to display time
function displayTime(time) {
  const _time = document.querySelector(".time");
  _time.textContent = time;
}

document.getElementById("customize").addEventListener("change", event => {
  // Toggle the time format between "12-hour format" and "24-hour format"
  customized = event.target.value;
  updateClock();
});
let alarmText = "";
// Function to update clock with current time
function updateClock() {
  let date = new Date();
  let call_ = new Time(date.getHours(), date.getMinutes(), date.getSeconds());
  let time = `${call_.getFormattedTime(customized)} ${call_.get12HourTime()}`;
  displayTime(time);
  console.log(alarmText);
  if (alarmText.trim() === time.trim()) {
    document.getElementById("error").style.display = "flex";
    const erro_message = document.getElementById("error-message");
    erro_message.textContent = "It's Time";
    erro_message.style.color = "white";
  } else {
  }
}

const colorpicker = document.getElementById("colorpicker");
colorpicker.addEventListener("input", event => {
  document.getElementById("time").style.color = `${event.target.value}`;
});

// Initial clock update
updateClock();

// Update the clock every second
setInterval(() => {
  updateClock();
}, 1000);

document.getElementById("setAlarm").addEventListener("click", () => {
  const alarm = document.getElementById("alarm");
  alarm.style.display = "flex";
  const btnset = document.getElementById("button");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  const select = document.getElementById("select");
  btnset.addEventListener("click", () => {
    if (!hours.value || !minutes.value || !seconds.value) {
      document.getElementById("error").style.display = "flex";
    } else {
      alarmText = `${hours.value} : ${minutes.value} : ${seconds.value} ${select.value}`;
      document.getElementById("newAlarm").textContent = alarmText;
      document.getElementById("title").style.display = "flex";
      alarm.style.display = "none";
    }
  });
  setInterval(() => {}, 1000);
});

document.getElementById("close-btn").addEventListener("click", () => {
  document.getElementById("error").style.display = "none";
  document.getElementById("").style.display = "none"
});
