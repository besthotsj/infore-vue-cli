const baseSize = 16
function setRem(): void {
  //页面宽度根据1920缩放比例
  const scale = document.documentElement.clientWidth/1920
  document.documentElement.style.fontSize = baseSize * Math.max(scale, 0.5) + 'px'
}
//初始化
setRem()
//改变窗口大小时重新设置rem
// window.onresize = function () {
//   setRem()
// }
window.addEventListener('resize', () => setRem());