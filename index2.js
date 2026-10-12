"use strict";

let customer_name = prompt("Please enter your name", "name");

// number (string first, then convert)
let age = prompt("Enter your age", "20");
age = Number(age);

// boolean
let Isminor = age > 18 ? false : true;

let gender = prompt("Enter your gender", "male");

const TICKET_PRICE = 20;
let qty = Number(prompt("Enter a qty", "20"));
let total_price = TICKET_PRICE * qty;

// Print results using template literals
console.log(`Customer: ${typeof customer_name}`);
console.log(`Age: ${typeof age}`);
console.log(`Is Minor: ${typeof Isminor}`);
console.log(`Gender: ${typeof gender}`);
console.log(`Tickets: ${typeof qty}`);
console.log(`Total Price: Rs.${typeof total_price}`);
