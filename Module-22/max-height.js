const height =[54,65,76,56,44,55,68,70];

// function maxHeight(numbers){
//     let max = numbers[0];
//     for(const num of numbers){
//         if(num > max){
//             max = num;
//         }
//     }
//     return max;
// }

// console.log(maxHeight(height));

function minHeight(numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

console.log(minHeight(height));


