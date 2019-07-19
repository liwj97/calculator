// 获取除退格和清屏的其他按钮
var li = document.querySelectorAll('li.item');
// 获取退格
var back = document.querySelector('.back');
// 获取清屏
var clean = document.querySelector('.clean');
// 获取input的value
var input = document.querySelector('input');
// 创建一个空串
var str = '';
// 创建一个空数组
var arr = [];

// 遍历
for(let i=0 ; i<li.length ; i++){
    // 绑定点击效应事件
    li[i].onclick = function(){
        /* 判断，数字和点为一类；其他为另一类 */
        // 如果输入的是数字或点
        if( this.innerHTML === '.' && input.value === '' ){
            //
            input.value = '0.';
        }else if( !isNaN(this.innerHTML) || this.innerHTML === '.'){
            
            if( input.value.indexOf('.') != -1){
                // 如果已经有小数点了

                if( this.innerHTML != '.'){
                    // 输入非小数点时
                    input.value += this.innerHTML;
                }
            }else{  // 如果没有小数点
                input.value += this.innerHTML;
            }
        }else if( this.innerHTML != '='){   //输入非等号的其他符合时
            // 把数字存入数组
            arr.push(input.value);
            // 把符号存入数组
            arr.push(this.innerHTML);
            // 清屏
            input.value = '';
        }else{      // 输入等号
            // 再把数字存入数组
            arr.push(input.value);
            // 计算
            input.value = eval(arr.join(''));
            // 清理数组,便于下次计算
            arr = [];
        }
    }
}

//退格事件
back.onclick = function(){
    input.value = input.value.substr(0 , input.value.length-1)
}

//清屏事件
clean.onclick = function(){
    arr = [];
    input.value = '';
}



