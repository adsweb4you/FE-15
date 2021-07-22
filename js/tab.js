let tabs = document.querySelectorAll('.tabslist');

// for (let i = 0; i < tabs.length; i++) {
//     const tab = tabs[i];
//     tab.addEventListener("click",  function () {
      
//         let active = document.querySelector('.tabslist.active');
//         let activecontent  = document.querySelector('.tabscontent.active');


//         let dataid = this.getAttribute('data-id');


//         active.classList.remove('active');
//         activecontent.classList.remove('active');
        
//         this.classList.add("active")
      
//         document.querySelector('#'+dataid).classList.add("active")

//     }) 
// }

tabs.forEach(els => {
    els.addEventListener("click",  function () {
      
        let active = document.querySelector('.tabslist.active');
        let activecontent  = document.querySelector('.tabscontent.active');


        let dataid = this.getAttribute('data-id');


        active.classList.remove('active');
        activecontent.classList.remove('active');
        
        this.classList.add("active")
      
        document.querySelector('#'+dataid).classList.add("active")

    }) 
})


// for (let s = 0; s <  3000; s++) {
   
//     let span = document.createElement('div');
//     span.classList.add("sad")
    
//     document.body.appendChild(span)
// }


let checkrem  = document.querySelector('#rem');

window.addEventListener('mousemove', function (e) {

  if (!checkrem.checked) {
    let div = document.createElement('div');
    div.classList.add('clear');
    div.style.position = "absolute";
    div.style.left = e.screenX + "px";
    div.style.top = e.clientY + "px";
    div.style.backgroundColor = "black";
    div.style.width ="20px";
    div.style.height ="20px";
    div.style.borderRadius ="50px";

    document.body.appendChild(div);
  }

  let clear = document.querySelectorAll('.clear');

  let checldiv = document.getElementsByClassName('clear').length;
 
  for (let s = 0; s < clear.length; s++) {
      const element = clear[s];

      if (checkrem.checked) {
        element.addEventListener('mousemove', function () {
          
    
            this.remove();
         
    
        })
    }

      
  }

if (checldiv  == 0) {
    alert('წაიშალა')
    checkrem.checked = false
}   
console.log(checldiv);
 
})