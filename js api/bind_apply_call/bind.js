// bind polyfill
Function.prototype.bind = function (content) {
  if (typeof this !== 'function') {
    throw new TypeError('bound item must be a function')
  }
  var fnToBind = this
  var args = Array.prototype.slice.call(arguments, 1)
  
  var fnRes = function() {
    return fnToBind.apply(
      this instanceof fnRes ? this : content,
      args.concat(Array.prototype.slice.call(arguments))
    )
  }
  function fn() {}
  fn.prototype = this.prototype
  fnRes.prototype = new fn()
  
  return fnRes
}
