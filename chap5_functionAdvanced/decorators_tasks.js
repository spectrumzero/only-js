/* Spy decorator */
function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];
  return wrapper;
}

/* Delaying decorator */
function f(x) {
  alert(x);
}

function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

// TODO:
/* Debounce decorator */
/* Throttle decorator */
