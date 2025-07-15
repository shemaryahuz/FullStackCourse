// Bank account function constructor

function BankAccount(owner){
    this.owner = owner;
    this.balance = 0;
    this.deposit = function(amount){
        this.balance += amount;
    }
    this.withdrow = function(amount){
        if (amount <= this.balance){
            this.balance -= amount;
        }
        else{
            console.log(`Hi ${this.owner}, Your balance is not sufficient for withdrow`);
        }
    }
    this.checkBalance = function(){
        console.log(`Hi ${this.owner}! Your balance is: ${this.balance}`);    
    }
}

const account = new BankAccount('David');
account.deposit(1000);
account.checkBalance(); // Hi David! Your balance is: 1000
account.withdrow(700);
account.checkBalance(); // Hi David! Your balance is: 300
account.withdrow(500); // Hi David, Your balance is not sufficient for withdrow