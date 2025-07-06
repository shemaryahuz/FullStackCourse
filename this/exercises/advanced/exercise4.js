const obj = {
    name: 'Root',
    child: {
        name: 'Child',
        print: function () {
            console.log(this.name);
        }, 
        print3:  () => {
            console.log(this.name);
        }    
    },
    print2: function(){
        (() => {
            console.log(this.name);
        })();
    }
};

obj.child.print(); 
obj.print2();