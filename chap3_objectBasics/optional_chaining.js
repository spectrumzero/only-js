"use strict";
/* ?. */
let user = {
  isAdmin: true,
};

alert(user.isAdmin.name?.age); // undefined

/* ?.() */
let userAdmin = {
  admin() {
    alert("I am admin");
  },
};

let userGuest = {};

userAdmin.admin?.();
userGuest.admin?.(); // nothing happened.

/* .[] */
let key = "firstName";

let user1 = {
  firstName: "John",
};

let user2 = null;

alert(user1?.[key]);
alert(user2?.[key]); // undefined

/* a use case: delete */
delete user1?.firstName;
