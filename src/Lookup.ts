import { Item } from "./Item";
import { ILookUp } from "./ILookup";

export class Lookup implements ILookUp {
    
    private readonly items:Item[];
    constructor(items:Item[]){
        this.items =items
    }
    
     lookupItemPrice(sku:string):number{
        const item =this.lookupItem(sku);
        if (item){
            return item.price;
        }else{
            return 0;
        }
    }
    
    private lookupItem(sku:string):Item {
        return this.items.find((item)=>item.sku===sku);
    }
}