"use strict";

// Customer name (string)
const customer_name = prompt("Sir, please enter your name:", "Name");

// Ticket count (number)
const ticket_count = Number(prompt("Enter ticket quantity:", "0"));

// Ticket price (constant)
const TICKET_PRICE = 20;

// Total amount
const total_amount = ticket_count * TICKET_PRICE;

// Booking summary
console.log(`Booking Summary:`);
console.log(`Customer: ${customer_name}`);
console.log(`Tickets: ${ticket_count}`);
console.log(`Price per ticket: Rs.${TICKET_PRICE}`);
console.log(`Total amount: Rs.${total_amount}`);
