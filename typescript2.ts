// interface using with OOP (can be redeclared ?? )

interface User{name:string; age:number}   // semicolon

const user:User = {
    name:"frank",                          // only komma
    age: 34
}


type Id = {                                 // type can have every type of objects( function or else )
    name: string;                           // use with unions "&" 
    age: number                             // can not be redeclared 
}

const userId:Id = {
    name: "martin",
    age: 53
}

type personalInfo = Id & {
    jobTitle:string
}

interface UserInfo extends User {
    jobTitle:string
}
const userInfo2:UserInfo ={
    name: "martin",
    age: 53,
    jobTitle: "developer"
}

console.log(userInfo2)

type status = "loading" | "success" | "error"
let pageStatus:status = "loading"               // only use of loading success or error


//optional and readonly properties

interface product{
    name: string;
    readonly id:string;
    description?:string;            // ? is for option, not necerssary
}
const item:product = {
    name:"laptop",
    id:"munich",
    description:" Best Laptop"
}
// item.id = "berlin"                 // con not change a readonly propertie

//Create a variable that should contain Readonly, a union of two types


interface Meat{
    meatName:string;
    meatWeight: number;
    readonly meatPrice: number;
}

type shop = Meat & {
    shopPlace:string;
}

let purchase:shop ={
    meatName:"beef",
    meatWeight: 25,
    meatPrice:15,
    shopPlace: "hotel"
}


