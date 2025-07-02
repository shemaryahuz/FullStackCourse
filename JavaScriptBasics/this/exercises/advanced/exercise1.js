const user = {
    name: 'Bobe',
    greet() {
        console.log('Hello ' + this.name + '!');
    },
    arrowGreet: () => {
        console.log('Hello ' + this.name + '!');
    }
};

user.greet(); // Hello Bobe!
user.arrowGreet(); // Hello undefind!