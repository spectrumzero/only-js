//
window.alert("Hello");

//
var gVar = 5;
alert(window.gVar);

//
window.currentUser = {
  name: "John",
};
alert(currentUser.name);

//
if (!window.Promise) {
  alert("Your browser is really old!");
}
