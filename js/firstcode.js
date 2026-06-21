console.log("Hii Rahul")

var name ="Rahul";
var email = "rahul@gmail.com";
var mobile = "9963178796";
var password = "Rahul@123";
var address ="Hyderabad";
var pincode = 502300;
var monthlySalary = 100000;
var annualPackage =1500000

console.log(name + " " + email + " " + mobile + " " + password + " " + address + " " + pincode + " "+ monthlySalary + " " + annualPackage);


var productId = 1;
var title ="Iphone";
var price =100000;

console.log(productId +" " + title + " " + price);

title ="Samsung";
price = 70000;

console.log(productId +" " + title + " " + price);

var firstName = "Rahul";
var lastName ="Rao";
var fullName = firstName + " " + lastName;
console.log(fullName);

var tech = "React.js,Java,SpringBoot,Node.js,Git,GitHub";
tech = tech.split(",");
console.log(tech);
console.log(tech.length);

let productPrice = 20000;
var discount = 2000;
productPrice =10000;

console.log(productPrice);

var sellingPrice = productPrice -discount;
console.log(sellingPrice);


tech.forEach(element => {
    console.log(element);
});

let num =1;

console.log(num++);
console.log(++num);

for (let i = 0; i < tech.length; i++) {
    console.log(tech[i]);
}

tech.trimStart;
console.log(tech)


console.log("----------------- '=== (Strict Equality) — Preferred' --------------")

console.log(5 === 5);      // true
console.log(5 === "5" );   // false (number vs string)
console.log(true === 1);   // false (boolean vs number)


console.log("----------------- '== (Loose Equality) — Usually Avoid' --------------")

console.log(5 == 5);      // true
console.log(5 == "5" );   // true
console.log(true == 1);   // true
console.log("" == 0);      // true

//For most modern JavaScript code, developers recommend using === and !== instead of == and !=.