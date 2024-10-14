/* splice() */
let arr = ["i", "study", "javascript"];
arr.splice(1, 1); // i,javascript
arr.splice(1, 0, "study"); // i,study,javascript

/* slice() */
let newArr1 = arr.slice(0, 2); // i,study
alert(newArr1);

/* concat() */
let newArr2 = arr.concat(newArr1, [1, 2], 0); // i,study,javascript,i,study,1,2,0
alert(newArr2);

/* forEach() */
arr.forEach(alert);
arr.forEach((item, index, array) => {
  alert(`${item} is at index ${index} in ${array}`);
});

/* indexOf() */
alert(arr.indexOf("i")); // 0
alert(arr.indexOf("fjaljf")); // -1

/* includes() */
alert(arr.includes("fjaljf")); // false

/* find() */
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];
let user = users.find((item) => item.id == 1);
alert(user.name); // John

/* findIndex() */
let userIndex = users.findIndex((item) => item.name == "John");
alert(userIndex); // 0

/* filter() */
let someUsers = users.filter((item) => item.id < 3);
someUsers.forEach((item) => alert(item.name)); // John,Pete

/* map() */
let allUsernames = users.map((item) => item.name);
alert(allUsernames);

/* sort(fn) */
let inplaceArr = [1, 2, 15];

function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

inplaceArr.sort(compare);

// or simply:
inplaceArr.sort((a, b) => a - b); // 1,2,15

/* reverse() */
inplaceArr.reverse(); // 15,2,1

/* split() */
let names = "Bilbo, Gandalf, Nazgul";
let namesArr = names.split(",");
for (let name of namesArr) {
  alert(`A message to ${name}.`);
}

/* join() */
let joinedNames = namesArr.join(";");
alert(joinedNames);

/* reduce() */
arr = [1, 2, 3, 4, 5];
let result = arr.reduce((accumulator, item) => accumulator + item, 0);
alert(result); // 15

/* Array.isArray() */
alert(Array.isArray(arr)); // true
