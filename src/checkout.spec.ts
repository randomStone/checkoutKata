import { Checkout } from "./Checkout";

describe('Checkout',()=>{

    describe('getTotalPrice',()=>{
        it('should return zero when no items have been scanned',()=>{
            const checkout = new Checkout();
            const result = checkout.getTotalPrice();
            expect(result).toBe(0);
        });
    })
})