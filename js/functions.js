

function login(){
    var email = "rahul@gmail.com";
    var password = "Rahul@01";

    if(email.length > 0 && password.length > 7){
        console.log("Login Success")
    }else{
        console.log("Please enter some data");
    }
}


function signup(){
    var email = "rahul@gmail.com";
    var password = "Rahul@01";
    var name = "Rahul"
    var mobile = 9963178796

    if(email.length > 0 && password.length > 7 && name.length > 2 && mobile.length ==10 ){
        console.log("Signup")
    }else{
        console.log("Please enter some data");
    }
}

var fullName1 = concat("Rahul", "rao1");

console.log(fullName1);

function concat(str1,str2){
    return str1 + " " + str2;
}

var fullName = concat("Rahul", "rao");

console.log(fullName);

var concat = (str1,str2) => console.log(str1 + " " + str2);

concat("James", "John");

login();
signup();