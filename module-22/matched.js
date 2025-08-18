const numbers = [12, 21, 23, 32, 55, 66];




for(const number of numbers){
    // console.log(number)
}


const products = [
    {id: 1, name: 'xiami phone', price: 19000},
    {id: 1, name: 'i phone', price: 19000},
    {id: 1, name: 'mi phone', price: 19000},
    {id: 1, name: 'apple phone', price: 19000},
    {id: 1, name: 'walton phone', price: 19000},
    {id: 1, name: 'poco phone', price: 19000},
    {id: 1, name: 'samsung phone', price: 19000},
    {id: 1, name: 'nokia phone', price: 19000},
    {id: 1, name: 'one phone', price: 19000},
];

function matchedProducts ( products,search){
    const matched = [];
    for (const product of products){
        if(product.name.includes(search)){
            matched.push(product)
        }
    }
    return matched;
}
const result = matchedProducts(products, 'phone');
console.log(result)

