"use strict";
/* 1, String */
let str = "Single quotes are ok too";
let phrase = `can embed another ${str}`;

/* 2, Number */
str = 134;

/* 3, Bigint */
const bigInt = 1234567890123456789012345678901234567890n;

/* 4, Boolean */
let nameFieldChecked = true;

/* 5, null(unknown) */
let age = null;

/* 6, undefined */
let name;

/* 7, Object: used to store collections of data and more complex entities. NOTE: it isnt primitive */
/* 8, Symbol: used to create unique identifiers for objects. */

/* the `typeof` operator returns the type of the operand: */
typeof 0; // == typeof(0);
