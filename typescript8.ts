
function getFirstItem<T>(item:T[]): T{
    return item[0]
}
const firstNum = getFirstItem([1,2,3,4,5])
console.log(firstNum)

const firstLetter = getFirstItem<string>(["martin","frank"])
console.log(firstLetter)


type User = {
    idNum:number;
    name:string;
}

const users: User[]=[
    {idNum:1, name:"martin"},
    {idNum:2, name:"frank"},
    {idNum:3, name:"preply"}
]

function filterUserById<T>(item:T[],x:number): T[]{
    const result = item[x]
    return [result]
}

console.log(filterUserById(users,2))


