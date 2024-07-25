$(document).ready(function () {
  let imageUploadedOrNotCheckFront = false;

  let imageUploaded = setInterval(function () {
    $('.bndlr-inner-products-container').each(function () {
      if ($(this).length > 0) {
        if ($(this).find('.bundle-title-price-main .bndlr-total-price').length === 0) {
          $(this)
            .find('.bndlr-product-names-list')
            .before('<div class="bundle-title-price-main"></div>');

          var b = $(this).find('.bndlr-total-price').clone();

          $(this).find('.bndlr-total-price').remove();

          $(this).find('.bundle-title-price-main').append(b);
          $(this).find('.bundle-title-price-main').prepend('<div>Bundle & Save</div>');
          $('.bndlr-add-to-cart[title="Out of stock"]').text('Sold Out');
          $(this)
            .find('.bndlr-add-to-cart[title="Add to cart"]')
            .prepend(
              '<img src="https://cdn.shopify.com/s/files/1/0577/5559/9042/files/Shape.svg?v=1686637111">'
            );

          $(this)
            .find('.bundle-title-price-main')
            .before('<div class="bundle-content-main"></div>');
        }

        let productTitle = $(this).find('.bundle-title-price-main');

        if (!$(productTitle).parent().is('a')) {
          let productUrl = $(this).find('.bndlr-product-title').attr('href');
          let productImage = $(this).find('.bndlr-bundle-image');

          if (productUrl) {
            productTitle.wrap('<a href="' + productUrl + '"></a>');
            productImage.wrap('<a href="' + productUrl + '"></a>');
          }
        }
      }

      const bundleSections = document.querySelectorAll('.bundle-section-detail');
      bundleSections.forEach((section) => {
        const targetElement = section.querySelector('.bundler-target-element');

        if (!targetElement || targetElement.children.length === 0) {
          section.parentElement.style.display = 'none';
        }
      });
    });

    if (imageUploadedOrNotCheckFront) {
      clearInterval(imageUploaded);
    }
  }, 200);
});
