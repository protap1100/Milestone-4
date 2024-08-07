// console.log('hello world');

// for (let i =50; i > 30; i--){
//     console.log(i);
// }

function myFunction(){

    let i = 500;
    let total = 0;
    let total1 = 0;
    let total2 = 0;
    while( i > 30 ){
        if( i % 10 === 0){
            if( i % 5 === 0 ){
                if( i % 3 === 0 ){
                    console.log('Number That Divided By:3,5 and 10: ' + i);
                    total = total + i;
                  
                }
                console.log('Number That Divided By:5 and 10: ' + i);
                total1 = total1 + i;
               
            }
            console.log('Number That Divided By:10: ' + i);
            total2 = total2 + i;
            
        }
        i--;
    }
    
    console.log('sum of number that divided by 3,5,10:'+total );
    console.log('sum of number That Divided By:5 and 10:'+total1 );
    console.log('sum of Number That Divided By:10:'+total2 );
}

myFunction();