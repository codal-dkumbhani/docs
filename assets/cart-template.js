$(document).ready(function () {
  $('#subtotal1').bind('DOMSubtreeModified', function () {
    var subtotalValue = $('#subtotal1').text();
    var subtotalLength = $('.sub-total-value').length;

    $('.sub-total-value').text(subtotalValue);
  });

  var pcount = $('.cart-summary-top').attr('data-product-count');

  $('.cart-summary-top').css({
    display: 'none',
  });

  $(window).scroll(function () {
    var width = $(window).width();
    var scrollTop = $('.cart-page').outerHeight(true);

    if (width < 768) {
      $('.cart-summary-top').css({
        display: 'block',
      });

      if ($(window).scrollTop() <= 100) {
        $('.cart-summary-top').css({
          display: 'none',
        });
      }
    }
  });
});
