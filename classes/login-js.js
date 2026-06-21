import { isEmailValid, isValidIndianMobile, API_URL } from "./util.js";

import checkLoginCookies from "./util.js";

var email = "rahul@gmail.com";
var password = "Rahul@01";
var mobile = "9963178796";

console.log("-----------");
console.log(isEmailValid(email));
console.log(isValidIndianMobile(mobile));
console.log(API_URL + "/");
checkLoginCookies();

