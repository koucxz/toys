function isFunction (obj) {
  return typeof obj === 'function'
}

function isThenable (obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && 'then' in obj
}

module.exports = {
  isFunction,
  isThenable
}
