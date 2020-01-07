const regularPurchase = 3000;
const regularPurchasePercent = 0.01;
const cashbackLimit = 3000;
let cashback = regularPurchase * regularPurchasePercent;
if (cashback > cashbackLimit) {
    cashback = cashbackLimit
}
console.log(cashback);