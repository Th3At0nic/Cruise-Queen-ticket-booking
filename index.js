// document.getElementById("first-minus-btn").addEventListener("click", function () {
//     firstClassTicket(false);
// });
// // first class plus button event handler
// document.getElementById("first-plus-btn").addEventListener("click", function () {
//     firstClassTicket(true);
// });

function firstClassTicket(isIncrease) {
    const firstClassInput = document.getElementById("first-class-input");
    const firstClassInputNum = parseInt(firstClassInput.value);
    let firstClassTicketQuantity = 0;
    if (isIncrease == true) {
        firstClassTicketQuantity = firstClassInputNum + 1;
    }
    if (isIncrease == false && firstClassInputNum > 0) {
        firstClassTicketQuantity = firstClassInputNum - 1;
    }
    // const firstClassInputIncrease = (firstClassInputNum + 1);
    firstClassInput.value = firstClassTicketQuantity;

    const firstClassPerPrice = document.getElementById("first-class-perPrice");
    const firstClassPerPriceNum = parseFloat(firstClassPerPrice.innerText);
    firstClassPerPrice.innerText = 150 * firstClassInput.value;
}




// economy minus button event handler
// document.getElementById("economy-minus-btn").addEventListener("click", function () {
//     economyTicket(false);
// })
// // economy plus button event handler
// document.getElementById("economy-plus-btn").addEventListener("click", function () {
//     economyTicket(true);
// });

function economyTicket(isIncrease) {
    const economyInput = document.getElementById("economy-input");
    const economyInputNum = parseInt(economyInput.value);
    let economyTicketQuantity = 0;
    if (isIncrease == true) {
        economyTicketQuantity = economyInputNum + 1;
    }
    if (isIncrease == false && economyInputNum > 0) {
        economyTicketQuantity = economyInputNum - 1;
    }
    economyInput.value = economyTicketQuantity;

    const economyPerPrice = document.getElementById("economy-perPrice");
    const economyPerPriceNum = parseFloat(economyPerPrice.innerText);
    economyPerPrice.innerText = 100 * economyInput.value;
}