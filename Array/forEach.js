/**
 * mapFn (item, index, array) {}
 * thisArg?
 */
export default function forEach (mapFn, thisArg) {
  if (typeof mapFn !== "function") {
    throw new Error(mapFn + "is not a function")
  }
  const arr = this
  for (let i = 0, len = arr.length; i < len; i++) {
    mapFn.call(thisArg, arr[i], i ,arr)
  }
}
