export function isFunction (obj) {
  return typeof obj === 'function'
}

export function isThenable (obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'
}

export function isPromise (obj) {
  return isThenable(obj) && typeof obj.catch === 'function'
}
