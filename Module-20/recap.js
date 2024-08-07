// function add(price1,price2){
//     const total = price1 + price2;
//     return total;
// }

// add(10,30);

// console.log(add(10,20));

function doMath(num1,num2){
    const sum = num1 + num2;
    const sub = num1 - num2;
    const mul = sub * sum;
    const div = mul / 2;
    return div;
}

const output = doMath(10,5);

console.log(output)


function isEven(number){
    if(number % 2 ===0){
        return true;
    }else{
        return false;
    }
}

const result = isEven(24);
console.log(result);