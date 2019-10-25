function _new(Ctor, ...arg){
  _new.target = Ctor
  
  const obj = Object.create(Ctor)
  /** const obj = {}
   * Object.setPrototypeOf(obj, fn.prototype) */ 
  
  const result = Ctor.apply(obj, arg)

  return typeof result === 'object' ? result : obj
}
