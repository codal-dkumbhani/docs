document.addEventListener('DOMContentLoaded', function () {
  // Select all images with the specified class
  const images = document.querySelectorAll(
    '.grid-product__image.grid-product__image--product-grid-item-3.lazyload.hvr-grow.bts'
  );
  images.forEach((img) => {
    // Get the widths and src template from the data attributes
    const widths = JSON.parse(img.getAttribute('data-widths'));
    const srcTemplate = img.getAttribute('src');

    // Generate the srcset attribute
    const srcset = widths
      .map((width) => {
        return srcTemplate?.replace('{width}', width) + ` ${width}w`;
      })
      .join(', ');

    // Set the srcset attribute on the image
    img.setAttribute('srcset', srcset);
  });
});
