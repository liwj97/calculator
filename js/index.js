const oNum = document.getElementsByClassName('num');                 // 获取数字和小数点
const oOperator = document.getElementsByClassName('operator');      // 获取基本运算符
const ret = document.getElementById('ret');                         // 获取取反按钮
const clear = document.getElementById('clear');                     // 获取清屏按钮
const back = document.getElementById('back');                     // 获取退格按钮
const inOut = document.getElementById('inOut');                     // 获取输出文本框
const tem = document.getElementById('tem');                         // 获取暂存框

let arr = [];       //

/* 给数字和小数点绑定点击效应事件 */
for (let i = 0; i < oNum.length; i++) {
    oNum[i].onclick = function () {
        if(inOut.value === '0'){
            inOut.value = this.innerHTML;
        }else
        // 控制乱输入小数点
        if (this.innerHTML === '.' && inOut.value === '') {
            inOut.value = '0.'
        } else if (inOut.value.indexOf('.') != -1) {           // 如果文本框中已有小数点
            if (this.innerHTML != '.') {
                inOut.value += this.innerHTML;
            }       // 输入数字时直接拼接
        } else {     // 否则直接拼接
            inOut.value += this.innerHTML;
        }
    }
}

/* 给基本运算符绑定点击效应事件 */
for (let i = 0; i < oOperator.length; i++) {
    oOperator[i].onclick = function () {
        /* 判断输入等号为一类，其他基本运算符为一类 */
        if (this.innerHTML != '=') {     //输入非等号的符合时
            if(inOut.value != ''){
                arr.push(inOut.value);    // 把数字存入数组
                arr.push(this.innerHTML);   // 把符号存入数组
                tem.value = inOut.value + this.innerHTML;  //输入内容添加到暂存框
                inOut.value = '';     // 清屏
            }
            if(tem.value != '' && inOut.value === ''){      // 额，可改变运算符
                tem.value = arr[0] + this.innerHTML;
                arr[1] = this.innerHTML;
            }
        } else if(this.innerHTML === '='){      // 输入等号
            arr.push(inOut.value);     // 再把数字存入数组
            tem.value = '';      //清空暂存区
            inOut.value = eval(arr.join(''));  // 计算
            arr = [];    // 清理数组,便于下次计算
        }
    }
}

// 取反
ret.onclick = function () {
    inOut.value = ~inOut.value + 1;
}
// 退格事件
back.onclick = function () {
    inOut.value = inOut.value.substr(0, inOut.value.length - 1)
}
// 清屏事件
clear.onclick = function () {
    arr = [];
    inOut.value = '';
    tem.value = '';
}



