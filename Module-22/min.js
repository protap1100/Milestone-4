// const prices = [10000,24000,50000,23000,23000,2300,21000];

// function expensivePhone(numbers){
//     let cheap = numbers[0];

//     for( const number of numbers){
//         if( number < cheap){
//             cheap = number;
//         }
//     }
//     return cheap;

// }

// const cheapPhone = expensivePhone(prices);
// console.log(cheapPhone);

const mobiles = [
  { name: "Samsung", price: 20000, camera: "12mp", color: "Black" },
  { name: "Xiaomi", price: 23000, camera: "10mp", color: "Blue" },
  { name: "Apple", price: 150000, camera: "4mp", color: "Gray" },
  { name: "Vivo", price: 250000, camera: "6mp", color: "White" },
  { name: "Walton", price: 10000, camera: "8mp", color: "NavyBlue" },
];

function expensivePhone(numbers) {
  let cheap = numbers[0];

  for (const mobile of numbers) {
    if (mobile.color.length > cheap.color.length) {
      cheap = mobile;
    }
  }
  return cheap;
}

const cheapPhone = expensivePhone(mobiles);
console.log(cheapPhone);
