export class Checkout implements ICheckout{
    
    private subTotal=0;
    
    scan(sku: string): void {
        this.subTotal=50;
    }
    getTotalPrice(): number {
        return this.subTotal;
    }

}