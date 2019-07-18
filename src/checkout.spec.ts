import { Checkout } from "./Checkout";
import { Lookup } from "./Lookup";

describe('Checkout',()=>{

    describe('getTotalPrice',()=>{
        it('should return zero when no items have been scanned',()=>{
            const itemLookup =new Lookup([]);
            const checkout = new Checkout(itemLookup);
            const result = checkout.getTotalPrice();
            expect(result).toBe(0);
        });
        it('should return 50 when  item A have been scanned',()=>{
            const prices = [{sku:'A',price:50}];
            const itemLookup =new Lookup(prices); 
            const checkout = new Checkout(itemLookup);
            checkout.scan('A');
            const result = checkout.getTotalPrice();
            expect(result).toBe(50);
        });
        it('should return 30 when with item A that has a different price',()=>{
            const prices = [{sku:'A',price:30}];
            const itemLookup =new Lookup(prices); 
            const checkout = new Checkout(itemLookup);
            checkout.scan('A');
            const result = checkout.getTotalPrice();
            expect(result).toBe(30);
        });

        it('should return 115 when with item A B C and D are scanned',()=>{
            const prices = [{sku:'A',price:50},{sku:'B',price:30},{sku:'C',price:20},{sku:'D',price:15} ];
            const itemLookup =new Lookup(prices); 
            const checkout = new Checkout(itemLookup);
            checkout.scan('A');
            checkout.scan('B');
            checkout.scan('C');
            checkout.scan('D');
            const result = checkout.getTotalPrice();
            expect(result).toBe(115);
        });
        it('should return 50 when with item A and unknown item U is scanned',()=>{
            const prices = [{sku:'A',price:50} ];
            const itemLookup =new Lookup(prices); 
            const checkout = new Checkout(itemLookup);
            checkout.scan('A');
            checkout.scan('U');
            const result = checkout.getTotalPrice();
            expect(result).toBe(50);
        });
        it('should return 130 when with 3 item As',()=>{
            const prices = [{sku:'A',price:50} ];
            const itemLookup =new Lookup(prices); 
            const checkout = new Checkout(itemLookup);
            checkout.scan('A');
            checkout.scan('A');
            checkout.scan('A');
            const result = checkout.getTotalPrice();
            expect(result).toBe(130);
        });
    })
})