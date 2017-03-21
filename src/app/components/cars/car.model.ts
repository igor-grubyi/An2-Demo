export class Car {
    private minPrice = 100;
    private maxPrice = 300;

    state = 'for sale';
    

    constructor(
       public id: number,
       public model: string,
       public color: string,
       public price?: number
    ){ 
        this.price = Math.floor(Math.random() * (this.maxPrice - this.minPrice) + this.minPrice) * 100;
    }
}