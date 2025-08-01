const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}

// for of : Array te use hoy
// for in : object a use hoy

for(const prop in mobile){
    // console.log(prop)
    // console.log(mobile[prop])
}

// other vabe 

const keys = Object.keys(mobile);
console.log(keys)

for(const key of keys){
    console.log(key, ':', mobile[key])
}
 