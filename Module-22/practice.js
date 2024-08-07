// const heights = [167, 190, 120, 165, 137];

// function getHeight(heights){
//     let lowestNumber = heights[0];

//     for(const height of heights){
//        if(lowestNumber > height){
//          lowestNumber = height;
//        }
//     }
//     return lowestNumber;

// }

// const result = getHeight(heights);
// console.log(result);


// const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// function getLowestLength(friends){
//     let lowestLength = friends[0].length;
//     let low ="";
//         for(const friend of friends){
//             if(lowestLength> friend.length){
//                 lowestLength= friend.length
//                 low = friend;
//             }
//         }
//         return low;
// }

// console.log(getLowestLength(friends));


// const mobile = [
//     {name:'laptop', price:35000},
//     {name:'tablet', price:15000},
//     {name:'mobile', price:20000}
// ]


// function totalBudget(mobiles){
//     let total = 0;
//     for( const mobile of mobiles){
//         total = total + mobile.price;
//     }
//     return total;
// }


// const totalAmount = totalBudget(mobile);
// console.log(totalAmount);


// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];


// function getAverage(){
//     let total = 0;
//     let totalProduct =phones.length;

//     for(const mobile of phones){
//         total = total + mobile.price;
//     }   
//     const average = total / totalProduct;
//     return Math.floor(average);
// }


// console.log(getAverage());

// const employees = [
//     { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//     { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//     { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//     { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
// ];


// function getSalaries(a){
//     let totalSalaries = 0;
//     for(const b of a ){
//         const totalAmountForEach = (b.experience * b.increment) + b.starting;
//         totalSalaries = totalSalaries + totalAmountForEach;
//     }
//     return totalSalaries;
// }


// const result = getSalaries(employees);

// console.log(result)