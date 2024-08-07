// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };


// const physicsMark = student.physics.marks;

// console.log(physicsMark);
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let count = 0;

for(const number in student){
    if( student.hasOwnProperty(number)){
        count++;
    }
}

console.log(count);

// const sentence = 'i m Protap aaaaa';

// const vowel = 'a';

// let count = 0;

// for(let i = 0; i < sentence.length ; i++){
//     if( vowel === sentence[i] ){
//         count++
//     }   
// }

// console.log(count);