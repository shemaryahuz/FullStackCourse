const car1 = {
    brand: "Toyota"
};

const car2 = {
    brand: "Honda"
};

function showBrand() {
    console.log(this.brand);
}

showBrand.call(car1); // Toyota
showBrand.call(car2); // Honda