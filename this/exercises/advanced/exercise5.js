const timer = {
    message: 'Time is up!',
    start(delay) {
        setTimeout(function(){
            console.log(this.message);
        }, delay);
    }
};


// Bad code

timer.start(1000); // undefind (after 1 second)

// Fix with bind

const timer2 = {
    message: 'Time is up!',
    start(delay) {
        setTimeout(function(){
            console.log(this.message);
        }.bind(timer), delay);
    }
};

timer2.start(2000); // Time is up! (after 2 seconds)

// Fix with arrow function

const timer3 = {
    message: 'Time is up!',
    start(delay) {
        setTimeout(() => {
            console.log(this.message);
        }, delay);
    }
};

timer3.start(3000) // Time is up! (after 3 seconds)

// Fix with self = this

const timer4 = {
    message: 'Time is up!',
    start(delay) {
        const self = this;
        setTimeout(function() {
            console.log(self.message);
        }, delay);
    }
};

timer4.start(4000) // Time is up! (after 4 seconds) 