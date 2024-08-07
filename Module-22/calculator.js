function add (a,b){
    return a + b;
}
function subs (a,b){
    return a - b;
}
function mul (a,b){
    return a * b;
}
function div (a,b){
    return a / b;
}

function calculator(num1,num2, operation){
    if(typeof num1 === "number" && typeof num2 === "number"){
        if(operation === 'add'){
            const result = add(num1,num2);
            return result;
        }else if(operation === 'subs'){
            const result = subs(num1,num2);
            return result;
        }else if(operation === 'mul'){
            const result = mul(num1,num2);
            return result;
        }else if(operation === 'div'){
           const result = div(num1,num2);
           return result;
        }else{
            return 'baal';
        }
    }else{
     return "input e number den";
    }
}


const final = calculator(20,10, 'subs');

console.log(final);


