const sideBtn = document.getElementById("sideBtn");
const aside = document.getElementById("aside");

// 侧栏滑入滑出动画
sideBtn.addEventListener("click", () => {
  if (aside.style.animation === "") {
    aside.style.animation = "fadeIn 0.5s 1 0s forwards";
  } else {
    aside.style.animation = "fadeOut 0.5s 1 0s reverse backwards";
    setTimeout(function () {
      aside.style.animation = "";
    }, 800);
  }
});
