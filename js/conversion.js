/* 栈类 */
function Stack(){
    // 栈中的属性
    this.arr = [];

    /* 栈相关的方法 */
    // 1. 压栈操作
    Stack.prototype.push = function (element) {
        this.arr.push(element);
    }

    // 2. 出栈操作
    Stack.prototype.pop = function () {
        return this.arr.pop();
    }

    // 3. peek操作
    Stack.prototype.peek = function () {
        return this.arr[this.arr.length - 1];
    }

    // 4. 判断栈中的元素是否为空
    Stack.prototype.isEmpty = function () {
        return this.arr.length === 0;
    }

    // 5. 获取栈中元素的个数
    Stack.prototype.size = function () {
        return this.arr.length;
    }

    // 6. toString方法
    Stack.prototype.toString = function () {
        let resultString = '';
        for (let i = 0; i < this.arr.length; i++) {
            resultString += this.arr[i];
        }
        return resultString;
    }
}

/* 封装十进制转二进制的函数 */