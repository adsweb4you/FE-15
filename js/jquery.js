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

$('.imngtog').on("click",function (e) {  
    $('#myimg').css({
        "border-radius":"50px",
        "object-fit":"cover",
        "width":"50%",
    });

$(".imngshow").click(function ( ) { 
 
    $('#myimg').css({
        "border-radius":"",
        "object-fit":"",
        "width":"",
    })
});
 
})

$(".login").click(function (e) { 
    e.preventDefault();
    $('#loginform').css({
        'transform':'translateX(100%)',
        'transition':'all .6s',
    })

    $('#registerform').css({
        'transform':'translateX(0)',
        'transition':'all .6s',
    })

});


$(".regist").click(function (e) { 
    e.preventDefault();
    $('#loginform').css({
        'transform':'translateX(0)',
        'transition':'all .6s',
    })

    $('#registerform').css({
        'transform':'translateX(-100%)',
        'transition':'all .6s',
    })

});


$(".animate p").on("click", function ( ) { 
 
    $(".animate").animate({
        "width": "450px"
    }, 7000 ,  function(){
        $(".animate p:not(.hidecl)").slideUp("slow");
        $(".hidecl").animate({
            "height": "100%",
            "overflow": "inherit",
            "top": "0",
        })
    } )
    
});

$(".stopanim").click(function ( ) { 
    $(".animate").stop();
    
});

let x = 0;

$(".ser").click(function ( ) { 
    
    if (x == 0) {
       
    $(".form1").animate({
        "width":"100%",
        "border-radius":"3px",
    }, 1000, function(){
        $(".under").animate({
            "width":"82%",
        }, 1200);
        
     document.querySelector('.form1').setAttribute('placeholder', 'Search')
    })

    $(this).animate({
        "right":0,
    }, 1000)  
    x = 1;
    }else{ 
      document.querySelector('.form1').setAttribute('placeholder', '')
       
      $(".under").animate({
        "width":"0%",
    }, 1200, function(){
        $(".form1").animate({
            "width":"20%",
            "border-radius":"50px",
        })

        $(".ser").animate({
            "right":"38%",
        })  
    });
    x = 0;
    }

});


$(document).click(function (e) { 
    e.preventDefault();
   // $(".cir").addClass('left'); //კლასის მინიჭება
   //  $(".cir").removeClass('left'); //კლასის წაშლა
  //  $(".cir").toggleClass('left'); // კლასის თოგლი(წაშლა/მინიჭება)
  // $(".cir").hasClass('left') ამოწმებს თუ აქვს კონკრეტული კლასი 
});

let n = 0;
 
    $("#newinput").click(function (e) { 
    e.preventDefault();

    $('.append').prepend('<input type="text" class="form-control removeds  " value="'+n+'" name="" id="">')
    n++;

 

});

 
$("#clear").click(function (e) { 
    e.preventDefault();
    $('.append').remove();
    //$('.append').empty(); // შლის კონტენტს
});

// გახსნა
$(document).on("click", '.removeds', function(){

    let id = $(this).val();
    $('.removed').attr('data-id', id);


    $('.mymodal').animate({
        height:"150px",
    }, 600, function(){
        $('.mymodal button').animate({
            top:"55px"
        })
    })

 
})

// დახურვა
$('.close').click(function (e) { 
    e.preventDefault();
    $('.mymodal button').animate({
       top:"150px"
    }, 600, function(){
        $('.mymodal').animate({
             height:"0px",
        })
    })
});


//წაშლა

$(document).on("click", ".removed", function (e) { 
    e.preventDefault();
    let id = $(this).attr('data-id')
 

    $("input[value='"+id+"']").animate({
        height:"0px",
        padding:"0px",
        "margin-bottom":"0px",
        opacity:"0"
    }, 1000 , function(){
        setTimeout(function(){
              $("input[value='"+id+"']").remove();
        }, 200)
       
    })

   



    $('.mymodal button').animate({
        top:"150px"
     }, 600, function(){
         $('.mymodal').animate({
              height:"0px",
         })
     })
});
 
 
})

 