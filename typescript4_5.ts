class Car{
    public brand: string;
    private mileage: number;
    protected fuelType: string;
    constructor(brand:string,mileage:number, fuelType:string){
        this.brand = brand
        this.mileage = mileage
        this.fuelType = fuelType
    }
    showMileage(){
        console.log(`The Mileage is: ${this.mileage} miles`)
    }
    showBrandMileage(){
        console.log(` The ${this.brand} have a Mileage of ${this.mileage} miles`)
    }
    manipulateMileage(){
        console.log(`The ${this.brand} have now ${this.mileage - 10000} miles`)
    }
}
const car1 = new Car("Ford", 100000, "gas");
// car1.showMileage()
// car1.showBrandMileage()
// car1.manipulateMileage()
// console.log(car1.brand)
// console.log(car1.fuelType)   protected ca not modified and no direkt access
// console.log(car1.mileage)    private can be indirected modified

class Chef{
    public name:string;
    private salary:number;
    protected speziality:string
    constructor(name:string, salary:number, speziality:string){
        this.name = name
        this.salary = salary
        this.speziality = speziality
    }
    describe(){
        console.log(`${this.name} is Expert in ${this.speziality} !`)
    }
    showSalary(){
        console.log(`${this.name} earns each Month ${this.salary} $$`)
    }
}

const chef1 = new Chef("martin", 5000, "Meatprocessing")
// chef1.describe()
// chef1.showSalary()

// Create a BankAccount class to have accountHlder and balance inputs(parameters) which should have three methods(balance, withdrawal and deposit)

class Bank{
    public accHolder:string
    private balance?:number
    private actualyBalance:number
    constructor(accHolder:string, balance:number, actualyBalance:number){
        this.accHolder = accHolder
        this.balance = balance
        this.actualyBalance = actualyBalance
    }
    showBalance(){
        console.log(`Balanceof ${this.accHolder} is : ${this.actualyBalance}`)
    }
    makeDeposit(balance:number){
        console.log(`Your deposit is ${balance} $      Your new balance is ${this.actualyBalance += balance} $`)
    }
    makeWithdraw(balance:number){
        console.log(`Your withdraw is ${balance} $  Your new balance is ${this.actualyBalance -= balance} $`)
    }
}


const acc1 = new Bank("Martin",0, 1000)
// acc1.showBalance()
// acc1.makeDeposit(500)
// acc1.makeWithdraw(450)
// acc1.makeDeposit(200)


class Book{
    public title: string;
    private price:number;
    constructor(title:string, price:number){
        this.title = title
        this.price = price
    }
    public displayInfo(){
        console.log(`Title is : ${this.title}`)
        this.printprice()
    }
    private printprice(){
        return `Price: ${this.price} $`
    }
    public showInfo(){
        console.log(`Title is : ${this.title} The Price is : ${this.price}`)
    }
}
const book1 = new Book("Start Typ Script", 15)
book1.displayInfo()
book1.showInfo()


class bioData{
    public name:string;
    private ssn:string;
    protected nationality:string;
    constructor(name:string, ssn:string, nationality:string){
        this.name = name
        this.ssn = ssn
        this.nationality = nationality
    }
    public sayHello(){
        console.log(`Hi, my Name is ${this.name}`)
    }
    private getSsn(){
        return this.ssn
    }
    protected showNationality(){
        console.log(`${this.name} is from ${this.nationality}`)
    }
    public accessPrivateData(){
        console.log(`SSN Value: ${this.getSsn()}`)
    }
}

class person1 extends bioData{
    public personalID:number;
    constructor(name:string, ssn:string, nationality:string, personalID:number){
        super(name,ssn,nationality)
        this.personalID = personalID
    }
    public introduction(){
        this.sayHello()
        this.showNationality()
        console.log(`My personal Id is: ${this.personalID}`)
    }
}

const pNew = new person1("martin","567-Python", "German", 12345)
pNew.introduction()
pNew.accessPrivateData()
pNew.sayHello()
