function searchdivtoggle() {
  $('.new-search-bar').toggle('slow', 'swing');
}

$(document).ready(function () {
  if ($('body').hasClass('template-search')) {
    searchdivtoggle();
  }
});
