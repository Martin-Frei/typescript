// omit  ignore to put something in


type customer = {
    email:string;
    adresse:string
}
type newCustomer = Omit<customer,"email">
const consumer:newCustomer = {
    adresse:"Rosenheim"
}

type blogPosts ={
    title:string;
    content:string;
    published:boolean;
    id:number;
    create_at:number
}


type postInput = Omit<blogPosts, "id" | "create_at">
const newPost:postInput = {
    title:"NewPosts",
    content:"This is a new Blog Post",
    published: false
}


//return type: is what the function have to return 
function getUser(){
    return {
        id:1,
        name:"frank",
        email: "fank@frank.de"
    }
}
type userReturn = ReturnType<typeof getUser >
const result2: userReturn = {
    id:1,
    name:"frank",
    email:"frank@frank.de"
}

function getProduct(){
    return {
        name:"noodel",
        price:12.99,
        describtion: "fast cooked noodle"
    }
}

type userProduct = ReturnType<typeof getProduct> // typeof transfer all keys to the new obj
const result3:userProduct = {
        name:"fish",
        price:6.99,
        describtion: " for the fast cooked noodle"
}


