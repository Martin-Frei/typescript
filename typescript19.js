// Given an array of user objects, filter out only the active users.
var users19 = [
    { id: 1, name: "Frank", isActive: true },
    { id: 2, name: "Jane", isActive: false },
    { id: 3, name: "Bob", isActive: true },
];
var activUser = users19.filter(function (user) { return user.isActive == true; });
console.log(activUser);
var products19 = [
    { id: 1, name: "Phone", price: 800 },
    { id: 2, name: "Laptop", price: 1200 },
    { id: 3, name: "Tablet", price: 500 },
];
var productName = products19.map(function (product) { return product.name; });
console.log(productName);
var productPrice = products19.filter(function (product) { return product.price > 700; })
    .map(function (product) { return product.name; });
console.log(productPrice);
