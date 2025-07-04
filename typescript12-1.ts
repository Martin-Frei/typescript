

function pair<T, U>(first:T, second:U):[T,U]{
    return [first, second]
}
const result = pair("age",25)
console.log(result)


function transformKey<T,K extends keyof T, U>(
    obj:T, key:K, transform:(val:T[K]) => U): U{
        return transform(obj[key])
    }
const person = {name:"martin",age:53}
const upperName = transformKey(person,"name",(val)=> val.toUpperCase())
console.log(upperName)
console.log(person)

const doubledAge = transformKey(person,"age", (val)=> val *2)
console.log(doubledAge)
person["age"] = doubledAge
console.log(person)