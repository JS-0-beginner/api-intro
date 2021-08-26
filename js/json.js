/* 
const user = 
{
    name: 'Jason',
    address: 'London',
    device: 'Moto-G6'
}

console.log(user);

const stringified = JSON.stringify(user);
console.log(stringified); 
*/

const shop = 
{
    name: 'Walmart',
    owner: 
    {
        name: 'Will Smith',
        profession: 'Actor'
    },
    location: 'San-Fransisco',
    branches: 2,
    products: ['dry-foods','milk','fruits'],
    hasDiscounts: true,
    delivery: 'Online'    
    
}

console.log(shop);
const stringified = JSON.stringify(shop);
console.log(stringified); 

const converted = JSON.parse(stringified);
// console.log(converted);
console.log(converted.products);