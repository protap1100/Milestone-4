const intro = 'my name is protap biswas';
let reverse = '';

for (const letter of intro){
    // console.log(letter);
    // reverse  = letter + reverse;
}

// console.log(reverse);

for (let i = 0; i < intro.length ; i++){
    // console.log(intro[i]);
    // reverse = intro + reverse;
    const letter = intro[i];
    reverse  = letter + reverse;
}

// console.log(reverse);
// console.log(reverse)

const reversed = intro.split('').reverse().join('');
// console.log(reversed);



for(let i =0; i < intro.length ; i++){
    const letter = intro[i];
    // console.log(letter)
    reverse = letter + reverse
}

console.log(reverse)
