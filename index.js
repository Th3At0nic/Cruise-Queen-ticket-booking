// Tickets and costs calculation javascript
function onlineTicket(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + '-input');
    const ticketInputNum = parseInt(ticketInput.value);
    let ticketQuantity = 0;
    if (isIncrease == true) {
        ticketQuantity = ticketInputNum + 1;
    }
    if (isIncrease == false && ticketInputNum > 0) {
        ticketQuantity = ticketInputNum - 1;
    }
    ticketInput.value = ticketQuantity;

    let totalTicketPrice = 0;
    if (ticket == 'first-class') {
        totalTicketPrice = 150 * ticketInput.value;
    }
    if (ticket == 'economy') {
        totalTicketPrice = 100 * ticketInput.value;
    }
    document.getElementById(ticket + '-perPrice').innerText = totalTicketPrice;

    calculateSubtotal();
}

// Total costs of tickets and other payments
function calculateSubtotal() {
    const firstClassInput = document.getElementById("first-class-input");
    const firstClassInputNum = parseInt(firstClassInput.value);

    const economyInput = document.getElementById("economy-input");
    const economyInputNum = parseInt(economyInput.value);

    const subtotal = firstClassInputNum * 150 + economyInputNum * 100;
    document.getElementById("sub-total").innerText = subtotal;

    const tax = subtotal * 0.1;
    document.getElementById("tax-amount").innerText = tax;
    const total = subtotal + tax;
    document.getElementById("grand-total").innerText = total;
}

// booking confirmation button.
function bookNowBTn() {
    alert("Hi there, Thanks for travelling with us. We have received your booking confirmation. Happy journey!");
}