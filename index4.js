const TICKET_PRICE = 20;
let customer_name = prompt("Sir, please enter your name", "Name");

let qty = Number(prompt("Enter qty of ticket", "20"));

let discount = 0;
if (qty > 50) {
  discount = 0.7;
} else if (qty > 20 && qty <= 50) {
  discount = 0.4;
} else if (qty > 10) {
  discount = 0.2;
} else {
  discount = 0;
}

let subtotal = qty * TICKET_PRICE;
let discount_amount = subtotal * discount;
let final_amount = subtotal - discount_amount;

let age = Number(prompt("Enter your age", "20"));
let iseligible = age > 18 ? 1 : 0;

let select_payment_option = Number(
  prompt("1.cash, 2.online, 3.card, 4.emi", "2"),
);
let payment_status = "";
switch (select_payment_option) {
  case 1:
    payment_status = "Cash";
    break;
  case 2:
    payment_status = "Online";
    break;
  case 3:
    payment_status = "Card";
    break;
  case 4:
    payment_status = "EMI";
    break;
  default:
    payment_status = "Unknown";
}

let banned = false;
let eligibility =
  iseligible && !banned && select_payment_option !== 4
    ? "Eligible"
    : "Not Eligible";

alert(
  `Customer Name: ${customer_name}\n` +
    `Age: ${age}\n` +
    `Subtotal: ${subtotal}\n` +
    `Discount: ${discount * 100}%\n` +
    `Discount Amount: ${discount_amount}\n` +
    `Final Amount: ${final_amount}\n` +
    `Payment Status: ${payment_status}\n` +
    `Eligibility: ${eligibility}`,
);
