// task 1
// for( let i = 0; i <= 60; i++){
//     console.log(i+'.I will invest at least 6 hrs every single day for next 60 days!');
// }

// task 2
// for ( let i = 60; i < 80; i++){
//     if( i % 2 !== 0 ){
//         console.log(i);
//     }
// }

// task 3 

// for ( let i = 78; i < 98; i++){
//     if( i % 2 === 0 ){
//         console.log(i);
//     }
// }

// task 4

// subtask 1 

// for(let i =90; i < 129; i++  ){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// sub task 2

// let total = 0;

// for (let i = 51 ; i <= 85; i++){
//     if( i % 2 === 0 ){
//         console.log(i)
//         total = total + i;
//     }
// }

// console.log('total number is :' + total);

// task 5

// for ( let i = 0; i < 10; i++){
//     console.log(9 + 'x' + i + '=' + 9 * + i );
// }


// task6
// Countdown from 81 to 65

// function myFunction(){
//     for (let i = 81; i >= 65; i--) {
//         setTimeout(() => {
//             console.log(`Time left: ${i} seconds`);
//         },(81 - i) * 1000);
        
//       }
// }

// myFunction();
 

// while loop task

// task 1 

// let i = 0;

// while( i <= 60){
//     console.log(i+'.I will invest at least 6 hrs every single day for next 60 days!');
//     i++;
// }
  


// task 2 

// sub task 1 

// let i = 60 ;

// while ( i < 100){
//     if( i % 2 !== 0 ){
//         console.log(i);
//     }

//     i++;
// }

// task 2

// let i = 78 ;

// while ( i < 98){
//     if( i % 2 === 0 ){
//         console.log(i);
//     }

//     i++;
// }

// task 3

// subtask 1

// let i = 81 ;
// let total = 0;

// while ( i < 130){
//     if( i % 2 !== 0 ){
//         console.log(i);
//         total = total + i;
//     }
//     i++;
// }

// console.log(total);

// subtask 2 

// let i = 206 ;
// let total = 0;

// while ( i < 311){
//     if( i % 2 === 0 ){
//         console.log(i);
//         total = total + i;
//     }
//     i++;
// }

// console.log(total);

// let i = 0;

// while( i <= 10 ){
//     console.log(5 + 'x' + i + '=' + 5 * + i );
//     i++;
// }

// let i = 21;

// while (i >= 15) {
//   console.log(`Time left: ${i} seconds`);
//   i--;
// }
// console.log("Countdown complete!");

// skip number

// for( let i = 55; i < 85; i++ ){
//     if( i % 2 !== 0 ){
//         if( i % 5 === 0 ){
//             continue;
//         }
//         console.log(i)
//     }
// }

// chatgpt

// for (let i = 55; i < 85; i++) {
//     if (i % 2 !== 0 && i % 5 !== 0) {
//         console.log(i);
//     } else {
//         continue;
//     }
// }

// task 1 

// for ( let i = 0 ; i <= 40; i++){
//     if( i % 2 !== 0){
//         continue;
//     }else{
//         console.log(i);
//     }
// }

// for( let i = 0; i < 200; i++){
//     console.log(i);
//     if( i >= 100 ){
//       break;
//     }
// }

// let total = 0;

// for( let i = 1; ; i++){
//     total = total + i;
//     if( total >= 100 ){
//         console.log(total)
//         break;
//     }
// }

for ( let i = 0 ; i < 100 ; i++){
    if (i % 4 === 0) {
        console.log(i);
    }
}

