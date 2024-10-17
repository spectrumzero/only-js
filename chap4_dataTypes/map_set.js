/* Map basics */
let map = new Map();

map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1");

let john = { name: "John" };
map.set(john, 123);

alert(map.get(1)); // num1
alert(map.get("1")); // str1
alert(map.get(john)); // 123
alert(map.size); // 4

/* chaining */
let newMap = new Map();
newMap.set("1", "str1")
  .set(1, "num1")
  .set(true, "bool1");

/* iteration of Map */

// NOTE: syntax: new Map([iterable (array here or else) ];
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

// map.keys()
for (let vegetable of recipeMap.keys()) {
  alert(vegetable);
}

// map.values()
for (let amount of recipeMap.values()) {
  alert(amount);
}

// map.entries()
for (let entry of recipeMap) { // the same as recipeMap.entries()
  alert(entry);
}

// forEach()
recipeMap.forEach((value, key, map) => {
  alert(`${key}: ${value}`);
});

/* Object.entries(obj) */
let obj = {
  name: "John",
  age: 30,
};

let objMap = new Map(Object.entries(obj));
alert(objMap.get("name")); // John

/* Object.fromEntries() */
let pricesArr = [
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
];
let pricesObj = Object.fromEntries(pricesArr);
alert(pricesObj.meat); // 4

/* Set basics */
let set = new Set();
let a = { name: "John" };
let b = { name: "Pete" };
let c = { name: "Mary" };

set.add(a);
set.add(b);
set.add(c);
set.add(a);

alert(set.size); // 3

// for .. of
set = new Set(["oranges", "apples", "bananas"]);
for (let value of set) alert(value);

// or: forEach
set.forEach((value, valueAgain, set) => {
  alert(value);
});
