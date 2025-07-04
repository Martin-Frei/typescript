type book = {
    Author: string;
    Title:string;
    BookYear:number
}
const newBook:book = {
    Author:"James Clear",
    Title:"Hello again",
    BookYear: 2025
}
function getProperty<T,K extends keyof T >(obj:T, key:K, value:T[K]): T{
    obj[key] = value
    return obj
}
// const author = getProperty(newBook, "Author")
// const title = getProperty(newBook,"Title")
// const bookYear = getProperty(newBook,"BookYear")
let newValue = getProperty(newBook, "BookYear", 2024)
console.log(newValue)
newValue = getProperty(newBook, "Author", "James Bond")
console.log(newValue)
newValue = getProperty(newBook, "Title", "Come back again")
console.log(newValue)

interface employe1{
    id:number;
    name:string;
    role:string;
    isActive:boolean
}
let worker:employe1 = {
    id:1234,
    name:"Martin",
    role:"Dev",
    isActive:true
}

function getWorker<T,K extends keyof T>(obj:T, key:K, value:T[K]):T{
    obj[key] = value
    return obj
}


let newWorker = getWorker(worker,"id", 1111)
console.log(newWorker)
newWorker = getWorker(worker,"name", "Frank")
console.log(newWorker)



