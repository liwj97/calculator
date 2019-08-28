const oNum = document.getElementsByClassName('num');                 // 获取数字和小数点
const oOperator = document.getElementsByClassName('operator');      // 获取基本运算符
const ret = document.getElementById('ret');                         // 获取取反按钮
const clear = document.getElementById('clear');                     // 获取清屏按钮
const back = document.getElementById('back');                     // 获取退格按钮
const input = document.getElementById('input');                     // 获取输出文本框
const tem = document.getElementById('tem');                         // 获取暂存框
const headBtn = document.getElementById('headBtn');                 // 获取头部按钮
const opt = document.getElementById('opt');                         // 获取侧栏

let arr = [];       //

/* 给数字和小数点绑定点击效应事件 */
for (let i = 0; i < oNum.length; i++) {
    oNum[i].onclick = function () {
        // 控制乱输入小数点
        if (this.innerHTML === '.' && input.value === '') {
            input.value = '0.'
        } else if (input.value.indexOf('.') != -1) {           // 如果文本框中已有小数点
            if (this.innerHTML != '.') {
                input.value += this.innerHTML;
            }       // 输入数字时直接拼接
        } else {     // 否则直接拼接
            input.value += this.innerHTML;
        }
    }
}

/* 给基本运算符绑定点击效应事件 */
for (let i = 0; i < oOperator.length; i++) {
    oOperator[i].onclick = function () {
        /* 判断输入等号为一类，其他基本运算符为一类 */
        if (this.innerHTML != '=') {     //输入非等号的符合时
            arr.push(input.value);    // 把数字存入数组
            arr.push(this.innerHTML);   // 把符号存入数组
            tem.value = input.value + this.innerHTML;  //输入内容添加到暂存框
            input.value = '';     // 清屏
        } else {      // 输入等号
            arr.push(input.value);     // 再把数字存入数组
            tem.value = '';      //清空暂存区
            input.value = eval(arr.join(''));  // 计算
            arr = [];    // 清理数组,便于下次计算
        }
    }
}

// 取反
ret.onclick = function () {
    input.value = ~input.value + 1;
}
// 退格事件
back.onclick = function () {
    input.value = input.value.substr(0, input.value.length - 1)
}
// 清屏事件
clear.onclick = function () {
    arr = [];
    input.value = '';
}

// 侧栏滑入滑出动画
headBtn.onclick = () => {
    if(opt.style.animation === ''){
        opt.style.animation = 'fadeIn 0.5s 1 0s forwards';
    }else {
        opt.style.animation = 'fadeOut 0.5s 1 0s reverse backwards';
        setTimeout(function () {
            opt.style.animation = '';
        },500);
    }
}


