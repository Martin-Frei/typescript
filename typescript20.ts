
let num20:number[] = [ 1, 2, 3, 4, 5, 6, 7]
let array:string[] = ["Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday", "Sunday"]

const anyName = array.reduce((accumulator, currentValue, index, array) => {
    if (!accumulator[currentValue])  {
        accumulator[currentValue] =  num20[index]
    }
    return accumulator
    
},  {} as Record<string , number>);

console.log(anyName)
console.log(typeof(anyName))