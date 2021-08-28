
$( 'body' ).on('click', '.nav-btn',  function( event ){
$( event.currentTarget ).toggleClass('active');
$('.nav-menu').toggleClass('active');
$( 'body' ).toggleClass('no-scroll');
return false;
});

$( window ).on('resize.myTemplate', function(){
$('body')[ ( $(this).width() <= 767 ) ? 'addClass' : 'removeClass' ]('isMobile')
}).trigger( 'resize.myTemplate' );


$('.owl-carousel.customer-slide').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    dots:false,
    responsive:{
   0:{
       items:1
   },
  
   600:{
       items:2
   },
   1000:{
       items:3
   }
  }
  });
