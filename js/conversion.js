const oNum = document.getElementsByClassName('num');        // 获取数组字按钮
const oDt = document.getElementsByClassName('dtBtn');       // 获取bin-oct-dec-hex
const oLetter = document.getElementsByClassName('letter');  // 获取A-F按钮
const oNum2Bin = document.getElementsByClassName('num2bin');    // 获取num2bin按钮
const eightAndNine = document.getElementsByClassName('eightAndNine');    // 获取8和9按钮
/* 获取4个输出框 */
const bin = document.getElementById('bin');              
const oct = document.getElementById('oct');
const dec = document.getElementById('dec');
const hex = document.getElementById('hex');
/* 获取清屏 、退格*/
const clear = document.getElementById('clear');
const back = document.getElementById('back');

/* 进制转换函数 */
function dec2(decNum) {     /* 十进制转其他进制 */
    return [
        Number(decNum).toString(2),
        Number(decNum).toString(8),
        Number(decNum).toString(16)
    ];
}
function bin2(binNum) {     /* 二进制转其他进制 */
    return [
        parseInt(binNum , 2).toString(8),
        parseInt(binNum , 2).toString(10),
        parseInt(binNum , 2).toString(16)
    ]
}
function oct2(octNum) {     /* 八进制转其他进制 */
    return [
        parseInt(octNum , 8).toString(2),
        parseInt(octNum , 8).toString(10),
        parseInt(octNum , 8).toString(16)
    ]
}
function hex2(hexNum) {     /* 十六进制转其他进制 */
    return [
        parseInt(hexNum , 16).toString(2),
        parseInt(hexNum , 16).toString(8),
        parseInt(hexNum , 16).toString(10)
    ]
}

/* 样式函数 */
function borderStyle(a,b,c) {       /* 进制转换按钮边框样式 */
    for (let i = 0; i < oDt.length; i++) {
        oDt[a].style.borderLeft = '4px solid #ffffff';
        oDt[b].style.borderLeft = '4px solid #ffffff';
        oDt[c].style.borderLeft = '4px solid #ffffff';
    }
}
function noBtnStyle(item) {       /* 不可选 */
    for (let j = 0; j < item.length; j++) {
        item[j].style.backgroundColor = 'rgb(250,251,252)';
        item[j].style.color = 'rgb(200,202,201)';
        item[j].onmouseover = function () {this.style.backgroundColor = 'rgb(250,251,252)';}
        item[j].onmouseout = function () {this.style.backgroundColor = 'rgb(250,251,252)';}
        item[j].onmousedown = function () {this.style.backgroundColor = 'rgb(250,251,252)';}
        item[j].onmouseup = function () {this.style.backgroundColor = 'rgb(250,251,252)';}
    }
}
function btnStyle(item) {      /* 可选 */
    for (let j = 0; j < item.length; j++) {
        item[j].style.backgroundColor = '#ffffff';
        item[j].style.color = '#000000';
        item[j].onmouseover = function () {this.style.backgroundColor = '#e9e9e9';}
        item[j].onmouseout = function () {this.style.backgroundColor = '#ffffff';}
        item[j].onmousedown = function () {this.style.backgroundColor = '#cacaca';}
        item[j].onmouseup = function () {this.style.backgroundColor = '#e9e9e9';}
    }
}

function inputInit() {      /* 初始化input内容 */
    bin.value = '0';
    oct.value = '0';
    dec.value = '0';
    hex.value = '0';
}

function conversion(arrList , decimal , item1 , item2 , item3 , decimalFun) {   /* 进制转换功能 */
    for (let i = 0; i < arrList.length; i++) {
        arrList[i].onclick = function () {
            if (decimal.value === '0') {
                decimal.value = this.innerHTML;
            }else {
                decimal.value += this.innerHTML;
            }
            item1.value = decimalFun(decimal.value)[0];
            item2.value = decimalFun(decimal.value)[1];
            item3.value = decimalFun(decimal.value)[2];
        }
    }
}

conversion(oNum,dec,bin,oct,hex,dec2);  /* 默认以十进制开始（功能） */

/* 控制bin-oct-dec-hex样式和功能 */
for (let i = 0; i < oDt.length; i++) {
    oDt[i].onclick = function () {
        this.style.borderLeft = '4px solid #b92c28';
        if (i === 0) {                                  /* HEX */
            borderStyle(1,2,3)
            btnStyle(oLetter);
            btnStyle(oNum2Bin);
            btnStyle(eightAndNine);
            inputInit();
            let hexBtn = [];
            for (let j = 0; j < oNum.length; j++) {
                hexBtn.push(oNum[j]);
            }
            for (let j = 0; j < oLetter.length; j++) {
                hexBtn.push(oLetter[j]);
            }
            conversion(hexBtn,hex,bin,oct,dec,hex2);
            back.onclick = function () {
                hex.value.length === 1 ? hex.value='0' : hex.value = hex.value.substring(0 , hex.value.length-1);
            }
        } else if (i === 1) {                           /* DEC */
            borderStyle(0,2,3);
            noBtnStyle(oLetter);
            btnStyle(oNum);
            inputInit();
            conversion(oNum,dec,bin,oct,hex,dec2);
            // 退格事件
            back.onclick = function () {
                dec.value.length === 1 ? dec.value='0' : dec.value = dec.value.substring(0 , dec.value.length-1);
            }
        }else if (i === 2) {                         /* OCT */
            borderStyle(0,1,3);
            noBtnStyle(oLetter);
            btnStyle(oNum2Bin);
            noBtnStyle(eightAndNine);
            inputInit();
            let octBtn = [];
            for (let j = 0; j < oNum.length; j++) {
                octBtn.push(oNum[j]);
            }
            octBtn.splice(1,2);
            conversion(octBtn,oct,bin,dec,hex,oct2);
            back.onclick = function () {
                oct.value.length === 1 ? oct.value='0' : oct.value = oct.value.substring(0 , oct.value.length-1);
            }
        }else if (i === 3) {                                /* BIN */
            borderStyle(0,1,2)
            noBtnStyle(oLetter);
            noBtnStyle(oNum2Bin);
            inputInit();
            let binBtn = [];
            for (let j = 0; j < oNum.length; j++) {
                binBtn.push(oNum[j]);
            }
            binBtn.splice(0 , 6);
            binBtn.splice(1 , 2);
            conversion(binBtn,bin,oct,dec,hex,bin2);
            // 退格事件
            back.onclick = function () {
                bin.value.length === 1 ? bin.value='0' : bin.value = bin.value.substring(0 , bin.value.length-1);
            }
        }
    }
}
// 退格事件
back.onclick = function () {
    dec.value.length === 1 ? dec.value='0' : dec.value = dec.value.substring(0 , dec.value.length-1);
}
// 清屏事件
clear.onclick = function () {
  inputInit();
}

