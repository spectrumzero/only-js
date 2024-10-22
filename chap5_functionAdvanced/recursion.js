/* Recursive traversals */
let company = {
  sales: [{ name: "John", salary: 1000 }, { name: "Alice", salary: 1600 }],
  development: {
    sites: [{ name: "Peter", salary: 2000 }, { name: "Alex", salary: 1800 }],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function sumSalries(department) {
  if (Array.isArray(department)) {
    return department.reduce((accum, item) => accum + item.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalries(subdep);
    }

    return sum;
  }
}

alert(sumSalries(company));

/* Linked list (recursively defined) */
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

alert(list.next.value);

// unshift
list = { value: "new item", next: list };
alert(list.value);
