
function login(){

    var email = "rahul@gmail.com";
    var password = "Rahul@01";

    validate(email,password,loginApiCall)
    
}

function signup(){
    var email = "rahul@gmail.com";
    var password = "Rahul@01";
    var name = "Rahul";
    var mobile = "9963178796";

    validate(email,password,signUpApiCall)

    if(email.length > 0 && password.length > 7 && name.length > 2 && mobile.length == 10 ){
        console.log("Signup")
    }else{
        console.log("Please enter some data signup");
    }
}

function resetPassword(){
     var email = "rahul@gmail.com";

     if(email.length > 0){
        console.log("New Password sent to your email")
    }else{
        console.log("Please enter some data");
    }
}

function logout(){
    console.log("Logout");
}

function loginApiCall(){
    console.log("Login Success");
}
function signUpApiCall(){
    console.log("Sign up API call Success");
}

function validate(email,password,funcnCall){

     if(email.length > 0 && password.length > 7){
        console.log("Met Expectations")
        funcnCall()
    }else{
        console.log("Please enter some data validate");
    }

}

login();
signup();