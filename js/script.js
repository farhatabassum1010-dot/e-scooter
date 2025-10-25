$('.counter').counterUp({
    delay: 10,
    time: 1000
});


//---------aos animation-------//
 AOS.init();

 //-------slider
  $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
});