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
   

//  array

let animal = ["dog", "cat", "lion", "dog", "cow", "zazuna", 15 , 55, 60, 20];


//animal.push([66, 77]); // ახალი ელემენტის ჩამატება მასივის ბოლოს
//animal.unshift(12); // ახალი ელემენტის ჩამატება მასივის დასაწისში
// animal.pop();// შლის ბოლო ელემენტს
// animal.shift() // შლის მასივის პირველ ელემენტს
//animal.slice(2) // შლის მასივის ელემენტებს თავიდან (პარამეტრის მიხედვით)
//animal.splice(1, 2, "cat2"); // პირველი პარამეტრი აღნიშნავს საიდან უნდა დაიწყოს ჭრა, მეორე პარამეტრი რამდენი ელემენტი 
//უნდა მოიჭრას , ელემენტის ჩამატება



let findedname = animal.filter(findname);

let retvalue = findedname[0];

function  findname(array) {
    return array == "zazuna";
}


function upper(val) {

 
   let findedname = animal.filter((array) =>{
    return array == val;
   });

//    if (findedname.length > 0) {
//     document.getElementById("search").innerHTML  = findedname[0]
//    }else{
//     document.getElementById("search").innerHTML  = "ტექსტი ვერ მოიძებნა"
//    }
   
    }



  // user.innerHTML = animal[0]  + "<br>";
//   user.innerHTML += animal[1] + "<br>";
//   user.innerHTML += animal[2] + "<br>";
//   user.innerHTML += animal[3] + "<br>";
//   user.innerHTML += animal[4] + "<br>";
//   user.innerHTML += animal[5] + "<br>";
// console.log(animal.length)


// for (let i = 0; i < animal.length; i++) {
//     const element = animal[i];
    
//     user.innerHTML += `<p> ${element.replaceAll('a', '*')}  </p>`  ;
// }


//  let sus = document.getElementById("inp").value;

 

 

// for (let s = 0; s < animal.length; s++){

// }

let stud = [
    "testi",
    25,
    "testi2",
    25,
]


let ages =  stud.filter(findage);

function findage(stuts) {
     return  stuts == 25;
}






for (let i = 0; i < ages.length; i++) {
    const element = ages[i];
    

    document.getElementById("search").innerHTML += element;
}


let agess = [100, 20, 2000, 1002, 66, 870];

let names = ["ანა", "ლანა", "სადსად"];

let united = agess.concat(names);


console.log(united);

// თუ 1 წევრი მაინც აკმაყოფილებს პირობას
let checkage = agess.some((arr) => {
    return arr > 80;
})

// თუ ყველა  წევრი აკმაყოფილებს პირობას
let checkswe = agess.every((arr) => {
    return arr > 10;
})

// filter მსგავსია თუმცა აბრუნებს პირველივე ელემენტს მარცხნიდან რომელიც პირობას აკმაყოფილებს
let fins = agess.find((arr) => {
    return arr > 10;
})

console.log(agess.sort(fil).reverse()) ;

function fil(a , b) {
    return a - b;
}

// let newag  =  agess.forEach((els) => {
//      return els * 2;
//   })

// let newag  = agess.map((els) => {
//     return els * 2;
// })

// for (let l = 0; l < newag.length; l++) {
//     const element = newag[l];
    
// console.log(element);
// }




let Product =  [
    {name:"iphone 11", ram:"4GB", rom:"120GB", color:"black", screen:"6 inch", img:"https://assets.swappie.com/iPhone-11-Pro-space-gray-back.png", price:1500},
    {name:"iphone 9", ram:"7GB", rom:"100GB", color:"red", screen:"5 inch", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX5LZSNhnqUR4PrY54mOc2P4AJVlrB0GJM2g&usqp=CAU", price:1000},
    {name:"iphone 6", ram:"6GB", rom:"64GB", color:"blue", screen:"7 inch", img:"https://www.gizmochina.com/wp-content/uploads/2020/04/cats-500x500.jpg", price:1000},
    {name:"iphone 6", ram:"7GB", rom:"16GB", color:"mate black", screen:"2 inch", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKtDOhInGBoBF0KsdF0f8cdBfUXoLHQcyQFw&usqp=CAU", price:1600},
    {name:"iphone 12", ram:"84GB", rom:"80GB", color:"white", screen:"4 inch", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXEE52sCLK1mdEzIRX1Zc3sXvb203svXmqw&usqp=CAU", price:280},
    {name:"iphone 15 pro", ram:"49GB", rom:"90GB", color:"gold", screen:"7 inch", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ICdjiWkMlF6VTuV3p9yQ6h9BuE0F0ZvAag&usqp=CAU", price:488},
]


let form = document.getElementById("search");

// console.log(myprice);

let viewprod = document.getElementById("prods");

form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    let price_from = document.getElementById("price_from").value;
    let price_to = document.getElementById("price_to").value;

    let myprice  = Product.filter((produc) => {
        return produc.price  >=  price_from && produc.price  <= price_to ;
    })
    
     viewprod.innerHTML = '';
    
    myprice.forEach((arr) => {
    
    

        viewprod.innerHTML += `<div class="col-md-4 mb-3"> <div class="card">
      <img src="${arr.img}" class="card-img-top" alt="..." style="height:350px; object-fit:contain">
      <div class="card-body">
        <h5 class="card-title">${arr.name}</h5>
        <p class="card-text">${arr.ram}</p>
        <p class="card-text">${arr.rom}</p>
        <p class="card-text">${arr.color}</p>
        <p class="card-text">${arr.screen}</p>
        <p class="badge bg-success">${arr.price} ₾</p>
         
        </div>
      </div>
    </div>` 
    
      
    })

})
 

let newdate = new Date();


newdate.setMonth((newdate.getMonth() + 1) + 1);
newdate.setDate(newdate.getDate() + 5);
// let spdata = newdate.toString().split(" ");

// function trans() {
//   if (spdata[0] == 'Sun') {
//     return "კვირა"
// }  
// }


console.log(newdate.getDate())


// setInterval(() => {
//      let time = new Date();
//     document.getElementById("clock").innerHTML  = `${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}| ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
// }, 1000)