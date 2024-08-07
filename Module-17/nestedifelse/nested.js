const student1Mark = 100;

if( student1Mark  > 80 && student1Mark <= 100){
    if(student1Mark > 90 && student1Mark <= 100){
        if( student1Mark > 95 && student1Mark <= 100){
            if(student1Mark == 100 ){
                console.log("You are a Board Topper");
            }else{
                console.log('You Got Star');
            }
        }else{
            console.log("You got Golden A+");
        }
    }else{
        console.log('You Got A+');
    }
}else if( student1Mark > 70 && student1Mark < 79 ){
    console.log('You Got A');
}else if( student1Mark > 60 && student1Mark < 69){
    console.log('You Got A-');
}else if( student1Mark > 50 && student1Mark < 59){
    console.log('You Got B');
}else if( student1Mark > 40 && student1Mark < 49){
    console.log('You Got C');
}else if( student1Mark > 33 && student1Mark < 39){
    console.log('You Got D');
}else{
    console.log('you Failed');
}