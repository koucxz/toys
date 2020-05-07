export default arrayFrom = (arrayLike /*, mapFn, thisArg */) => {
  if (arrayLike === null) {
    throw new TypeError("Cannot convert undefined or null to object")
  }

  const mapFn = arguments.length > 1 ? arguments[1] : null
  const thisArg = arguments.length > 2 ? arguments[2] : undefined

  const len = parseInt(arrayLike.length)

  let result = []

  for (let i = 0; i < len; i++) {
    const val = arrayLike[i]
    if (mapFn) {
      result[i] = thisArg ? mapFn(val, i) : mapFn.call(thisArg, val, i)
    } else {
      result[i] = val
    }
  }

  return result
}
