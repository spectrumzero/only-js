/* no this */
let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(
      (student) => alert(this.title + ": " + student),
    );

    // this.students.forEach(function (student) {
    //   // Error: Cannot read property 'title' of undefined
    //   alert(this.title + ": " + student);
    // });
  },
};

group.showList();

/* no arguments */
function defer(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function sayHi(who) {
  alert("Hello, " + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John");
