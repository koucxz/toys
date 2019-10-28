// 寄生式继承
function inherits(subType, superType){
  const prototype = Object.create(superType.prototype)
  prototype.constructor = subType
  subType.prototype = prototype
}

// es5 模拟实现 es6 extends 简单版本
function _inherits(subClass, superClass) {
  const prototype = Object.create(superClass.prototype)
  prototype.constructor = subClass
  subClass.prototype = prototype
  Object.setPrototypeOf(subClass, superClass) // subClass.__proto__ === superClass
  _inheritsStaticProps(subClass, superClass)
}

function _inheritsStaticProps (subClass, superClass) {
  const staticKeys = Object.keys(superClass) // 获取可枚举属性
  for (let i of staticKeys) {
    subClass[i] = superClass[i]
  }
}
