# extends

### 构造函数 与 class 的差别
1. class 的声明类似let, 存在 TDZ;
2. class 声明内部会启用严格模式;
3. class 的所有方法(包括静态方法和实例方法)都不可枚举;
4. class 的所有方法（包括静态方法和实例方法）都没有原型对象 prototype，所以也没有\[[construct]]，不能使用 new 来调用;
5. 必须使用 new 调用 class;
6. class 内部无法重写类名。

### es6 与 es5 原型式继承的差别
1. 子类可以直接通过 \__proto__ 寻址到父类;
2. class 中的 static 属性及方法可通过 extends 继承，es5 无 static 概念。

### babel 实现
[class extends babel online](https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=MYGwhgzhAEAKD2BLAdgF2gbwFDWseyEqATgK7CrzHQAUAHgDTQCeAlJjrtKgBaIQA6OtAC80OgG5OuXvwHNRLKbgC-nAOYBTVAGF4VACa122AJDFtpYsm59BwgNTQA5A2fQnswc05rcRMFREYGgIMGYACU0QEHhjDlN8QngQTQFY9RpnHmjY51ZfLDUsUEgYPVjiBBR0TTpUTWQDGGq0DlwkojIKKlpGFiZ8SpNpUNIAB01ieiY2ZS4vASHesWXieb9oLV0U3poRrmgLVCsbRbXClSA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.6.4&externalPlugins=)

注释见[babel-extends.js](./babel-extends.js), 核心原理与 index 相同，在组合寄生继承基础上，将 \__proto__ 设为 superClass, 并启用严格模式, 用 Object.defineProperty 实现了方法的不可枚举, 检查 instance 判断使用 new 调用类, TDZ 和类名重写并未处理。

### 感谢
[前端100问第 7 期：ES5/ES6 的继承除了写法以外还有什么区别？](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/20)

[babel](https://babeljs.io/)
