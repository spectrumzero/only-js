"use strict";
/* how to copy? */

let user = {
  name: "John",
  age: 30,
};

let clone_1 = {};
for (let key in user) {
  clone_1[key] = user[key];
}

// or: Object.assign(dest, [src1, src2, src3...])
let clone_2 = {};
Object.assign(clone_2, user);

/* nested cloning: how to copy sizes here? */

let newUser = {
  // non-object property: by copy
  name: "Mary",
  // object property: by reference
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone_newUser = structuredClone(newUser);
alert(++clone_newUser.sizes.width); // 51
alert(newUser.sizes.width); // 50
