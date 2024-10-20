/* Creation */
let now = new Date();
alert(now);

let Jan01_1970 = new Date(0);
alert(Jan01_1970);

let Jan02_1970 = new Date(24 * 3600 * 1000); // 24 hours
alert(Jan02_1970);

let date = new Date("2017-01-26");
alert(date);

// new Date(year, month, date, hours, minutes, seconds, ms)
date = new Date(2011, 0, 1, 2, 3, 4, 567);
alert(date); // 20110101, 02:03:04.567

/* Access date components */
alert(date.getMonth()); // 0-11
alert(date.getDate()); // 1-31
alert(date.getDay()); // 0-6

alert(date.getHours());
alert(date.getUTCHours());

/* Set date components */
let today = new Date();
today.setHours(0);
today.setSeconds(today.getSeconds() + 70);
alert(today);

/* to number */
alert(+today);

/* measure time */
// let start = new Date();
let start = Date.now();

for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

// let end = new Date();
let end = Date.now();
alert(`the loop took ${end - start} ms`);

// TODO: Benchmarking

/* Date.parse(str) */
let ms = Date.parse("2012-01-26T13:51:50.417-07:00"); // YYYY-MM-DDTHH:mm:ss.sssZ
alert(ms); // 1327611110417
let newdate = new Date(ms);
alert(newdate);
