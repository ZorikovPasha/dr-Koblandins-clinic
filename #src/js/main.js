$(function(){
  
  $('.reviews__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    dots: true,
    arrows: false,
    autoplay: 3000,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
        }
      }
    ]

  });
});