//  let nav =  document.querySelector("nav");
//  let circe =  document.querySelector(".circle");


//  window.addEventListener("scroll", function(event){
//    if(this.scrollY > 50){
//     nav.style.backgroundColor = "red";
//    }else{
//     nav.style.backgroundColor = "black";
//    }
//  })


//  window.addEventListener("mousemove", function(event){
//    console.log(event.screenX,  event.screenY)

//    circe.style.left = event.screenX + "px";
//    circe.style.top = event.screenY + "px";
//   })


// let btn  = document.querySelector(".subm");

// btn.addEventListener("click", function(){

//     let price = 5;

//     let weight = document.querySelector("#weight").value;
//     let count = document.querySelector("#count").value;

//     let sum  = ( price * Number(weight) ) * Number(count);
//     output.innerText = sum + "₾";
 

// })

let  x;
 
let string = '55';
let numb = 55;
let functio = function (){}; // *
let array = [1,2];
let obj = {};
let undefin = undefined;
let nul = null;
let bool = true;
let boolfal = false;
let nan = NaN;
let img = 'img/logo.png';
let img2 = 'img/partner.png';
// console.log(5 == 5)

// document.getElementById("output").innerHTML = `<img src="${img2}">`;

 


//  let test = 45;


function procent(price,  discaunt){

return  (price - discaunt) / price * 100;

}


// console.log(procent(100, 40));


let products =  [
    {price:250, disc:245},
    {price:300, disc:287},
    {price:350, disc:20},
    {price:900, disc:35},
    {price:45, disc:35},
]

function calculate(){

   for (let i = 0; i < products.length; i++) {
    const prod = products[i];

    document.getElementById("output").innerHTML  += `<p class="act"> ${procent(prod.price, prod.disc).toFixed(0)} %  <p>`;
    document.getElementById("output").style.opacity = "1";
    document.getElementById("output").style.transition = "all .9s";
} 

}


 


// ითვლის სტრინგში სიმბოლოების რაოდენობას
//teststring.length

// ეძებს სიტყვას და გვიბრუნებს  რომელ ინდექსზე მდებარეობს
//teststring.indexOf("testi")


// ეძებს ბოლო  სიტყვას და გვიბრუნებს  რომელ ინდექსზე მდებარეობს
//teststring.lastIndexOf("ენდ")


// ეძებს სიტყვას და გვიბრუნებს  რომელ ინდექსზე მდებარეობს
//teststring.search("ენდ")

// პირველი დადებითი პარამეტრი იწყებს ჭრას  მარცხნიდან , მეორე დადებითი პარამეტრი იწყებს ჭრას მარცხნიდან და იღებს 
//ინდექს
//teststring.slice(10, 15)

// ეძებს ყველა არსებულ სიტყვას და ანაცვლებს ახლით
//teststring.replace(/ანა/g, "ქეთანა") | teststring.replaceAll("ანა", "ქეთანა")

// ეძებს პირველ  არსებულ სიტყვას და ანაცვლებს ახლით
//teststring.replace(/"ანა", "ქეთანა")

//   სტრინგის სიმბოლოების გადიდება დაპარავება 
//teststring.toLoverCase(/"ანა", "ქეთანა") //teststring.toUpperCase(/"ანა", "ქეთანა")

// შლის ცარიელ სფეისებს მარცხენა და მარჯვენა მხრიდან
//teststring.trim().length

// გადაცემული პარამეტრის მიხედვით ყოფს სტრინგს და ქმნის მასივად
//teststring.split("|")

let teststring = "მე | ვარ ფრონტ | ენდ დეველოპერი ";

 



function upper(event){
    console.log(event.path[0].offsetTop) 
}


 
let test2 = 15.754444;

// test1 = Number(test1)

 
let User = {
    names:"დავითი",
    email:"info@itstep.ge",
    avatar:"img/logo.png",
    role:{
    admin:false,
    menager:false,
    },
    age:25,
    candelate:  function() {
         let  userprop = `
         <div style="background-color:#ccc; padding:35px">
         <p>მომხმარებლის სახელი ${this.names} </p>
         <p>მომხმარებლის ელ:ფოსტა ${this.email} </p>
         <img src='${this.avatar}'>
         <p>მომხმარებლის ასაკი ${this.age} წლის </p>
         </div>
         `;

         return userprop;
    }
}


let arrfunc = (sakjd, sakfj, aslfk) => {

}

//  console.log()
User.candelate("25")
 document.getElementById("sad");
 