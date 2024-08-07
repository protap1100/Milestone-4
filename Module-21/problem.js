// problem no 1
// function celsiusToFahrenheit(c) {
//   const f = c * (9 / 5) + 32;
//   return f;
// }

// const fahrenheit = celsiusToFahrenheit(36);
// console.log(fahrenheit);

// function fahrenheitToCelsius(f) {
//   const c = ((f - 32) * 5) / 9;
//   return c;
// }

// const celsius = fahrenheitToCelsius(96.8);
// console.log(celsius);

// Problem no 2

// const numbers = [
//   5, 6, 11, 12, 98, 5, 5, 6, 11, 12, 98, 5, 5, 6, 11, 12, 98, 5, 5, 6, 11, 12,
//   98, 5,
// ];

// function duplicate(numbers, find) {
//   let count = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === find) {
//       count++;
//     }
//   }

//   return count;
// }

// const find = 5;
// console.log(duplicate(numbers, find));

// problem no 3

// function findVowel(sentence,vowel){
//     let count = 0;
//     for( let i = 0; i < sentence.length; i++){
//         if(vowel.includes(sentence[i].toLowerCase())){
//             count++;
//         }
//     }
//     return count;
// }

// const sentence = "fahrenheitToCelsius is not defined";
// const vowel = ['a','e','i','o','u'];
// console.log(findVowel(sentence,vowel));


// problem no 4 


function findLength(str){
    const word = str.split(' ');
    let longestWord = '';

    for(let i = 0; i < word.length; i++){
        if(word[i].length > longestWord.length){
            longestWord=word[i];
        }
    }
    return longestWord;
}

const inputString = `const inputString = I am learning Programming to become a programmer
const longestWord = findLongestWord(inputString)`;

const keep = findLength(inputString);
console.log(`The Largest Word is: ${keep}`)

// problem no5 

// console.log(Math.floor(Math.random() *200));
