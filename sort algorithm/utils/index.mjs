export function isArray (arr) {
  return Object.prototype.toString.call(arr) === "[object Array]"
}

export function checkArray (arr) {
  if (!isArray(arr)) throw new Error("Parameter array is not an Array!")
}

export function swap (arr, left, right) {
  [arr[left], arr[right]] = [arr[right], arr[left]]
}
