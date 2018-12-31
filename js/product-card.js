$(document).ready(function() {
     $(".product-card").mouseover(function() {
          $("#hide_on_hover").css({"display": "none"});
          $("#show_on_hover").css({"display": "flex"});
 
         
     });
     
     $(".product-card").mouseleave(function() {
          $("#show_on_hover").css({"display": "none"});
          $("#hide_on_hover").css({"display": "block"});
      });
     
   
 });  
 
 
 var mySwiper = new Swiper('.swiper-container',{
     pagination: '.pagination',
     loop:true,
     disableOnInteraction:false,	
     autoplay: 1200,
     paginationClickable: true, 
 
   });
 
   mySwiper.stopAutoplay();
   $('.product-card').on('mouseover', function(e){
       $(".pagination").css({"display": "block"});
       $("#product-card .swiper-container").css({"display": "block"});
       $(".product-card-thumbnail-image").css({"display": "none"});
        mySwiper.startAutoplay();
   });
 
   $('.product-card').on('mouseleave', function(e){ 
     $(".pagination").css({"display": "none"});
     $("#product-card .swiper-container").css({"display": "none"});
     $(".product-card-thumbnail-image").css({"display": "block"});
     mySwiper.stopAutoplay();
   });