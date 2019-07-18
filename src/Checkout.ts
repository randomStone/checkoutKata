
import { ILookUp } from './ILookup';

export class Checkout implements ICheckout{
    
    private subTotal=0;
    private readonly itemLookup:ILookUp
    constructor(itemLookup:ILookUp){
        this.itemLookup=itemLookup
    }
    scan(sku: string): void {
        const price = this.itemLookup.lookupItemPrice(sku);
        this.subTotal+=price;
    }
    getTotalPrice(): number {
        return this.subTotal;
    }

   


}