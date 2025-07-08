
// partial  update of any Value from the keys
type product1 = {
    id:number;
    name:string;
    price:number;
}

const updateProduct = ( updates:Partial<product1>)=> {
    console.log("updateProduct:",updates)
    console.log(updates.id)
}
updateProduct({
    name:"martin",
    id:1234
})

type meat4 ={
    PartOfTheBody:string;
    legs:number;
    animalRace:string
}

const meatOf = ( updates:Partial<meat4>)=> {
    console.log("updateMeat:",updates)
    console.log(updates.PartOfTheBody)
}
meatOf({
    PartOfTheBody:"Shoulder",
    legs: 4,
    animalRace:"beef"
})

// required  need all the keys
type book1 = {
    name:string;
    author:string;
    release:number
}

const publish = (post:Required<book1>) => {
    console.log("publishing:", post.name, post.author, post.release)
}
publish({
    name:"martin",
    author:"james bond",
    release:1999
})

//exclude removes from the object everything as assignable to 
type rolls = "admin" | "user" | "guests"
type visibleRolls = Exclude<rolls,"guests">
const r:visibleRolls = "user"
// const b:visibleRolls = "guests"
console.log(r)

type fileExtension = "jpg" |  "png"  |  "mp4"   |  "mp3"
type imgExtension = Exclude<fileExtension, "mp4" | "mp3">
const logo:imgExtension = "jpg"
console.log(logo)


//extract
type cars2 = {
    brand:string;
    model:string;
    mileage:number;
    age:number;
    hp:number
}

type newCar =  Extract<keyof cars2,"model" | "age">
type mainCar = Pick<cars2, newCar>
const user10: mainCar = {
    model:"Audi",
    age: 2008
}
console.log(user10)

//applying