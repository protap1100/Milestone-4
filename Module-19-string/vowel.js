const country = "i love bangladesh";
let vowel = ['a','e','i','o','u'];
let count = 0;
const vowels = [];

for(let i = 0 ; i < country.length; i++){
    if( vowel.includes(country[i]) ){
        // count.push(country[i]); for finding all vowel in country
        count++;
        vowels.push(country[i])
    }
}
// console.log(vowels.length)

// console.log(count,vowels);