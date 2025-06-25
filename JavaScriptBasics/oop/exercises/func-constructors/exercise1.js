// Phone function constructor

function Phone(brand, model){
    this.brand = brand;
    this.model = model;
    this.details = function(){
        console.log('Phone:', brand, model);
    }
}

const galaxy = new Phone('Sumsung', 'Galaxy S22');
const iPhone = new Phone('Apple', 'iPhone 16 Pro');

galaxy.details() // Phone: Sumsung Galaxy S22
iPhone.details() // Phone: Apple iPhone 16 Pro