---
---
// From https://github.com/riot/riot/issues/218#issuecomment-74028610
riot.tag('raw', '<div></div>', function(opts) {
  this.set = () => { this.root.childNodes[0].innerHTML = opts.html }
  this.on('update', this.set)
  this.on('mount', this.set)
})
