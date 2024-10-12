"use strict";
function hello(name) {
  let phrase = `Hello, ${name}!`;

  debugger;

  say(phrase);
}

function say(phrase) {
  alert(`** ${phrase} **`);
}

function log() {
  for (let i = 0; i < 5; i++) {
    console.log("value", i);
  }
}
