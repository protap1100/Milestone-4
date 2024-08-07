const products = [
    {name: 'shampoo', price:400, qunatity: 4},
    {name: 'chiruni', price:150, qunatity: 2},
    {name: 'shirt', price:1200, qunatity: 3},
    {name: 'pant', price:1000,  qunatity: 2}
];

function totalPrice(a){
    let sum = 0;
    for(const items of a){
        sum = sum + items.price;
    }
    return sum;
}

const total = totalPrice(products);
console.log('Total Product Price Is:' + total);

function totalProduct(a){
    let sum = 0;
    for(const items of a){
        sum = sum + items.qunatity;
    }
    return sum;
}

const totalItems = totalProduct(products);
console.log("Total Items Is:"+ totalItems);