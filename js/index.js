// 获取所以的li
var li = document.querySelectorAll('li');
//获取input
var text = document.querySelector('input');

var str = '';
//绑定单击响应事件
li[0].onclick = function(){
    str += li[0].innerHTML;
    text.value = str;
}
li[1].onclick = function(){
    str += li[1].innerHTML;
    text.value = str;
}
li[2].onclick = function(){
    str += li[2].innerHTML;
    text.value = str;
}
li[5].onclick = function(){
    str += li[5].innerHTML;
    text.value = str;
}
li[6].onclick = function(){
    str += li[6].innerHTML;
    text.value = str;
}
li[7].onclick = function(){
    str += li[7].innerHTML;
    text.value = str;
}
li[10].onclick = function(){
    str += li[10].innerHTML;
    text.value = str;
}
li[11].onclick = function(){
    str += li[11].innerHTML;
    text.value = str;
}
li[12].onclick = function(){
    str += li[12].innerHTML;
    text.value = str;
}
li[16].onclick = function(){
    str += li[16].innerHTML;
    text.value = str;
}

// 运算符

li[8].onclick = function(){
    // var reg = new RegExp(/\-|\+|\*|\/|\%/); 
    // if(text.value.match(reg)){
    //     text.value = text.value.replace(reg , '+');
    //     var ret = text.value.replace(reg , '+');
    // }else{
        str += li[8].innerHTML;
        text.value = str;
    // }   
}
li[9].onclick = function(){
    str += li[9].innerHTML;
    text.value = str;
}
li[13].onclick = function(){
    str += li[13].innerHTML;
    text.value = str;
}
li[14].onclick = function(){
    str += li[14].innerHTML;
    text.value = str;
}
li[18].onclick = function(){
    str += li[18].innerHTML;
    text.value = str;
}
li[17].onclick = function(){
    str += li[17].innerHTML;
    text.value = str;
}
li[19].onclick = function(){
    text.value = eval(text.value);
}

