// const disha = 87;
// const salman = 98;

// function max(a,b){
//     if(a < b){
//         return b;
//     }else{
//         return a;
//     }
// }

// const maxNumber = max(56,21);

// console.log("Max Number is:", maxNumber);

const jim = 90;
const tim = 12;
const kim = 23;

function getMax(a,b,c){
    if(a >= b && a >= c){
        return a;
    }else if(a <= b && b >= c){
        return b;
    }else if(c >= a && c >= b){
        return c;
    }
}

const max = getMax(jim,tim,kim);
console.log(max);