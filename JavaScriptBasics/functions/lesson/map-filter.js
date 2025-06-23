// Filter and Map fast cars

const showCar = (car) => {
    model = Object.keys(car)[0];
    speed = Object.values(car)[0];
    console.log('Model:', model, '. Speed:', speed);
};

const isFast = (car) => Object.values(car)[0] > 80;

const cars = [
    {"Tesla": 100},
    {"Ferrari": 75},
    {"Lamborghini": 82},
    {"Porsche": 90},
    {"BMW": 95},
    {"Mercedes": 70},
];

const fastCars = cars.filter(isFast);

console.log('All cars:');
cars.map(showCar);
console.log('Fast cars:');
fastCars.map(showCar);