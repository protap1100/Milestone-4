function evenSized(str){
    const size = str.length;
    if(size % 2 === 0){
        return true;
    }else{
        return false;
    }
}

const result = evenSized("dhaka");

console.log(result);