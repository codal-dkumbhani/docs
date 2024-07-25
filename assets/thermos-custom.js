let winWidth;
$(document).ready(function () {
  winWidth = $(window).width();
  headerSpace();
});

$(window).resize(function () {
  winWidth = $(window).width();
  headerSpace();
});

function headerSpace() {
  let headerHeight = $('.sticky-header').outerHeight();
  $('.main-content').css('padding-top', headerHeight + 'px');
}

// js for the color slider on icon-series page
$(document).ready(function ($) {
  $('.icon-category .prev').click(function () {
    var slider = $('.icon-category #slider');
    var slideWidth = slider.find('.slide').outerWidth(true);
    slider.scrollLeft(slider.scrollLeft() - (slideWidth + 20));
  });

  $('.icon-category .next').click(function () {
    var slider = $('.icon-category #slider');
    var slideWidth = slider.find('.slide').outerWidth(true);
    slider.scrollLeft(slider.scrollLeft() + (slideWidth + 20));
  });
  if ($(window).width() > 1024) {
    // assuming desktop width is greater than 768px
    if ($('.icon-category .icon-categorycolors').children().length <= 6) {
      $('.icon-category #slider').css('overflow-x', 'hidden');
      $('.icon-category button.next, .icon-category button.prev').css('display', 'none');
    } else {
      $('.icon-category .slider li.slide').css('flex-shrink', '0');
    }
  }
});
