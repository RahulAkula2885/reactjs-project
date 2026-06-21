//1. Create functions for looping through array and print data and export it and use it in the different page. 


function printData(){
    var array =[1,2,3,4,5];

    array.forEach(element => {
        console.log(element);
    });
}



// 2. Create functions for gettting current date, calculating discount amount and export them.

function getCurrentDate(){
    return new Date();
}

function calculating(amount,discount){
    if(amount < discount){
        console.log("Discount amount should not be less than acutal amount in calculating");
    }
    return amount - discount;
}

function calculate(amount, discount) {
    if (amount <= 0) {
        console.log("Amount should be greater than 0");
        return false;
    }

    if (discount < 0) {
        console.log("Discount cannot be negative");
        return false;
    }
    if(amount === discount){
        console.log("Amount and discount should not be same");
        return false;
    }
    if (discount > amount) {
        console.log("Discount amount should not be greater than actual amount");
        return false;
    }

    return amount - discount;
}

export {printData,getCurrentDate,calculating,calculate};