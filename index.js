class BankAccount {

    constructor() {
        this.accountBalance = 0;
        this.isOpen = false;
    }

    open() {
        if (this.isOpen) 
            throw new ValueError();
        this.isOpen = true;
    }

    close() {
        if (!this.isOpen)
            throw new ValueError;
        this.isOpen = false;
        this.accountBalance = 0;
        
    }

    deposit(money) {
        if (money < 0)
            throw new ValueError();
        if (!this.isOpen) 
            throw new ValueError();        
        this.accountBalance += money;
    }

    withdraw(money) {
        if (money < 0 || money > this.accountBalance) 
            throw new ValueError;
        if (!this.isOpen)
            throw new ValueError
        if (this.isOpen)
            this.accountBalance = this.accountBalance - money;
        this.accountBalance = this.accountBalance;
            
    }

    get balance() {
        if (!this.isOpen) 
            throw new ValueError();
        return this.accountBalance;
    }
}

class ValueError extends Error {
    constructor() {
        super('Bank account error');
    }
}

module.exports = {
    BankAccount,
    ValueError
}