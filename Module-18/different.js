
let total = 0;

for( let i = 0; i < 30; i++ ){
    if(i%2 !== 1){
        total = total + i;
        console.log('even number is:'+ i);
    }
}

console.log(total);