function login() {
    var email = "rahul@gmail";
    var password = "Rahul@01";

    if (email.length > 0 && password.length > 7) {

        if (isEmailValid(email)) {
            console.log("Login Success");
        }else{
            console.log("Login Failed");
        }

    } else {
        console.log("Please enter some data");
    }
}

function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(email)) {
        console.log("Please enter a valid email");
        return false;
    }

    return true;
}

function isValidIndianMobile(mobile) {
    const regex = /^[6-9]\d{9}$/;
    return regex.test(mobile);
}
console.log(isValidIndianMobile("9963178796")); // true


function getCurrentdate(){
    console.log("Date");
    return new Date();
}

//login();

var API_URL = "http://localhost:8080";

function checkLoginCookies(){
    console.log("No issues found");
}

export{isEmailValid,isValidIndianMobile,getCurrentdate, API_URL};

export default checkLoginCookies;