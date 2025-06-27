
abstract class Animal {
    constructor(protected name:string){
        this.name = name;
    }
    abstract makeSound():void;
    move():void{
        console.log("Moving.....")
    }
}


class Dogs extends Animal{
    makeSound(): void {
        console.log("Woow.....")
    }
    printName(): void {
        console.log(this.name)
    }
}
// const myDog2 = new Animal("Hasso")  <<==  Have no access to a abstract Class
const myDog = new Dogs("Bello")
myDog.makeSound()
myDog.move()
myDog.printName()

abstract class Person {
    constructor(public name:string){
        this.name = name;
    }
    abstract greet():void
    sayName():void{
        console.log(`My Name is ${this.name}`)
    }
}

class Teacher extends Person{
    greet(){
        console.log(`Hello Students, i am ${this.name}`)
    }
}

const myName = new Teacher("Frank")
myName.sayName()
myName.greet()

// Create an abstract class Appliance:
// With an abstract method turnOn()
// With a regular method describe()
// Then extend it in two classes: Fan and WashingMachine, each implementing turnOn() differently.


abstract class Appliance {
    constructor(public name:string){
        this.name = name;
    }
    abstract turnOn():void;
            describe():void{
            console.log(`This is a ${this.name}`)
            }
}

class Fan extends Appliance{
    turnOn():void{
        console.log(`${this.name} make now fresh Air `)
    };
    describe(){
        console.log(`I am a ${this.name} and make fresh Air `)
    }
}

class WaschingMachine extends Appliance{
    turnOn():void{
        console.log(`${this.name} now wash the loundry `)
    };
    describe(){
        console.log(`I am a ${this.name} and wash a lot of Clothes `)
    }
}

const myDevice = new Fan("fancy Fan")
myDevice.turnOn()
myDevice.describe()

const myDevice2 = new WaschingMachine("big Washing Machine")
myDevice2.turnOn()
myDevice2.describe()

