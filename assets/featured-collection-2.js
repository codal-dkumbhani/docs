$(document).ready(function () {
  if ($.fn.slick) {
    $('#featured-collection-slick-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: $('.carousel-control-prev'),
      nextArrow: $('.carousel-control-next'),
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
    });
  } else {
    console.error('Slick is not loaded');
  }
});
