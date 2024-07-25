/*============================================================================
  Auto-select gift card code on click, based on ID passed to the function
    - Use a different method depending on IE or others
==============================================================================*/
function selectText(element) {
  var doc = document,
    text = doc.getElementById(element);

  if (doc.body.createTextRange) {
    // ms
    var range = doc.body.createTextRange();
    range.moveToElementText(text);
    range.select();
  } else if (window.getSelection) {
    // moz, opera, webkit
    var selection = window.getSelection(),
      range = doc.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
  }
}
