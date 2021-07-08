//  ერთი სელექტი იდ გამოყენებით
// let div = document.getElementById("mydiv");

// ვასელექტებთ ელემენტს კლასით / რომელიც მოგვდის ობიექტის სახით 
//let group = document.getElementsByClassName("group");

// ვასელექტებთ ელემენტს ტეგით / რომელიც მოგვდის ობიექტის სახით 
//let tagname = document.getElementsByTagName("div");

//  ერთი სელექტი css სელექტორის გამოყენებით
//let que = document.querySelector(".group");

//  სელექტი css სელექტორის გამოყენებით (მასივს)
 

 

// all.forEach((arr)=>{
//     arr.innerHTML = "ახალი მნიშვნელობა"
// })

//  for (let i = 0; i < tagname.length; i++) {
//      const element = tagname[i];
     
//      element.innerHTML = "ახალი მნიშვნელობა"

//  }

// window.onload = function  () {
 

// }

 

// let buton = document.querySelector(".delimg");


// document.addEventListener("click", function (e){

//     console.log(e.target.innerText)
      
// });

// //  incr/decr

// let plus = document.querySelector(".plus");
// let input = document.querySelector("#numb");
// let minus = document.querySelector(".minus");


// // increments
// plus.addEventListener("click", function ( ) {
//     input.value++;
// })

// // decrements
// minus.addEventListener("click", function ( ) {
//     input.value--;
// })


// let butt = document.querySelector('.changecolor'); 
// let repl = document.querySelector('.repl'); 
// let removeclass = document.querySelector('.removeclass');
// let toggle = document.querySelector('.toggleclass');
// let div = document.querySelector("#testdiv");
// // კლასის დამატება
// butt.addEventListener("click", function () {

//   div.classList.add("bg-red", "text-red")
//     div.style.backgroundColor = "red "
//     div.style.color = "green"
//   })

//   //კლასის წაშლა
//   removeclass.addEventListener("click", function () {

//     div.classList.remove("bg-red")
//   })

//     //კლასის წაშლა/დამატება
//     toggle.addEventListener("click", function () {

//         div.classList.toggle("bg-red")
//  })

//      //კლასის ჩანაცვლება
//      repl.addEventListener("click", function () {

//         div.classList.replace("bg-red", "bg-green")
//  })



//  let menu = document.querySelector("#sidemen");
//  let sidemenu = document.querySelector(".sidemenu");
//  menu.addEventListener("click", function (event) {

//     event.preventDefault();

//     sidemenu.classList.toggle("show");

//    });

//    let closes = document.querySelector(".close");
 
//    closes.addEventListener("click", function () {

//     sidemenu.classList.remove("show");
//      })


// let inp = document.querySelector("#pass");


// function change(val) {

//  if (val  > 20  ) {
//     inp.disabled  = true;
//  }else{
//     inp.disabled  = false;
//  }
 
//   }

let toggles  = document.querySelector(".btn-toggle");
let navs = document.querySelector('.sidenav');
toggles.addEventListener("click", function () {

  this.classList.toggle("show");
  navs.classList.toggle("show");
  })

let addinp = document.querySelector(".newele");
let out = document.querySelector(".htm");


 let ul = document.createElement("ul");

addinp.addEventListener("click", function () {

// let p = document.createElement("p");

let li  = document.createElement("li");
li.classList.add("remove");
li.textContent = list.value;

ul.appendChild(li);
  out.appendChild(ul);

let removes = document.querySelectorAll(".remove");

for (let i = 0; i < removes.length; i++) {
  const element = removes[i];

  element.addEventListener("dblclick", function () {
    this.remove();
    })
  
}

});


let myimg =  document.createElement('img');
myimg.src = 'img/logo.png';
myimg.classList.add('img-fluid');

let p = document.createElement('p');
p.textContent = "შექმნილი პ ტეგი";
let mydiv = document.createElement('div');

 mydiv.appendChild(p);
 mydiv.appendChild(myimg);
 
 out.appendChild(mydiv);





//  დავალება

let myform  = document.querySelector("#appendform");
let myforminpu = document.querySelector("#content");
myform.addEventListener("submit", function (e) {
  e.preventDefault();
  let ul  = document.createElement("ul");
  let li  = document.createElement("li");
 
  li.textContent = myforminpu.value;
  ul.appendChild(li);
  this.appendChild(ul);
  delates();
  });


  // delete

  function delates() { 

 let liarr = document.querySelectorAll("li");
  
 liarr.forEach((els) => {
  els.addEventListener("dblclick", function () { 
    this.remove();
   })
 })

   }




 


let color = document.querySelector('.changecolor');


color.addEventListener("click", function () {
  let luarray  = document.querySelectorAll("#parentsul li")
  let siblli = document.querySelector(".sibl");
 if(siblli.previousElementSibling != null){
  siblli.classList.remove('sibl');
  siblli.previousElementSibling.classList.add("sibl")
 } else{
  luarray[luarray.length - 1].classList.add("sibl");
  luarray[0].classList.remove("sibl");
 }


 

  })


  let siblli = document.querySelector(".sibl");
  let parul  = document.querySelector("#parentsul");
  // siblli.parentNode.style.color = "red"

 console.log(parul.children[1])