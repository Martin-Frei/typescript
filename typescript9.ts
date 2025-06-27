
function printName<T extends {name:string}>(person:T){
    console.log(`Name is ${person.name} `)
}
printName({name:"frank", age:34, gender:"male"}) //only Infomation !!with!! name:"value" is allowed
printName({name:"martin"})
// printName({age:34})
// printName({name:34})

function printLength<T extends {length:number}>(item:T){
    console.log(`The length is ${item.length}`)
}

printLength("Hello")                    //Counting all charactres
printLength([1,2,3,4,5,6])              //Counting all iten in the array
printLength(["Hello","Hello","Hello"])  //Counting all iten in the array
// printLength(436)  length Method works only with String and Array

type Animal = {name:string, specious:string}

function describeAnimal<T extends Animal>(a:T){
    console.log(`${a.name} is a ${a.specious}`)
}

describeAnimal({name:"Simba", specious:"Lion"})
describeAnimal({name:"Bello", specious:"Dog"})
describeAnimal({name:"asdf", specious:"Cat"})
describeAnimal({name:"Frank", specious:"Tutor"})
describeAnimal({name:"Frank", specious:"Lion"})


