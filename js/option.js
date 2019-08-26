const headBtn = document.getElementById('headBtn');
const opt = document.getElementById('opt');
const liFirst = document.getElementById('liFirst');

headBtn.onclick = () => {
    opt.style.animation = 'fadeIn 0.5s 1 0s forwards';
}

liFirst.onclick = function () {
    opt.style.animation = 'fadeOut 0.5s 1 0s reverse backwards';
}