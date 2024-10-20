"use strict";

/* basics */
let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,
};

let json = JSON.stringify(student);
alert(typeof json); // string
alert(json);

/* support primitives */
alert(JSON.stringify(1));
alert(JSON.stringify(`test`));
alert(JSON.stringify(true)); // true

alert(JSON.stringify([1, 2, 3])); // [1,2,3]

/* ignore: */
let user = {
  sayHi() {
    alert("hello");
  },
  [Symbol("id")]: 123,
  something: undefined,
};
alert(JSON.stringify(user)); // {}

/* for nested obj */
let meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"],
  },
};
alert(JSON.stringify(meetup));

/* toJSON */
let room = {
  number: 23,
  toJSON() {
    return this.number + 2;
  },
};
alert(JSON.stringify(room)); // 25

/* JSON.parse */
let numbers = "[0,1,2,3]";
numbers = JSON.parse(numbers);
alert(numbers[1]);

let userData =
  '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let usr = JSON.parse(userData);
alert(usr.friends[2]); // 2

/* reviver */
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

meetup = JSON.parse(str, function (key, value) {
  if (key == "date") return new Date(value);
  return value;
});

alert(meetup.date.getDate());

// WARNING:Circular Reference
