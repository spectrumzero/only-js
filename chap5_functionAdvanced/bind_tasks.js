/* Task 1: Fix a function that loses "this" */
function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "John",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// or (sometimes)
askPassword(() => user.loginOk(), () => user.loginFail());

/* Task 2: Partial application for login */
function askPassword2(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user2 = {
  name: "Merry",

  login(result) {
    alert(this.name + (result ? " logged in" : " failed to log in"));
  },
};

askPassword2(user2.login.bind(user2, true), user2.login.bind(user2, false));

// or
askPassword2(() => user2.login(true), () => user2.login(false));
