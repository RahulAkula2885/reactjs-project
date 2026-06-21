class Authentication{

    loginEmail = "login@gmail.com";

     constructor(email){
        this.email = email;
        this.password = "Rahul@01";
     }

login(){

     var email = "rahul@gmail.com";
    // var password = "Rahul@01";

    console.log(this.email , email, this.loginEmail);

     if(this.email.length > 0 && this.password.length > 7){
        console.log("Login Success")
    }else{
        console.log("Please enter some data");
    }
    
}

signup(){
    // var email = "rahul@gmail.com";
    // var password = "Rahul@01";
    var name = "Rahul"
    var mobile = 9963178796

    if(this.email.length > 0 && this.password.length > 7 && name.length > 2 && mobile.length ==10 ){
        console.log("Signup")
    }else{
        console.log("Please enter some data");
    }
}

resetPassword(){
   
     if(this.email.length > 0){
        console.log("New Password sent to your email")
    }else{
        console.log("Please enter some data");
    }
}

logout(){
    console.log("Logout");
}

}

var auth = new Authentication("parameterized@gmail.com");
auth.login();
auth.signup();
auth.resetPassword();
auth.logout();
