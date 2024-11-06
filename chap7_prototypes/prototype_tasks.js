/* Task 1: Searching algorithm */
let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

alert(pockets.pen);

/* Task 2: Why are both hamsters full? */
// sol 1
let hasmter = {
  eat(foot) {
    this.stomach.push(foot);
  },
};

let speedy = {
  stomach: [],
  __proto__: hasmter,
};

let lazy = {
  stomach: [],
  __proto__: hasmter,
};

speedy.eat("apple");
alert(speedy.stomach); // apple
alert(lazy.stomach); // <nothing>

// sol 2: dont use push method
let ham = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
  },
};

let spd = {
  __proto__: ham,
};

let lz = {
  __proto__: ham,
};

spd.eat("apple");
alert(spd.stomach); // apple

alert(lz.stomach); // <nothing>
