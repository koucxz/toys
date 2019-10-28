function cloneDeep (obj, stack = []) {
  if (typeof obj === 'null') return obj
  if (typeof obj !== 'object') return obj
  const existedObjIdx = stack.indexOf(obj)
  if (existedObjIdx !== -1) {
    return stack[existedObjIdx]
  }
  stack.push(obj)
  const result = Object.prototype.toString.call(obj) === '[object Array]' ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const val = obj[key]
      result[key] = cloneDeep(val, stack)
    }
  }
  return result
}
