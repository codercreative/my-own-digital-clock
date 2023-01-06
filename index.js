// Checklist
// ✅create const of hours and minutes
// ✅fetch time id and set the current hour and minutes
// ✅fetch am/pm id and set the correct am/pm
// ✅start clock

function displayTime() {
  let time = document.getElementById("time");
  let amPM = document.getElementById("amPM");

  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;

  time.textContent = `${h}:${m}:${s}`;

  h >= 12 ? (amPM.textContent = `PM`) : (amPM.textContent = `AM`);

  setInterval(displayTime, 1000);
}

displayTime();
