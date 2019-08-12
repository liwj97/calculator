const headBtn = document.getElementById('headBtn');
const opt = document.getElementById('opt');
const liFirst = document.getElementById('liFirst');

headBtn.onclick = () => {
    opt.style.display = 'block';
}

liFirst.onclick = function () {
    opt.style.display = 'none';
}