Function.prototype.myApply = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Applied item must be a function')
  }
  context._fn = this || window
  let result
  if (arguments[1]) {
    result = context._fn(...arguments[1])
  } else {
    result = context._fn()
  }
  delete context._fn
  return result
}

Function.prototype.myCall = function (context) {
  let args = Array.from(arguments)
  if (args.length > 1) {
    return this.myApply(context, args.slice(1))
  } else {
    return this.myApply(context)
  }
}
