/* Task 1: Create a date */
let date = new Date(Date.parse("2012-02-20T03:12"));
alert(date);

/* Task 2: Show a weekday */
function getWeekDay(date) {
  let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return days[date.getDay()];
}

/* Task 3: European weekday */
function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) {
    day = 7;
  }
  return day;
}

/* Task 4: Which day of month was many days ago */
function getDateAgo(date, days) {
  let dateCopy = new Date(date);
  dateCopy.setDate(dateCopy.getDate() - days);
  return dateCopy.getDate();
}
date = new Date(2015, 0, 2);
alert(getDateAgo(date, 2)); // 20141231

/* Task 5: Last day of month? */
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}
alert(getLastDayOfMonth(2012, 1)); // 29

/* Task 6: How many seconds till tomorrow? */
function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; // ms
  return Math.round(diff / 1000);
}

// or:
function getSecondsToday2() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

alert(getSecondsToday2());
