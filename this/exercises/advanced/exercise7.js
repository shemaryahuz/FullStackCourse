// Bad code

const button = {
    label: 'Submit',
    click: () => {
        console.log('Clicked: ' + this.label);
    }
};

button.click();

// Fix

const button2 = {
    label: 'Submit',
    click: function(){
        console.log('Clicked: ' + this.label);
    }
};

button2.click();