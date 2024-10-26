/* length */
function ask(question, ...handlers) {
  let isYes = confirm(question);

  for (let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }
}

ask("Question?", () => alert("You said yes"), (result) => alert(result));

/* name */
alert(ask.name);

/* customized property */
function sayHi() {
  alert("Hi");

  sayHi.counter++;
}
sayHi.counter = 0;

sayHi();
sayHi();
alert(`Called ${sayHi.counter} times`);

/* NFE (Named Function Expression) */
let sayHello = function func(who) {
  if (who) {
    alert(`Hello,${who}`);
  } else {
    func("Guest");
  }
};

sayHello(); // Hello, Guest

// why func:
let welcome = sayHello;
sayHello = null;
welcome();
