function _new(){
  var obj = {}
  var Ctor = Array.prototype.shift.call(arguments)

  obj.__proto__ = Ctor.prototype
  var result = Ctor.apply(obj, arguments)

  return typeof result === 'object' ? result : obj
}
