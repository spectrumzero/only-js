/* Transparent caching (global method) */
function slow(x) {
  alert(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map(); // closure
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    let result = func(x);
    cache.set(x, result);
    return result;
  };
}

slow = cachingDecorator(slow);
alert(slow(1)); // slow(1) is cached and the result returned
alert("Again: " + slow(1)); // slow(1) result returned from cache

/* func.call(context,arg1,arg2...) (obj method) */
let user = {
  name: "John",
};
let admin = {
  name: "Admin",
};

function sayHi() {
  alert(this.name);
}

// sayHi(user); // no context
sayHi.call(user); // Jhon

/* example two */
let worker = {
  someMethod() {
    return 3;
  },

  slow(x) {
    alert("Called with " + x);
    return x * this.someMethod(); // (*)
  },
};

function cachingDecoratorObj(func) {
  let cache = new Map();
  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    let result = func.call(this, x); // NOTE: `this` here
    cache.set(x, result);
    return result;
  };
}

worker.slow = cachingDecoratorObj(worker.slow);

alert(worker.slow(2));
alert("Again: " + worker.slow(2));

/* multiple arguements */
let workerSup = {
  slow(min, max) {
    alert(`Called with ${min},${max}`);
    return min + max;
  },
};

function cachingDecoratorObjPowerful(func, hash) {
  let cache = new Map();
  return function () {
    let key = hash(arguments); // NOTE: Array-like Object
    if (cache.has(key)) {
      return cache.get(key);
    }

    let result = func.call(this, ...arguments); // NOTE: spread
    cache.set(key, result);
    return result;
  };
}

function hash(args) {
  return args[0] + "," + args[1];
}

workerSup.slow = cachingDecoratorObjPowerful(workerSup.slow, hash);
alert(workerSup.slow(3, 5));
alert("Again: " + workerSup.slow(3, 5));

/* func.apply */
// call forwardinig:
// the simplest one; no different with the original function
let wrapper = function () {
  return func.apply(this, arguments);
};
