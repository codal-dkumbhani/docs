$(document).ready(function () {
  var callbackfunctioncall = function callbackfunctioncall() {
    $('.grid-product__colors a.color-swatch').on('click', function () {
      let WinWidth = $(window).width();
      let Variant_Url = $(this).attr('data-variant-url');
      let Variant_Id = $(this).attr('data-variant-id');
      let Grid_Product_Color_Image = '.grid-product__color-image--' + Variant_Id;
      let divcountId = $('.grid-product__color-image--' + Variant_Id).length;
      if (WinWidth < 768) {
        location.replace(Variant_Url);
      }
      $('.grid-product__colors a').removeClass('selected-variant-list');
      $(this).addClass('selected-variant-list');
      let productId = $(this).attr('data-product-id');
      $('#' + productId).val($(this).attr('data-variant-id'));
      $('.grid-product__image-mask .grid-product__color-image').removeClass('selected-data');
      if (divcountId > 1) {
        $('div' + Grid_Product_Color_Image).each(function (i) {
          $(Grid_Product_Color_Image).addClass('selected-data');
        });
      } else {
        $(Grid_Product_Color_Image).addClass('selected-data');
      }
    });

    $('.grid-product__colors a.color-swatch--with-image').on('mouseenter', function () {
      let Variant_Id = $(this).attr('data-variant-id');
      let Variant_Image = $(this).attr('data-variant-image');
      let Grid_Product_Color_Image = '.grid-product__color-image--' + Variant_Id;
      let divcountId = $('.grid-product__color-image--' + Variant_Id).length;

      if (divcountId > 1) {
        $('div' + Grid_Product_Color_Image).each(function (i) {
          $(Grid_Product_Color_Image).css('background-image', 'url(' + Variant_Image + ')');
          $(Grid_Product_Color_Image).addClass('is-active');
        });
      } else {
        $(Grid_Product_Color_Image).css('background-image', 'url(' + Variant_Image + ')');
        $(Grid_Product_Color_Image).addClass('is-active');
      }
    });

    $('.color-swatch--with-image').on('mouseleave', function () {
      let Variant_Id = $(this).attr('data-variant-id');
      let Grid_Product_Color_Image = '.grid-product__color-image--' + Variant_Id;
      $(Grid_Product_Color_Image).removeClass('is-active');
    });

    $('.grid__item:not(.aos-init)').addClass('aos-init aos-animate');
  };
  var endlessScroll = new Ajaxinate({
    container: '#Huratips-Loop',
    pagination: '#Huratips-Pagination',
    callback: callbackfunctioncall,
  });

  $('.grid__item').each(function () {
    if (!$(this).hasClass('aos-init')) {
      $(this).addClass('aos-init').addClass('aos-animate');
    }
  });
});
