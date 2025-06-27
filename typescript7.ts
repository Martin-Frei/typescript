function sample<T>(item:T): T{
    return item
}
// sample<string>("Hello")
// sample<number>(1234)

console.log(sample<string>("Hello"))
console.log(sample<number>(1234))
console.log(sample<boolean>(true))

interface User{name:string; age:number} 
console.log(sample<User>({name:"Martin", age:53}))

function add(a:number,b:number) { 
    return a +b
}

interface Employe{name:string; id:number; hired:boolean}
console.log(sample<Employe>({name:"martin", id:12345, hired:true}))

type UserInfo2 = User & {jobTitle:string}
console.log(sample<UserInfo2>({name:"Martin",age:53, jobTitle:"Developer"}))