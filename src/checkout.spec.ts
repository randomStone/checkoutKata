import { Checkout } from "./Checkout";

describe('Checkout',()=>{

    describe('getTotalPrice',()=>{
        it('should return zero when no items have been scanned',()=>{
            const checkout = new Checkout();
            const result = checkout.getTotalPrice();
            expect(result).toBe(0);
        });
        it('should return 50 when  item A have been scanned',()=>{
            const checkout = new Checkout();
            checkout.scan('A');
            const result = checkout.getTotalPrice();
            expect(result).toBe(50);
        });
    })
})