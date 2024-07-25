$(function () {
  $('#reset_customer_password').submit(function (e) {
    if (
      $('input[name="customer[password]"]').val() !=
      $('input[name="customer[password_confirmation]"]').val()
    ) {
      e.preventDefault();
      alert('Passwords do not match.');
    }
  });
});
