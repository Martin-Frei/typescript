//Type Annotations vs Type Inference

//Type Annotations
let message:string = "Hello Typescript";
console.log(message)
message = "Hello World"
console.log(message)

let num:number = 1
console.log(num)

let colors:string[] = ["green", "red", "blue","black"]
let scores:Array<number> = [1, 2, 3, 4, 5]  // generic method

// Type Inference
let city = "Legos"
//city = 1 //not allowed because TS recognice its a string


//Union Types
let id:string | number| boolean
id = "Martin"
id = 100
id = true

// Intersection of Types
type person = {name:string}       // type alias 
type employe = {employeId:number} // type alias 
type staff = person & employe     // union of both  &

const staffMember:staff = {
    name:"Alice",
    employeId: 123,
}
console.log(staffMember)

function add(a:number, b:number) {
    return a + b
}
console.log(add(3,5))    

function nameAgeTemplate(name:string, age:number){
    return `${name} is ${age} Years`
}
console.log(nameAgeTemplate("Martin", 53))


