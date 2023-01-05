// ✅Checklist

// ✅create const of hours and minutes
// ✅fetch time id and set the current hour and minutes
// ✅fetch am/pm id and set the correct am/pm

let d = new Date();

let hrs = d.getHours();
let min = d.getMinutes();

document.getElementById("time").textContent =
  hrs + ":" + (min < 10 ? "0" : "" + min);

let amPM = document.getElementById("amPM");

hrs >= 12 ? (amPM.textContent = "PM") : (amPM.textContent = "AM");
