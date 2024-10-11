"use strict";

// Task 1: Uppercase the first character
function ucFirst(str) {
  if (!str) return str;
  let newstr = str[0].toUpperCase();
  newstr += str.slice(1);
  return newstr;
}

alert(ucFirst("marry"));

// Task 2: Check for spam
function checkSpam(str) {
  if (!str) return false;
  // NOTE: to make the search case-insensitive, we should bring the string to lower case and then search:
  let lowerStr = str.toLowerCase();
  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}
alert(checkSpam("buy ViAgRA now"));

// Task 3: Truncate the text
function truncate(str, maxlength) {
  return (str.length > maxlength) ? str.slice(0, maxlength - 1) + "…" : str;
}
alert(truncate("hello, this is spectrumzero", 20));

// Task 3: Extract the money
function extractCurrencyValue(str) {
  return +str.slice(1);
}
alert(extractCurrencyValue("$120") === 120);
