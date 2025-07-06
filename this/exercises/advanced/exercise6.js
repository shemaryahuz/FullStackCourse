
class Counter {
    constructor() {
        this.count = 0;
    }
    increase() {
        this.count++;
        console.log(this.count);
    }
}

const c = new Counter();

// Bad code

const inc = c.increase;
// inc(); // TypeError...

// Fix with bind

const boundInc = c.increase.bind(c);
boundInc(); // 1

// Fix with arrow function

class Counter2 {
    constructor() {
        this.count = 0;
    }
    increase = () => {
        this.count++;
        console.log(this.count);
    }
}

const c2 = new Counter2();
const inc2 = c2.increase;
inc2(); // 1

