var handlers=require("./handler");

var Account=function(amount){
    var balance=amount;
    //inner function
    var getBalance=function(){
        return balance;
    };

    var monitor=function(){
            if(balance < 5000){
                handlers.blockAccount();
            }
            else if(balance>=500000){
                handlers.payIncomeTax();
            }
    }

    var withdraw=function(amount){
        balance=balance-amount;
        monitor();
    };

    var deposit=function(amount){
        balance=balance+amount;
    };

   //mapping the functions to inner functions
    return{
        receiveBalance:getBalance,
        debit:withdraw,
        credit: deposit
    };
}
 

//Main code execution

var acct123= new Account(45000);
var data = acct123.receiveBalance();
console.log("Balance="+data);

var amount=5000;
acct123.credit(amount);
data=acct123.receiveBalance();
console.log("Balance="+data);