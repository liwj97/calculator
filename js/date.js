const start = document.getElementById('start');
const end = document.getElementById('end');
const text = document.getElementById('text');

let date = new Date();
let year = date.getFullYear();
let month = (date.getMonth()+1)>=10 ? date.getMonth()+1 : '0'+(date.getMonth()+1);
let day = date.getDate();

/* 初始化时间 */
start.value = `${year}-${month}-${day}`;
end.value = `${year}-${month}-${day}`;

/* 监听事件函数 */
function fun() {
    let d = new Date(start.value.replace(/-/g , '/'));
    let d1 = new Date(end.value.replace(/-/g , '/'));

    let time1 = Math.floor(d.getTime()/(1000*60*60*24));
    let time2 = Math.floor(d1.getTime()/(1000*60*60*24));
    text.value = Math.abs(time1 - time2);
}