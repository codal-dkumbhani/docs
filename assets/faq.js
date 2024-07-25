$(document).ready(function () {
  $('.span-faq-minus-icon').hide();

  $(document).on('click', '.faq-footer-wrap .faq-footer #back-to-top-txt', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });

  $(document).on('click', '.faq-item .faq-question', function () {
    $(this).find('.span-faq-plus-icon .faq-plus-icon').toggle();
    $(this).find('.span-faq-minus-icon').toggle();
  });
});
