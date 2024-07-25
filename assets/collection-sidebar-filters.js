var WinWidth;
$(document).ready(function () {
  WinWidth = $(window).width();
  CheckfixSpace();
});

$(window).resize(function () {
  WinWidth = $(window).width();
  CheckfixSpace();
});

function CheckfixSpace() {
  if (WinWidth >= 768) {
    var HeaderHeight = $('.sticky-header').outerHeight();
    $('#FilterDrawer').css('top', HeaderHeight + 'px');
  }
}
