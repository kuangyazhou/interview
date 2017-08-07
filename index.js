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

//数组去重,将方法赋于Array原型链上

Array.prototype.repeat = function() {
    var original = this;
    if (original.length < 1) return;
    var data = [];
    for (i = 0; i < original.length; i++) {
        if (data.indexOf(original[i]) == -1) {
            data.push(original[i]);
        };
    }
    return data;
}

var a = [1, 3, 2, 2, 3, 3, 4, 6, 6];
console.log(a.repeat());


// 运行上下文
var User = {
    count: 1,
    getCount: function() {
        return this.count;
    }
}
console.log(User.getCount());
var func = User.getCount();
console.log(this, func());
// 输出结果为1和undefined func被调用时，运行上下文为window，不是User;

// 原型绑定，将user作为运行上下文;
var func = User.getCount().bind(User);

//综合类知识
function Foo() {
    getName = function() { alert(1); }
    return this;
}

Foo.getName = function() { alert(2) };
Foo.prototype.getName = function() { alert(3) };
var getName = function() { alert(4) };

function getName() { alert(5) };

//输出
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();


//arguments 转Array

var arrArgs = Array.prototype.splice.call(arguments);