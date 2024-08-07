// function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
//     const chairWood = 5;
//     const tableWood = 10;
//     const bedWood = 50;

//     const totalChairWood = chairWood * chairQuantity;
//     const totalTableWood = tableWood * tableQuantity;
//     const totalBedWood = bedWood * bedQuantity;

//     const totalWoodNeeded = totalChairWood + totalTableWood + totalBedWood;
//     return totalWoodNeeded;
// }

// const totalWood = woodCalculator(10,5,3);
// console.log('Total Wood Needed:' + totalWood);


function shoppingCart(shirtQuantity,pantQuantity,shoesQuantity){
    const shirt = 700;
    const pant = 600;
    const shoes = 800;

    const totalShirtPrice = shirt * shirtQuantity;
    const totalPantPrice = pant * pantQuantity;
    const totalShoesPrice = shoes * shoesQuantity;

    const totalShoppingPrice = totalShirtPrice + totalPantPrice + totalShoesPrice;
    return totalShoppingPrice;
}

const totalPrice = shoppingCart(10,5,3);
console.log('Total Taka Needed:' + totalPrice);