class Person {
    name1:string;
    constructor(name1:string){
        this.name1 = name1              //parameters of constructor
    }
    greetings(){
        console.log(`Hello, my name is ${this.name1}`)
    }
}
const person1 = new Person("Martin")
person1.greetings()

function greetings(name1){
        console.log(`Hello, my name is ${name1}`)
    }

class Student {
    fullName:string;
    level:number;
    constructor(fullName:string,level:number){
        this.fullName = fullName
        this.level = level
    }
    introduces(){
        console.log(`Hi, i am ${this.fullName}`)
        console.log(`Hi, i am ${this.level}. Level`)
    }
    promote(){
        this.level++
        console.log(`${this.fullName} has been promoted to Level ${this.level}`)
    }
}
const promot = new Student("Martin", 1)
promot.introduces()
promot.promote()
promot.promote()

class Add{
    num1:number;
    num2:number;
    constructor(num1:number,num2:number){
        this.num1 = num1 
        this.num2 = num2
    }
    toAdd(){
        console.log(`Sum is : ${this.num1 + this.num2}`)
    }
}
const sum = new Add(5 , 5)
sum.toAdd()
