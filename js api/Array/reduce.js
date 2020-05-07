/**
 * fn (accumulator, value, index, sourceArray) {}
 * initialValue
 */
export default function reduce (fn/*, initialValue */) {
  if (typeof this === "undefined" || this === null) {
    throw new Error("Cannot convert undefined or null to object")
  }
  if (typeof fn !== 'function') {
    throw new Error
  }

  let result = arguments.length > 1 ? arguments[1] : void undefined
  const arr = this
  arr.forEach((el, idx) => {
    result = fn(result, el, idx, arr)
  })

  return result
}
