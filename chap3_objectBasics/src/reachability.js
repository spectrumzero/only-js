// NOTE:
// Garbage collector of JavaScript will junk the unreachable data and free the memory automatically.

// {name: "John"} is still reachable via admin global variable, so it must stay in memory.
let user = {
  name: "John",
};

let admin = user;
user = null;

// {name:"John"} is unreachable because no root can reach it after all references to it are removed. it becomes isolated and is garbage collected.
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
