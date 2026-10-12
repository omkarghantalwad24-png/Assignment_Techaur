const TICKET_PRICE = 20;

// qty string to number
let qty = Number(prompt("Enter qty of ticket", "20"));

// discount logic
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


let select_payment_option = Number(prompt("1.cash, 2.online, 3.card, 4.emi", "2"));

let banned = false;
let eligibility = (iseligible && !banned && select_payment_option !== 4) ? "Eligible" : "Not Eligible";

alert("Subtotal: " + subtotal +
      "\nDiscount: " + discount_amount +
      "\nFinal Amount: " + final_amount +
      "\nEligibility: " + eligibility);
