// 判断是移动端还是PC端
if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
} else {
  // 仅 PC 端执行
  // 获取弹窗
  const modal = document.getElementById("myModal");
  // 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
  const modalImg = document.getElementById("img01");
  const captionText = document.getElementById("caption");
  // 获取 <span> 元素，设置关闭按钮
  const span = document.getElementsByClassName("close")[0];

  // 触发弹窗
  modal.style.display = "block";
  //modalImg.src = "/img/calculator.png";
  modalImg.setAttribute(
    "src",
    "https://i.loli.net/2020/07/17/75GDBTvLpo3s8ju.png"
  );
  captionText.innerHTML = "建议使用微信扫二维码查看";

  // 当点击 (x), 关闭弹窗
  span.onclick = function () {
    modal.style.display = "none";
  };
}
