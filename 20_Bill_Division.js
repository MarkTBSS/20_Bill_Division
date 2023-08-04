function bonAppetit(bill, k, b) {
    var resturantCharge = 0
    var halfInRestuarant = 0
    var realChargeInCarHalf = 0
    var luckKai = 0

    resturantCharge = bill.reduce((x, y) => x + y, 0)
    //console.log("resturantCharge : " + resturantCharge)
    halfInRestuarant = resturantCharge / 2
    //console.log("halfInRestuarant : " + halfInRestuarant)
    
    bill.splice(k, 1)
    //console.log("bill : " + bill)
    realChargeInCarHalf = bill.reduce((x, y) => x + y, 0)
    realChargeInCarHalf = realChargeInCarHalf / 2
    //console.log("realChargeInCarHalf : " + realChargeInCarHalf)

    if (b !== realChargeInCarHalf) {
        luckKai = b - realChargeInCarHalf
        console.log(luckKai)
    }
    
    if (b === realChargeInCarHalf) {
        console.log("Bon Appetit")
    }
}

var bill = [3, 10, 2, 9]
var k = 1
var b = 7

bonAppetit(bill, k, b)