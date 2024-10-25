"use strict";

let val1 = "Surprise!";

function f() {
  let val2 = "a closer value";

  function g() {
    let val = "the closest value";
    debugger;
    alert("heihoa");
  }

  return g;
}

let g = f();

g();
