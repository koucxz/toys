"use strict";

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _instanceof(left, right) {
  if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
    return !!right[Symbol.hasInstance](left);
  } else {
    return left instanceof right;
  }
}

function _classCallCheck(instance, Constructor) {
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Point =
/*#__PURE__*/
function () {
  function Point(x, y) {
    // 判断 this 是 Point 的实例
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  // 为 class 添加 prototype 及 static 方法，不可枚举
  _createClass(Point, [{
    key: "getCoord",
    value: function getCoord() {
      return this.x + ',' + this.y;
    }
  }], [{
    key: "sayHello",
    value: function sayHello() {
      console.log('hello');
    }
  }]);

  return Point;
}();

var ColorPoint =
/*#__PURE__*/
function (_Point) {
  // 继承 ColorPoint 的属性和方法
  _inherits(ColorPoint, _Point);

  function ColorPoint(x, y, color) {
    var _this;

    _classCallCheck(this, ColorPoint);

    // 使用 _this 变量, 限制 this 必须在 super 后调用
    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColorPoint).call(this, x, y));
    _this.color = color;

    return _this;
  }

  _createClass(ColorPoint, [{
    key: "getColor",
    value: function getColor() {
      return this.color;
    }
  }]);

  return ColorPoint;
}(Point);
