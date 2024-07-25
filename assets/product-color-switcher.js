function initGridProductColors() {
  $('.grid-product__colors')
    .off('click', 'a.color-swatch')
    .on('click', 'a.color-swatch', function () {
      let $this = $(this);
      let WinWidth = $(window).width();
      let Variant_Url = $this.attr('data-variant-url');
      let Variant_Id = $this.attr('data-variant-id');
      let Grid_Product_Color_Image = '.grid-product__color-image--' + Variant_Id;
      let divcountId = $(Grid_Product_Color_Image).length;
      if (WinWidth < 768) {
        location.replace(Variant_Url);
      }
      $('.grid-product__colors a').removeClass('selected-variant-list');
      $this.addClass('selected-variant-list');
      let productId = $this.attr('data-product-id');
      $('#' + productId).val($this.attr('data-variant-id'));
      $('.grid-product__image-mask .grid-product__color-image').removeClass('selected-data');
      if (divcountId > 1) {
        $(Grid_Product_Color_Image).each(function () {
          $(this).addClass('selected-data');
        });
      } else {
        $(Grid_Product_Color_Image).addClass('selected-data');
      }
    });

  $('.grid-product__colors')
    .off('mouseenter', 'a.color-swatch--with-image')
    .on('mouseenter', 'a.color-swatch--with-image', function () {
      let $this = $(this);
      let Variant_Id = $this.attr('data-variant-id');
      let Variant_Image = $this.attr('data-variant-image');
      let Grid_Product_Color_Image = '.grid-product__color-image--' + Variant_Id;
      let divcountId = $(Grid_Product_Color_Image).length;

      if (divcountId > 1) {
        $(Grid_Product_Color_Image).each(function () {
          $(this)
            .css('background-image', 'url(' + Variant_Image + ')')
            .addClass('is-active');
        });
      } else {
        $(Grid_Product_Color_Image)
          .css('background-image', 'url(' + Variant_Image + ')')
          .addClass('is-active');
      }
    });

  $('.grid-product__colors')
    .off('mouseleave', 'a.color-swatch--with-image')
    .on('mouseleave', 'a.color-swatch--with-image', function () {
      let Variant_Id = $(this).attr('data-variant-id');
      let Grid_Product_Color_Image = '.grid-product__color-image--' + Variant_Id;
      $(Grid_Product_Color_Image).removeClass('is-active');
    });

  $('.grid__item:not(.aos-init)').addClass('aos-init aos-animate');
}

$(document).ready(function () {
  initGridProductColors();
});
