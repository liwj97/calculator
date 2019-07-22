var oNum = document.querySelectorAll('li.num'); // 获取数字和小数点按钮
var oOperator = document.querySelectorAll('li.operator');   // 获取基本运算符
var back = document.querySelector('.back'); // 获取退格
var clean = document.querySelector('.clean');   // 获取清屏
var ret = document.querySelector('li.ret');     //获取取反按钮
var txt = document.querySelector('#txt');   // 获取输入
var tc = document.querySelector('#tc');     //  获取暂存框
var str = '';   // 创建一个空串
var arr = [];   // 创建一个空数组

// 遍历数字和小数点
for(let i=0 ; i<oNum.length ; i++){
    /* 给数字和小数点绑定点击效应事件 */
    oNum[i].onclick = function(){
        if( this.innerHTML === '.' && txt.value === '' ){    // 如果输入的是数字或点
            txt.value = '0.';
        }else if( txt.value.indexOf('.') != -1){    // 如果已经有小数点了
                    if( this.innerHTML != '.'){
                        txt.value += this.innerHTML;    // 输入非小数点时
                    }
                }else{  // 如果没有小数点
                    txt.value += this.innerHTML;
                }
    }
}

// 遍历基本运算符
for(let i=0 ; i<oOperator.length ; i++){
    oOperator[i].onclick = function(){
         /* 判断输入等号为一类，其他基本运算符为一类 */
        if( this.innerHTML != '='){     //输入非等号的符合时
                arr.push(txt.value);    // 把数字存入数组
                arr.push(this.innerHTML);   // 把符号存入数组
                tc.value = txt.value + this.innerHTML;  //输入内容添加到暂存框
                txt.value = '';     // 清屏
        }else{      // 输入等号
            arr.push(txt.value);     // 再把数字存入数组
            tc.value = '';      //清空暂存区 
            txt.value = eval(arr.join(''));  // 计算
            arr = [];    // 清理数组,便于下次计算
        }
    }
}
// 取反
ret.onclick = function(){
    txt.value = ~txt.value;
}
// 退格事件
back.onclick = function(){
    txt.value = txt.value.substr(0 , txt.value.length-1)
}
// 清屏事件
clean.onclick = function(){
    arr = [];
    txt.value = '';
}
