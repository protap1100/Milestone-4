const mobile = {
    brand: 'Samsung',
    price: 25000,
    color: 'black',
    camera: '12Mp',
    isNew:false,
}

for(const key in mobile){
    console.log('Keys Of Mobile Are:' + key);
    console.log('Values Of Mobile Are:' + mobile[key]);
}