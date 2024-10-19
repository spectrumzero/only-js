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
