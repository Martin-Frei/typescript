interface hasID{
    id:number
}
function findById<T extends hasID>(list:T[], id:number): T | undefined{
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
        return list[i];
}
}
return undefined;
}


const posts = [
    {id:101,title: "post1"},
    {id:102, title:"post2"}
]
console.log(findById(posts, 102))


function getWithDefault<T>(value:T | undefined, defaultValue:T):T{
    return value !== undefined ? value : defaultValue
}
const settings = getWithDefault<number>(100, 12)
console.log(settings)



