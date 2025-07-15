
// ENUM

enum direction{
    up,    // = 0
    down,   // = 1
    left,   // = 2
    right   // = 3
}
let move:direction = direction.down

console.log(move)

enum status10{
    pending = 1,
    approved = 2,
    rejected = 3,
    yes = "YES"
}
console.log(status10.approved)      // = 1
console.log(status10[2])            // = 2
console.log(status10.yes)           // = aprroved
console.log(status10[4])            // = undefined, only access with keyname

// Decorators are special functions 
// that can modify or enhance classes, methods, properties, or parameters 

function logMethod(target:any,propertyKey:string,descriptor:PropertyDescriptor){
    const original = descriptor.value;
    descriptor.value = function(...args: any[]){
        console.log(`Called ${propertyKey} with`,args)
        return original.apply(this, args)
    }
}

class calculator{
    @logMethod
    add(a:number, b:number):number{
        return a + b 
    }
}
const calc = new calculator()
// calc.add(5,5) 
console.log(calc.add(5,5))





