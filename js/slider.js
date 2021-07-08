let left = document.querySelector(".swith.left");
let right = document.querySelector(".swith.right");
let allslider  = document.querySelectorAll(".slider-item");

// მარჯვნივ გადართვა
right.addEventListener("click", function (e) {
      e.preventDefault();
    let activeslider = document.querySelector('.active');
 
    if (activeslider.nextElementSibling != null) {
    activeslider.classList.remove('active');
    activeslider.nextElementSibling.classList.add('active');
    }else{
        allslider[allslider.length - 1].classList.remove('active');
        allslider[0].classList.add('active');
    }
 
  })


  // მარცხნივ გადართვა
  left.addEventListener("click", function (e) {
 
    e.preventDefault();
  let activeslider = document.querySelector('.active');
 
  if (activeslider.previousElementSibling != null) {
  activeslider.classList.remove('active');
  activeslider.previousElementSibling.classList.add('active');
  }else{
      allslider[0].classList.remove('active');
      allslider[allslider.length - 1].classList.add('active');
  }

})