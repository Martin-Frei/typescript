
// Given an array of user objects, filter out only the active users.

type User19 = {
    id: number;
    name: string;
    isActive: boolean;
    };

const users19: User19[] = [
    { id: 1, name: "Frank", isActive: true },
    { id: 2, name: "Jane", isActive: false },
    { id: 3, name: "Bob", isActive: true },
    ];

const activUser = users19.filter((user) => user.isActive == true )
console.log(activUser)

// You have a list of products. Return an array of product names.
//From the same products list, return names of products that cost more than $700.
type Product19 = {
id: number;
name: string;
price: number;
};

const products19: Product19[] = [
{ id: 1, name: "Phone", price: 800 },
{ id: 2, name: "Laptop", price: 1200 },
{ id: 3, name: "Tablet", price: 500 },
];

const productName = products19.map((product) => product.name)
console.log(productName)

const productPrice = products19.filter((product) => product.price  > 700 )
.map((product) => product.name )
console.log(productPrice)

// Given a list of items, calculate the total price using reduce().

type Item = {
name: string;
price: number;
};

const cart: Item[] = [
{ name: "Book", price: 20 },
{ name: "Pen", price: 5 },
{ name: "Notebook", price: 10 },
];


const sumPrice = cart.reduce((result, item) => result += item.price, 0 )   
// Reduce need 2 Variables. In this case is result the storage and must be declared with 0 (or a other value),
// here is item the iterator trough the object and need the .price or .name

// reduce( akkumulator, currentValue, value ) 
// currentValue is responsile for the current value of the array being processed.
// akkumulator is the storage for the operations, can be any data type, but is often a number or an object.
// value (0) is initial value of the accumulator, which is used as the starting point for the calculation.

//counting 
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

const myCount = words.reduce((result, item) => {
 //   result[item] = (result [item] || 0)+ 1
    if (!result[item]) result[item] = (result [item] || 0)+ 1
    else result[item] += 1
    return result
},{} as Record<string,number>)

console.log(myCount)

const nested = [[1, 2], [3, 4], [5]];

const myObj = nested.reduce((result , item) => 
    result.concat(item)
, [])

console.log(myObj)


