$(function () {

//  $('.imngs').on("click",function (e) {  
//      //$('#myimg').hide(5000);
//      //$('#myimg').slideUp(5000);
//      $('#myimg').fadeOut('slow');
//  })

//  $('.imngshow').on("click",function (e) {  
//     //$('#myimg').show(1000);  
//     //$('#myimg').slideDown(5000);
//     $('#myimg').fadeIn('slow');
// })

// $('.imngtog').on("click",function (e) {  
//     //$('#myimg').toggle(1000); 
//     //$('#myimg').slideToggle(1000) ;
//     $('#myimg').fadeToggle('slow');
// })

let s = 0;

$(document).on("submit", ".myform", function (e) { 
       e.preventDefault();
    let  myname = $("#myname").val();
    let  myemail = $("#myemail").val();
    let  mytext = $("#mytext").val();

 
    $('.list-inline').append(`
 
  <li class="text-white list-inline-item d-flex justify-content-between mb-3 rounded p-3 bg-dark" 
  data-id="${s}"
  data-name="${myname}"
  data-email="${myemail}"
  data-text="${mytext}"
  > <span class="chantext"> ${myname} </span>
 <div class="d-flex ">
  <button class="btn btn-success d-block ms-auto edit"    data-id="${s}"><i class="bi bi-pencil-square"></i> </button>
  <button class="btn btn-danger d-block ms-auto delate"   data-id="${s}">   <i class="bi bi-x-circle-fill"> </i></button>
  </div>
  </li>
 
    `)
    s++;
  
    $('.myform')[0].reset();
     
});

// რედაქტირება (ჩასმა)
$(document).on("click", ".edit", function (e) { 
    e.preventDefault();
   
    // ლისთის დეიტა ველიუები
    let data = $("li[data-id="+$(this).attr('data-id')+"]")


    // მნიშვნელობები
    let  myname = data.attr('data-name');
    let  myemail = data.attr('data-email');
    let  mytext = data.attr('data-text');
    

//    ფორმის გადაკეთება განახლების ფორმად
    $('.myform').removeClass('myform').addClass('updateform')

    // ფორმაზე მნიშვნელობების მინიჭება
    $("#myname").val(myname);
    $("#myemail").val(myemail);
    $("#mytext").val(mytext);

    //იდ გაწერა
    $('input[name="id"]').val($(this).attr('data-id'))
 

    $("#send").text("რედაქტირება").removeClass('btn-success').addClass('btn-warning')

});

//რედაქტირება
$(document).on('submit', '.updateform', function(e){
    e.preventDefault();
   //id წამოღება
  let id =  $('input[name="id"]').attr('value');

  // ლისთის დეიტა ველიუები
  let data = $("li[data-id="+id+"]");

  data.attr('data-name', $("#myname").val());
  data.attr('data-email',  $("#myemail").val());
  data.attr('data-text', $("#mytext").val());
  $("li[data-id="+id+"] span").text($("#myname").val());
  

  //    ფორმის გადაკეთება განახლების ფორმად
  $('.updateform').addClass('myform').removeClass('updateform')

  $('.myform')[0].reset();
  $("#send").text("გაგზავნმა").removeClass('btn-warning').addClass('btn-success')
})
 
 //წაშლა

 $(document).on("click", ".delate", function (e) { 
     e.preventDefault();
         // ლისთი 
   $("li[data-id="+$(this).attr('data-id')+"]").remove();
    
 });
})

 