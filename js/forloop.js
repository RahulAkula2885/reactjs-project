//for loop
console.log("------------------ For loop --------------------");

var courses =["React.js","Java", "Springboot", "AWS"];

console.log(courses);

for(let i =0; i < courses.length;i++){
    console.log(courses[i]);
}

//while lopp
console.log("------------------ While loop --------------------");
var index =0;
while(index < courses.length){
     console.log(courses[index]);
     index++;
}

//continue
console.log("------------------ Continue --------------------");

for(let i =0; i < courses.length;i++){

    if(courses[i] == "Java"){
        continue;
    }
    console.log(courses[i]);
}


//break
console.log("------------------ Break --------------------");

for(let i =0; i < courses.length;i++){

    if(courses[i] == "Java"){
        break;
    }
    console.log(courses[i]);
}


var youtube =[
    {
        title: "Mix - Akon - Lonely (Official Music Video)",
        views: "1M"
    },
    {
        title: "Capgemini Java Interview | Spring Boot | Microservices | Scenario based question",
        views: "1.5M"
    },
    {
        title: "Youtube video3",
        views: "2M"
    },
     {
        title: "Youtube video4",
        views: "2.1M"
    },
     {
        title: "Youtube video5",
        views: "3M"
    }
];


for(var i =0; i < youtube.length; i++){

    if(youtube[i].views == "2M"){
        console.log("Youtube title:- " + youtube[i].title);
        break;
    }
}

console.log("------------------ For Each --------------------");

//forEach

var tech =["React", "A", "B", "C", "D"];
tech.forEach(element => {
    console.log(element);
});


console.log("------------------ Map --------------------");

var products = [
    {
        title: "iPhone",
        price: 100000,
        rating : 4.5
    },
    {
        title: "Samsung",
        price: 25000,
        rating : 4
    },
    {
        title: "Moto",
        price: 10000,
        rating : 3.5
    },
    {
        title: "Iq00",
        price: 20000,
        rating : 3.5
    },
    {
        title: "Oppo",
        price: 10000,
        rating : 3
    }
];

var titles = products.map(p =>{
   return p.title + "," + p.price; 
})

console.log(titles);


console.log("------------------ Filter --------------------");

var priceFilter = 10000;
products.filter(a=>{
    if(a.price == priceFilter){
        console.log(a);
    }
})

console.log("------------------ Ascending Order --------------------");

var asc = products.sort((a,b) =>{
    if(a.price < b.price){
        return -1;
    }
})

console.log(asc);


const ascProducts = [...products].sort((a, b) => a.rating - b.rating);

console.log("Ascending Order:");
console.log(ascProducts);

console.log("------------------ Descending Order --------------------");

var desc = products.sort((a,b) =>{
    if(a.price >  b.price){
        return -1;
    }
})
console.log(desc);

// Descending order (highest to lowest rating)
const descProducts = [...products].sort((a, b) => b.rating - a.rating);

console.log("Descending Order:");
console.log(descProducts);