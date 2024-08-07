function sumOfArray(sum){
    let total = 0;

    for( const numberSum of sum ){
        total = numberSum + total;
    }
    const average = total / sum.length;

    return average;

    // for(let i = 0; i < sum.length; i++){
    //     total = total + sum[i];
    // }
    // return total; 

    
}

const answer = sumOfArray([20,40,50,60,50]);

console.log(answer);

