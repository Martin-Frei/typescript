
// function accessor(target:any, name:string, descriptor:PropertyDescriptor){
//     const original = descriptor.get
//     descriptor.get = function(){
//         console.log(`Getting value from ${name}`)
//         return original?.apply(this)
//     }
// }

// class item17{
//     private _price:number=100;
//     private _food:string = "beef" 
//     @accessor
//     get food(){
//         return [this._price, this._food]
//     }
// }
// const item171 = new item17();
// console.log(item171.food)

export const pi = 3.14;
export function square(n:number):number{   // "):number" give return of the function the type 
    
    return n * n
}
export type identity =  {
    id:number;
    name:string;
    age:number
}