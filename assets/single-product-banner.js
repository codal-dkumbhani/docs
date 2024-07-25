function adjustElements() {
  if (window.innerWidth < 600) {
    const h1Elements = document.querySelectorAll('.explore-collection-content h1');
    const divElements = document.querySelectorAll(
      '.left-section.position-relative .explore-collection-content'
    );
    h1Elements.forEach(function (h1Element, index) {
      const childNodeCount = h1Element.childNodes.length;
      if (childNodeCount >= 5) {
        divElements[index].style.setProperty('top', '63px', 'important');
        console.log(divElements[index].style.top);
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', adjustElements);
window.addEventListener('resize', adjustElements);
