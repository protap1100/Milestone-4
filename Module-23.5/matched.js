const products =[
    {id: 1 , name:'i Phone', price: 120000},
    {id: 2 , name:'Mackbook lite', price: 120000},
    {id: 3 , name:'Nokia old phonr', price: 120000},
    {id: 4 , name:'samsumg phone', price: 120000},
    {id: 5 , name:'asus vivobook 15 pro', price: 120000},
    {id: 6 , name:'lenovo lite 12', price: 120000},
    {id: 7 , name:'Symphony phone', price: 120000},
    {id: 8 , name:'Xiomi Phone', price: 120000},
    {id: 9 , name:'Relame phone 3 pro', price: 120000},
]


function findPhone(product,search){
    let phoneName = [];

    for( const product of products){
       if(product.name.toLowerCase().includes(search.toLowerCase())){
        phoneName.push(product);
       }
    }
    return phoneName;
}


const phone = findPhone(products,'Phone'); 
console.log(phone);