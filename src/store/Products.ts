import {makeAutoObservable} from "mobx";
import Product from '../types'

class Products {

    productsMap = new Map<Product, number>()

    constructor() {
        makeAutoObservable(this)
    }

    addToCart(product:Product){
        if(!this.productsMap.has(product)){
            this.productsMap.set(product, 1)
        }
    }

    changeItemAmount(productName: string, amount: number){

        this.productsMap.forEach((value, key)=>{
            if(key.name === productName){
                if(amount === 0){
                    this.deleteItem(key)
                    return
                }
                this.productsMap.set(key, amount)
            }
        })
    }

    deleteItem(key:Product){
        this.productsMap.delete(key)
    }

    get totalPrice(){
        let total = 0
        this.productsMap.forEach((value, key)=>{
            total += key.price * value
        })
        return total
    }

    get products(){
        return [...this.productsMap.keys()]
    }

    get productsAndAmount(){
        return [...this.productsMap]
    }
}

export default new Products()