"use strict";

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

// loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
//   (script) => {
//     alert(`Script ${script.src} is loaded.`);
//     alert(_);
//   }
// );

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
  (script) => {
    alert(`${script.src} is loaded. now next.`);
    loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
      (script) => {
        alert(`the second script ${script.src} is loaded too.`);
      },
    );
  },
);

alert("be executed immediately");
alert("be executed immediately");
alert("be executed immediately");
