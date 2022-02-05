class BankAccount {

    constructor() {
        this.accountBalance = 0;
        this.isOpen = false;
    }

    open() {
        if (this.isOpen == true) {
            throw new ValueError;
        } else {
            this.isOpen = true;
        }
    }

    close() {
        if (this.isOpen == false) {
            throw new ValueError;
        } else {
            this.isOpen = false;
            this.accountBalance = 0;
        }
    }

    deposit(money) {
        if (money < 0) {
            throw new ValueError;
        } else {
            if (this.isOpen == true) {
                this.accountBalance = this.accountBalance + money;
            } else {
                this.accountBalance = 0;
                throw new ValueError;
            }
        }
    }

    withdraw(money) {
        if (money < 0 || money > this.accountBalance) {
            throw new ValueError;
        } else if (this.isOpen == false) {
            throw new ValueError;
        } else {
            if (this.isOpen == true) {
                this.accountBalance = this.accountBalance - money;
            } else {
                this.accountBalance = this.accountBalance;
            }
        }
    }

    get balance() {
        if (this.isOpen == false) {
            throw new ValueError;
        } else {
            return this.accountBalance;
        }
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