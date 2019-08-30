const headBtn = document.getElementById('headBtn');                 // 获取头部按钮
const opt = document.getElementById('opt');                         // 获取侧栏

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