// ✅Checklist

// ✅create const of hours and minutes
// ✅fetch time id and set the current hour and minutes
// ✅fetch am/pm id and set the correct am/pm
// ✅start clock

let time = document.getElementById("time");
let everySecond;

function displayTime() {
  let d = new Date();

  let hrs = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();

  time.innerText =
    hrs +
    ":" +
    (min < 10 ? "0" + min : "" + min) +
    ":" +
    (sec < 10 ? "0" + sec : "" + sec);

  let amPM = document.getElementById("amPM");
  hrs >= 12 ? (amPM.textContent = "PM") : (amPM.textContent = "AM");
}

function startClock() {
  displayTime();
  everySecond = setInterval(displayTime, 1000);
}
startClock();
