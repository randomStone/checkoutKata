import { Item } from "./Item";

export class Checkout implements ICheckout{
    
    private subTotal=0;
    private readonly items:Item[]
    constructor(items:Item[]){
        this.items=items
    }
    scan(sku: string): void {
        const price = this.lookupItemPrice(sku);
        this.subTotal+=price;
    }
    getTotalPrice(): number {
        return this.subTotal;
    }

    private lookupItemPrice(sku:string):number{
        return this.items.find((item)=>item.sku===sku).price;
    }


}