const offers = [
    "50% OFF on First Order",
    "Free Delivery Above ₹199",
    "Buy 1 Get 1 Free",
    "Flat ₹100 Cashback"
];

let index = 0;

setInterval(() => {
    index++;

    if(index >= offers.length){
        index = 0;
    }

    document.getElementById("offerText").innerText =
    offers[index];

}, 3000);