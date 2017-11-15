function factorial(num) {
    if (num <= 1) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
};
//此处factorial与内部factorial耦合

//利用arguments.callee获得函数名

function fac(num) {
    if (num <= 1) {
        return 1;
    }
    else {
        return num * arguments.callee(num - 1);
    }
}

function sum(num1, num2) {
    return num1 + num2;
}

//函数callsum想使用sum方法，但又不想自己写;

function applysum(num1, num2) {
    console.log(this);
    console.log(sum.apply(null, arguments));
    return sum.apply(this, arguments);
}

function callsum(num1, num2) {
    console.log(this);
    console.log(sum.call(null, num1, num2));
    return sum.call(this, num1, num2);
}

//遍历字符在字符串中出现的所有位置

let strValue="lorem psum dolor sit amet ,consectetur adipisicing elit";
let pos=strValue.indexOf('e');
let arr=[];

// for(pos;pos<strValue.length;pos+1){
    // arr.push(strValue.indexOf('e',pos+1));
    // pos=strValue.indexOf('e',pos+1);
// }
while(pos>-1){
    arr.push(pos);
    pos=strValue.indexOf('e',pos+1);
}
console.log(arr,strValue.trim());

function currentMonth(){
    const date=new Date();
}