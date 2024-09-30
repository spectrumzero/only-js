// NOTE:
// an object variable stores not the “object value”, but a “reference” (address in memory) for the value

// by reference
let user = {
  name: "John",
  age: 30,
};

let admin = user;

admin.name = "Pete"; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference

// how to copy?
let clone_1 = {};
for (let key in user) {
  clone_1[key] = user[key];
}
// or: Object.assign(dest, [src1, src2, src3...])
let clone_2 = {};
Object.assign(clone_2, user);
alert(clone_2.age);

Object.assign(clone_2, { age: 18 }); // overwritten
alert(clone_2.age);

// nested cloning: how to copy sizes here?
let newUser = {
  // non-object property: by copy
  name: "Mary",
  // object property: by reference
  sizes: {
    height: 182,
    width: 50,
  },
};
let clone_new = Object.assign({}, newUser);
alert(newUser.sizes === clone_new.sizes); // true, share the same address
// So how to copy sizes firmly here?
let clone_nest = structuredClone(newUser);
alert(++clone_nest.sizes.width); // 51
alert(newUser.sizes.width); // 50

// side effect
const user_side = {
  name: "John",
};

user_side.name = "Pete"; // the value is modifiable, while the address of user_side is unmodifiable

alert(user_side.name); // Pete
