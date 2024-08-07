function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }else{
        return false;
    }
}

const check = isLeapYear(2008);
console.log(check);