//Task: 1. Create functions for follow, unfollow in instagram.

function insta(str){

    if(str.toLowerCase() == "follow"){
        console.log("Follow");
    }else{
        console.log("Unfollow")
    }
}

function instagram(str){

    if(str){
        console.log("Follow");
    }else{
        console.log("Unfollow")
    }
}

insta("Follow");
instagram(false);



//  2. Create functions for add-to-cart, add-to-wishlist in amazon


function addToCart(...items) {
    return items;
}

function addToWishList(str){
    return str;
}

console.log(addToCart("iPhone", "Samsung", "iQOO"));
console.log(addToWishList("iPhone"));