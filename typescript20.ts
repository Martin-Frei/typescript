
let num20:number[] = [ 1, 2, 3, 4, 5, 6, 7]
let array:string[] = ["Monday", "Tuesday", "Wendsday", "Thursday", "Friday", "Saturday", "Sunday"]

const anyName = array.reduce((accumulator, currentValue, index) => {
    if (!accumulator[currentValue])  {
        accumulator[currentValue] =  num20[index]
    }
    return accumulator
    
},  {} as Record<string , number>);

console.log(anyName)
console.log(typeof(anyName))

const anotherName = array.reduce((acc, curV ) => {
    curV.toLowerCase()
    //acc +=  curV.concat(",")
    acc +=  curV + ","
    return acc
},"")

console.log(anotherName)
console.log(typeof(anotherName))

const maxNum = num20.reduce((acc, curV) => {
    if (!(acc > curV)) {
        acc = curV
    } return acc
},0)

console.log(maxNum)

const avgNum = num20.reduce((acc, curV) => {      
    acc += curV    
    return acc
},0)
console.log(avgNum / num20.length)
