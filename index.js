let date = new Date();

class _Date {
  constructor(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  getFormattedTime() {
    return `${this.hours}:${this.minutes}:${this.seconds}`;
  }

  get12HourTime() {
    if (this.hours >= 12) {
      return "PM";
    } else {
      return "AM";
    }
  }
}

function displayTime(time) {
  const _time = document.querySelector(".time");
  _time.textContent = time;

}

setInterval(() => {
  const call_ = new _Date(
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  );
  let time = `${call_.getFormattedTime()} ${call_.get12HourTime()}`;
  displayTime(time);
}, 1000);


// function showTime() {
//     let date = new Date();

//   let dateObj = {};
//   document.getElementById(
//     "time"
//   ).innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// }

// setInterval(() => {
//   showTime();
// }, 1000);
