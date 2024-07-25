$(document).ready(function () {
  $('.footer-promotions-section #footer-slick-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.footer-promotions-section a.carousel-control-prev'),
    nextArrow: $('.footer-promotions-section a.carousel-control-next'),
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
  });
});
