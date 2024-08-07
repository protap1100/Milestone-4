// const fruits = ['Mango','Lichi','Apple','Grape','Banana','Jackfruit'];
// for(let i = fruits.length - 1; i >= 0 ; i--){
//     console.log(fruits[i]);
// }


// sum of an array
// const nums = [10,20,30,40,50,60];
// let total = 0;

// for (let i = 0; i < nums.length ; i++){
//     let curNum = nums[i];
//     total = total + curNum;
// }

// console.log(total);


// array index  swap

// const nums = [10,20,30,40,50,60];

// let temp = nums[5];

// nums[5] = nums[1];

// nums[1]= temp;

// console.log(nums);


// find index

// const fruits = ['Mango','Lichi','Apple','Grape','Banana','Jackfruit'];

// const target = 'ajj';
// let foundIndex = -1;

// for ( let i = 0; i < fruits.length ; i++){
//     const currentFruit  = fruits[i];
//     if(currentFruit == target){
//         foundIndex = i;
//     }
// }
// if(foundIndex > -1){
//     console.log(foundIndex, "founded");
// }else{
//     console.log('no founded')
// }



// Find Max/Min Number in Array

// const nums = [10,20,30,40,50,60];

// let maxNum = nums[0];
// let minNum = nums[0];

// for ( let i = 0; i < nums.length; i++){
//     const currentNumber = nums[i];
    
//     if(maxNum < currentNumber){
//         maxNum =currentNumber;
//     }

//     if(minNum > currentNumber){
//         minNum =currentNumber;
//     }
// }

// console.log(minNum);
// console.log(maxNum);



const number = [200,405,403,230,42,30,405,594,33,4,5];

let lowerNumber = 0;
let count = 0;

for( let i = 0; i < number.length; i++ ){
    if( number[i] > 200){
        lowerNumber = number[i];
        count++;
        console.log('higher than 200 number are :' + lowerNumber);
    }
}

console.log('number of number higher than 200 are :' + count);