function deleteInvalids(array) {

    let onlyNumber = [];
   
    if(Array.isArray(array)){
        for(const arr of array){
            if( typeof arr === 'number' && !isNaN(arr)){
                onlyNumber.push(arr);
            }
        }
        return onlyNumber;
    }else{
        return 'Invalid Array';
    }
    
}

const checking = deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]);
console.log(checking);