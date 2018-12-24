$(document).ready(function() {
    $(".card").mouseover(function() {
         $("#hide_on_hover").css({"display": "none"});
         $("#show_on_hover").css({"display": "flex"});
    });
    
    $(".card").mouseleave(function() {
         $("#show_on_hover").css({"display": "none"});
         $("#hide_on_hover").css({"display": "block"});
     });
    
  
});  


var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    loop:true,
    disableOnInteraction:false,	
    autoplay: 1500,
    paginationClickable: true, 

  });

  mySwiper.stopAutoplay();
  $('.card').on('mouseover', function(e){
      $(".pagination").css({"display": "block"});
      $(".swiper-container").css({"display": "block"});
      $(".thumbnail-image").css({"display": "none"});
       mySwiper.startAutoplay();
  });

  $('.card').on('mouseleave', function(e){
    $(".pagination").css({"display": "none"});
    $(".swiper-container").css({"display": "none"});
    $(".thumbnail-image").css({"display": "block"});
    mySwiper.stopAutoplay();
  });
