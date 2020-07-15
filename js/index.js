const oNum = document.getElementsByClassName("num"); // 获取数字和小数点
const oOperator = document.getElementsByClassName("operator"); // 获取基本运算符
const ret = document.getElementById("ret"); // 获取取反按钮
const clear = document.getElementById("clear"); // 获取清屏按钮
const back = document.getElementById("back"); // 获取退格按钮
const inOrOut = document.getElementById("inOrOut"); // 获取输出文本框
const record = document.getElementById("record"); // 获取暂存框

let arr = []; //

/* 给数字和小数点绑定点击效应事件 */
for (const item of oNum) {
  item.addEventListener("click", () => {
    console.log(item.innerHTML);
    // 控制乱输入小数点
    if (inOrOut.value === "0" && item.innerHTML === ".") {
      inOrOut.value = "0.";
    }
    if (inOrOut.value === "0") {
      inOrOut.value = item.innerHTML;
    } else if (inOrOut.value.indexOf(".") != -1) {
      // 如果文本框中已有小数点
      if (item.innerHTML != ".") {
        inOrOut.value += item.innerHTML;
      } // 输入数字时直接拼接
    } else {
      // 否则直接拼接
      inOrOut.value += item.innerHTML;
    }
  });
}

/* 给基本运算符绑定点击效应事件 */
for (const item of oOperator) {
  item.addEventListener("click", () => {
    console.log(item.innerHTML);
    /* 判断输入等号为一类，其他基本运算符为一类 */
    if (item.innerHTML !== "=") {
      //输入非等号的符合时
      if (inOrOut.value !== "" && record.value === "") {
        arr.push(inOrOut.value); // 把数字存入数组
        arr.push(item.innerHTML); // 把符号存入数组
        record.value = inOrOut.value + item.innerHTML; //输入内容添加到暂存框
        inOrOut.value = "0"; // 清屏
      }
      if (record.value !== "" && inOrOut.value === "0") {
        // 可改变运算符
        record.value = arr[0] + item.innerHTML;
        arr[1] = item.innerHTML;
      }
    } else if (item.innerHTML === "=") {
      // 输入等号
      arr.push(inOrOut.value); // 再把数字存入数组
      record.value = ""; //清空暂存区
      inOrOut.value = eval(arr.join("")); // 计算
      arr = []; // 清理数组,便于下次计算
    }
  });
}

// 取反
ret.onclick = function () {
  inOrOut.value = ~inOrOut.value + 1;
};
// 退格事件
back.onclick = function () {
  inOrOut.value = inOrOut.value.substr(0, inOrOut.value.length - 1);
  if (!inOrOut.value) {
    inOrOut.value = "0";
  }
};
// 清屏事件
clear.onclick = function () {
  arr = [];
  inOrOut.value = "0";
  record.value = "";
};
