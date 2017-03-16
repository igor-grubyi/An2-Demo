export class Car {
    state='for sale';
    price=20000;

    constructor(
        private _id: number,
        private _model: string,
        private _color: string,
    ){ }
}