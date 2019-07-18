interface ICheckout {
     getTotalPrice():number;
     scan(sku:string):void;
}