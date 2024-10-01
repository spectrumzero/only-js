// the optional chaining `?.` stops the evaluation if the value before `?.` is undefined or null and returns undefined.
let user = {
  isAdmin: true,
};
alert(user.isAdmin);
// alert(user.isAdmin.name.age); // error happened

// NOTE: `?.` should only be put right after the value which you are not sure whether it is defined.

alert(user.isAdmin.name?.age); // undefined

// short-circuiting effects
user = null;
let x = 0;
user?.sayHi(x++);
alert(x);

// NOTE: optional chaining is not an operator, but a special syntax structure
// more use cases: .(); .[]

// .()
let userAdmin = {
  admin() {
    alert("I am admin");
  },
};

let userGuest = {};
userAdmin.admin?.();
userGuest.admin?.(); // nothing happened.

// .[]
let key = "firstName";
let user1 = {
  firstName: "John",
};
let user2 = null;
alert(user1?.[key]);
alert(user2?.[key]); // undefined

// delete
delete user1?.firstName;

// WARNING: ?. cannt be used as lhz like:
// user?.name = "John";--it is not safe.
