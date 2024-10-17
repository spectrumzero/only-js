/* weakmap */
let weakMap = new WeakMap();

let john = { name: "John" };

weakMap.set(john, "ok");

john = null;
// john will be freed from memory

/* weakset */
let visitedSet = new WeakSet();

let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(pete);
alert(visitedSet.has(pete)); // true
alert(visitedSet.has(mary)); // false
pete = null;
alert(visitedSet.has(pete)); // false

/* TODO: use case */
