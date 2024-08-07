const items = 50;

function discount(product){
    const first20Price = 100;
    const first40Price = 80;
    const first60price = 60;

    if( product < 20 ){
        const price = product * 100;
        return price;
    }else if(product <= 40){
        const first20Total = first20Price * 20;
        const remainingProduct = product - 20;
        const remainingTotal = remainingProduct * first40Price; 
        const totalPrice = remainingTotal + first20Total;
        return totalPrice;
    }else{
        const first20Total = 20 * first20Price;
        const first40Total =  20 * first40Price;
        const remainingProduct = product - 40;  
        const remainingTotal = remainingProduct * first60price;
        const grandTotal = first20Total + first40Total + remainingTotal;
        return grandTotal;
    }
}

const bouns = discount(items);
console.log(bouns);