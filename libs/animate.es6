---
---

$.fn.extend({
  animateCss: function (animationNames, callback) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
    if (!Array.isArray(animationNames)) animationNames = [animationNames]

    this.addClass('animated')
    animationNames.forEach(function (e, index, array) {
      this.queue(function (next) {
        $(this).addClass(e).one(animationEnd, function () {
          $(this).removeClass(e)
          if (typeof(callback) === 'function' && index === array.length - 1) {
            callback()
          }
          next()
        })
      })
    }, this)
    return this
  }
})
