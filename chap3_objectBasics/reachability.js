"use strict";
let user = {
  name: "marry",
};

let admin = user;
/* {name: "marry"} is still reachable via admin global variable, so it must stay in memory. */
user = null;

function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    grandfather: man,
    grandmother: woman,
  };
}

let family = marry({ name: "John" }, { name: "Ann" });
delete family.grandfather;
delete family.grandmother.husband;
/* {name:"John"} is unreachable because no root can reach it after all references to it are removed. it becomes isolated and is garbage collected. */
