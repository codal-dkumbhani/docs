'use strict';
var Ajaxinate = function (config) {
  var settings = config || {},
    defaultSettings = {
      pagination: '.AjaxinatePagination',
      method: 'scroll',
      container: '.AjaxinateLoop',
      offset: 0,
      loadingText: 'Loading',
      callback: null,
    };
  (this.settings = Object.assign(defaultSettings, settings)),
    (this.addScrollListeners = this.addScrollListeners.bind(this)),
    (this.addClickListener = this.addClickListener.bind(this)),
    (this.checkIfPaginationInView = this.checkIfPaginationInView.bind(this)),
    (this.stopMultipleClicks = this.stopMultipleClicks.bind(this)),
    (this.destroy = this.destroy.bind(this)),
    (this.containerElement = document.querySelector(this.settings.container)),
    (this.paginationElement = document.querySelector(this.settings.pagination)),
    this.initialize();
};
(Ajaxinate.prototype.initialize = function () {
  if (this.containerElement) {
    var initializers = { click: this.addClickListener, scroll: this.addScrollListeners };
    initializers[this.settings.method]();
  }
}),
  (Ajaxinate.prototype.addScrollListeners = function () {
    this.paginationElement &&
      (document.addEventListener('scroll', this.checkIfPaginationInView),
      window.addEventListener('resize', this.checkIfPaginationInView),
      window.addEventListener('orientationchange', this.checkIfPaginationInView));
  }),
  (Ajaxinate.prototype.addClickListener = function () {
    this.paginationElement &&
      ((this.nextPageLinkElement = this.paginationElement.querySelector('a')),
      (this.clickActive = !0),
      this.nextPageLinkElement !== null &&
        this.nextPageLinkElement.addEventListener('click', this.stopMultipleClicks));
  }),
  (Ajaxinate.prototype.stopMultipleClicks = function (event) {
    event.preventDefault(),
      this.clickActive &&
        ((this.nextPageLinkElement.innerHTML = this.settings.loadingText),
        (this.nextPageUrl = this.nextPageLinkElement.href),
        (this.clickActive = !1),
        this.loadMore());
  }),
  (Ajaxinate.prototype.checkIfPaginationInView = function () {
    var top = this.paginationElement.getBoundingClientRect().top - this.settings.offset,
      bottom = this.paginationElement.getBoundingClientRect().bottom + this.settings.offset;
    top <= window.innerHeight &&
      bottom >= 0 &&
      ((this.nextPageLinkElement = this.paginationElement.querySelector('a')),
      this.removeScrollListener(),
      this.nextPageLinkElement &&
        ((this.nextPageLinkElement.innerHTML = this.settings.loadingText),
        (this.nextPageUrl = this.nextPageLinkElement.href),
        this.loadMore()));
  }),
  (Ajaxinate.prototype.loadMore = function () {
    (this.request = new XMLHttpRequest()),
      (this.request.onreadystatechange = function () {
        if (this.request.readyState === 4 && this.request.status === 200) {
          var newContainer = document.createElement('div');
          newContainer.innerHTML = this.request.responseText;

          var newContainerElement = newContainer.querySelectorAll(this.settings.container)[0];
          var newPaginationElement = newContainer.querySelectorAll(this.settings.pagination)[0];

          this.containerElement.insertAdjacentHTML('beforeend', newContainerElement.innerHTML);
          this.paginationElement.innerHTML = newPaginationElement.innerHTML;

          if (this.settings.callback && typeof this.settings.callback == 'function') {
            this.settings.callback(newContainer);
          }

          this.initialize();
        }
      }.bind(this));

    this.request.open('GET', this.nextPageUrl);
    this.request.send();
  });
(Ajaxinate.prototype.removeClickListener = function () {
  this.nextPageLinkElement.addEventListener('click', this.stopMultipleClicks);
}),
  (Ajaxinate.prototype.removeScrollListener = function () {
    document.removeEventListener('scroll', this.checkIfPaginationInView),
      window.removeEventListener('resize', this.checkIfPaginationInView),
      window.removeEventListener('orientationchange', this.checkIfPaginationInView);
  }),
  (Ajaxinate.prototype.destroy = function () {
    var destroyers = { click: this.removeClickListener, scroll: this.removeScrollListener };
    return destroyers[this.settings.method](), this;
  });
//# sourceMappingURL=/s/files/1/0382/4185/files/ajaxinate.js.map?937=
