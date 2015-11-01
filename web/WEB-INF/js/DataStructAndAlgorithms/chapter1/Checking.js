/**
 * Created by Naver on 2015-10-29.
 */
function Checking(amount) {
    this.balance = amount;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.toString = toString;
}

var balance = 10000;

function deposit(amount) {
    this.balance += amount;
}

function withdraw(amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
    }
    if (amount > this.balance) {
        console.log("Insufficient funds");
    }
}

function toString() {
    return "Balance : " + this.balance;
}

deposit(600); // Scope Safe Test

// new함과 동시에 this가 Check에 바인딩되네..
var account = new Checking(500);
account.deposit(1000);
console.log(account.toString());
account.withdraw(750);
console.log(account.toString());
account.withdraw(800);
console.log(account.toString());