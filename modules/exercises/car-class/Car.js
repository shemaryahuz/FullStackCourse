class Car{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    getDetails = () => `Brand: ${this.brand}. Model: ${this.model}`;
}

export {Car};