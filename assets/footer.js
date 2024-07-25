$(document).ready(function () {
  $(document).on('click', '.osono-click-event', function () {
    Osano.cm.showDrawer('osano-cm-dom-info-dialog-open');
  });

  $(document).on('click', '.cart-main-image-popup', function () {
    $('.customizer-cart-img-loader').addClass('open');

    event.preventDefault();
    var frontImage = $(this).attr('data-imagefront');
    var backImage = $(this).attr('data-imageback');

    var b = $(this).attr('data-url');
    $('.customizer-cart-image-modal .modal-body .front-img img').attr('src', frontImage);
    $('.customizer-cart-image-modal .modal-body .back-img img').attr('src', backImage);
    $('.customizer-cart-image-modal .modal-header-right a').attr('href', b);
    $('.customizer-cart-image-modal, .customizer-cart-imagedoogma-modal').addClass('show');
    popupImageLoaded();
  });

  function popupImageLoaded() {
    var popImage = false;
    var x = 0;
    var popImageLoaded = setInterval(function () {
      var popupFrontImageLoaded = false;
      var popupBackImageLoaded = false;

      if (
        $('.customizer-cart-image-modal .front-img img').prop('complete') == true &&
        $('.customizer-cart-image-modal .front-img img').prop('naturalWidth') !== 0
      ) {
        popupFrontImageLoaded = true;
      } else {
        $('.customizer-cart-image-modal .front-img img').attr(
          'src',
          $('.customizer-cart-image-modal .front-img img').attr('src').split('?')[0] + `?v=123`
        );
        popupFrontImageLoaded = false;
      }

      if (
        $('.customizer-cart-image-modal .back-img img').prop('complete') == true &&
        $('.customizer-cart-image-modal .back-img img').prop('naturalWidth') !== 0
      ) {
        popupBackImageLoaded = true;
      } else {
        $('.customizer-cart-image-modal .back-img img').attr(
          'src',
          $('.customizer-cart-image-modal .back-img img').attr('src').split('?')[0] + `?v=123`
        );
        popupBackImageLoaded = false;
      }

      if (++x > 15) {
        if (popupFrontImageLoaded == true && popupBackImageLoaded == true) {
          $('.customizer-cart-img-loader').removeClass('open');
          clearInterval(popImageLoaded);
          console.log('Interval Stop');
        }
      }
    }, 100);
  }

  $('.customizer-cart-image-modal .switch-button .cart-popup-modal-checkbox').change(function () {
    if ($(this).prop('checked') == true) {
      $('.customizer-cart-image-modal .modal-body .back-img').show();
      $('.customizer-cart-image-modal .modal-body .front-img').hide();
    } else {
      $('.customizer-cart-image-modal .modal-body .back-img').hide();
      $('.customizer-cart-image-modal .modal-body .front-img').show();
    }
  });

  $('.customizer-cart-image-modal .close, .customizer-cart-image-modal .modal-footer .btn').click(
    function () {
      $('.customizer-cart-image-modal, .customizer-cart-imagedoogma-modal').removeClass('show');
    }
  );

  $(document).on('click', '.color-swatch-change', function () {
    var a = $(this).attr('data-name');
    str = a.replace(/ /g, '');
    var b = $(this).closest('.main-top-grid').find('.cust-btns a').attr('href');
    console.log(b);
    if (b) {
      b = b.split('?')[0];

      var c = b + '?data-variant=' + str;
      $(this).closest('.main-top-grid').find('.cust-btns a').attr('href', c);
    }
  });
});
