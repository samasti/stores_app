// From https://github.com/riot/riot/issues/218#issuecomment-74028610
'use strict';

riot.tag('raw', '<div></div>', function (opts) {
  var _this = this;

  this.set = function () {
    _this.root.childNodes[0].innerHTML = opts.html;
  };
  this.on('update', this.set);
  this.on('mount', this.set);
});