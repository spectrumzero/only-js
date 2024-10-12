"use strict";
/* || */
alert(1 || 0); // 1
alert(null || undefined || 0); // 0

// a practical usage:
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
alert(firstName || lastName || nickName || "Anonymous"); // "SuperCoder";

/* && */
alert(1 && 2 && null); // null
alert(1 && 2 && 3); // 3

/* ! */
alert(!true); // false
alert(!0); // true
alert(!!"nfajlfj"); // true (do the same thing as Boolean() function)

/* ?? */
let user;
alert(user ?? "Anonymous"); // "Anonymous"
user = "John";
alert(user ?? "Anonymous"); // "John"
