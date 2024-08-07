function sumOfArray(sum){
    let odd = [];

    for( const number of sum ){
        if(number % 2 !== 0 ){
            odd.push(number);
        }
    }

    // return odd; 

    let oddTotal = 0;

    for(const add of odd){
        oddTotal = oddTotal + add;
    }

    return oddTotal;
}

const answer = sumOfArray([20,40,30,50,60,50,23,43]);

console.log(answer);

