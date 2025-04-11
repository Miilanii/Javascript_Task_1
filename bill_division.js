
function bonAppetit(bill, k, b) {
    const totalCost = bill.reduce((sum, cost, index) => index !== k ? sum + cost : sum, 0);
    const annaShare = totalCost / 2;

    if (b === annaShare) {
        console.log("Bon Appetit");
    } else {
        console.log(b - annaShare);
    }
}
