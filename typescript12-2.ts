// Utilieties Types

//Pick required the selected keys
type User2 = {
    id:number;
    name:string;
    email:string;
    password:string
}

type loginData = Pick<User2,"email"|"password">
const login:loginData = {
    email:"example@gmail.com",
    password:"1234",
}

type loginData2 = Pick<User2, "name" | "email">
const infoUser2:loginData2 = {
    name:"Martin",
    email:"example@gmail.com"
}

// record
type status1 = "pending" | "aproved" | "rejected"
const statusMsg: Record <status1, string> = {
    pending:"Still under review",
    aproved:"accepted",
    rejected:"Try again"
    }

console.log(statusMsg.pending)


type meat ={
    meat:string;
    legs:number;
    poultry:boolean
}

type meat1 = Pick<meat, "meat"| "legs">
const meat3:meat1 = {
    meat: "pork",
    legs: 4
}
console.log(meat3)