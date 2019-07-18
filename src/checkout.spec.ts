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

        it('should return 115 when with item A B C and D are scanned',()=>{
            const prices = [{sku:'A',price:50},{sku:'B',price:30},{sku:'C',price:20},{sku:'D',price:15} ];
            const checkout = new Checkout(prices);
            checkout.scan('A');
            checkout.scan('B');
            checkout.scan('C');
            checkout.scan('D');
            const result = checkout.getTotalPrice();
            expect(result).toBe(115);
        });
    })
})