console.log('fuck the king!!!');


// 实现一个spacify函数，返回字符串结果，中间增加空格
function spacify(fName) {
    return fName.split('').join(' ');
}

// 在string上增加此方法,直接加在原型上
String.prototype.spacify = function() {
    return this.split('').join(' ');
}


//函数声明和函数表达式，作用域提升，可以在声明前引用