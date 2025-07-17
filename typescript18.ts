
import { pi,square, identity } from "./typescript17";
console.log(pi)
console.log(square(5))
const u:identity = {
    id:12345,
    name: "martin",
    age:53
}
console.log(u)

interface inventoryItem{
    id:number;
    name:string;
    quantity:number
}

class inventoryManage{
    private items:inventoryItem[] = [];

    addItem(item18:inventoryItem):void{
        this.items.push(item18)
        console.log(`added Item : ${item18.name}`)
    }

    listItems():void{
        console.log("invetory List : ")
        if (this.items.length === 0){
            console.log("No Items in inventory!")
        }else{
            this.items.forEach((item) => {
                console.log(`- ID: ${item.id}, 
                            Name: ${item.name},
                            Quantity: ${item.quantity}`)
            });
        }
    }
    updateQuantity(id:number, newQuantity: number):void{
       const item = this.items.find((item) => item.id === id)
       if (item){
        item.quantity= newQuantity
        console.log(`Updated Quantity for ${item.name} to ${newQuantity}`)
       }else{
        console.log("Item not found")
       }
    }
    removedItem(id:number):void{
         const item = this.items.findIndex((item)=> item.id === id)
        if (item !== -1){
            const removed = this.items.splice(item,1)[0]
            console.log(`Removed item : ${removed.name}`)
        }else {
            console.log("Item not found!")
        }
    }
}







