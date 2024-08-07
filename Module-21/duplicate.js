function removeDuplicate(number){
    
    const unique = [];
    // const duplicate = [];
    for(const item of number){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
    
}



const remove = removeDuplicate([2,3,4,5,6,7,8,9,8,7,6,4,3,21]);

console.log(remove);
