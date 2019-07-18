import { Checkout } from "./Checkout";

describe('Checkout',()=>{

    describe('getTotalPrice',()=>{
        it('should return zero when no items have been scanned',()=>{
           
            const checkout = new Checkout([]);
            const result = checkout.getTotalPrice();
            expect(result).toBe(0);
        });
        it('should return 50 when  item A have been scanned',()=>{
            const prices = [{sku:'A',price:50}];
            const checkout = new Checkout(prices);
            checkout.scan('A');
            const result = checkout.getTotalPrice();
            expect(result).toBe(50);
        });
        it('should return 30 when with item A that has a different price',()=>{
            const prices = [{sku:'A',price:30}];
            const checkout = new Checkout(prices);
            checkout.scan('A');
            const result = checkout.getTotalPrice();
            expect(result).toBe(30);
        });
    })
})