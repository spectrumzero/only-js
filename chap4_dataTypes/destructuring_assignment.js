/* destructure array (or any iterable object) */
let arr = ["John", "Smith"];
let [firstName, surname] = arr;
alert(firstName); // John
alert(surname); // Smith

// optionally
let [, second, , last] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

alert(second); // Caesar
alert(last); // of the Roman Republic

// trick 1:
let user = {
  name: "John",
  age: 30,
};

for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`);
}

// trick 2: change values of two variables
let guest = "Jane";
let admin = "Pete";
[guest, admin] = [admin, guest];
alert(`${guest} ${admin}`);

/* ... */
let [name1, name2, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

alert[rest[0]]; // Consul

/* = */
let [nameOne = "Guest", nameTwo = "Anonymous"] = ["Julius"];
alert(nameOne); // Julius
alert(nameTwo); // default

/* destructure objects */
let options = {
  title: "Menu",
  width: 100,
  height: 200,
};
let { height, width, title } = options;
alert(height); // 200

/* : */
let { width: w, height: h, title: t } = options;
alert(w); // 100

/* = */
let opt1 = { titleOpt1: "New menu" };
let { widthOpt1 = 100, heightOpt1 = 200, titleOpt1 } = opt1;
alert(titleOpt1);
alert(widthOpt1); // default:100

/* ... */
let opt2 = {
  prop1: "Menu",
  prop2: 200,
  prop3: 100,
};
let { prop1, ...others } = opt2;
alert(others.prop2); // 200

/* nested desctructuring */
let opt3 = {
  size: {
    widthOpt3: 100,
    heightOpt3: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

let {
  size: {
    widthOpt3,
    heightOpt3,
  },

  items: [item1, item2],

  titleOpt3 = "Menu", // default
} = opt3;

alert(titleOpt3); // Menu
alert(widthOpt3); // 100
alert(heightOpt3); // 200
alert(item1); // Cake
alert(item2); // Donut

/* Smart function parameters */
let obj = {
  titleObj: "My menu",
  itemsObj: ["Item1", "Item2"],
};

function showMenu({
  titleObj = "Untitled",
  itemsObj = [],
  width = 200,
  height = 100,
}) {
  alert(`${titleObj} ${width} ${height}`); // My menu 200 100
  alert(itemsObj); // Item1,Item2
}

showMenu(obj);
