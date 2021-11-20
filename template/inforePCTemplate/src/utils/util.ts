/**
 * 分转化为元 - 正则解决精度
 * @param {*} fen
 * @returns
 */
//  export const regFenToYuan = (fen: number) =>{
//     let num = fen * 0.01
//     let nums = String(num)
//     let reg = nums.indexOf('.') >-1 ? /(\d{1,3})(?=(?:\d{3})+\.)/g : /(\d{1,3})(?=(?:\d{3})+$)/g
//     nums = nums.replace(reg, '$1')
//     num = toDecimal2(nums)
//     return num
// }
/**
 * 强制保留2位小数，如：2，会在2后面补上00.即2.00
 * @param {*} x
 * @returns
*/
export const toDecimal2 = (x: any) => {
  const f = parseFloat(x);
  if (isNaN(f)) {
    return false;
  }
  const p = Math.round(x * 100) / 100;
  let s = p.toString();
  let rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
}
export const regFenToYuan = (fen: any): number =>{
  let num = fen
  num = fen * 0.01
  num = String(num)
  const reg = num.indexOf('.') >-1 ? /(\d{1,3})(?=(?:\d{3})+\.)/g : /(\d{1,3})(?=(?:\d{3})+$)/g
  num = num.replace(reg, '$1')
  num = toDecimal2(num)
  return num
}
/**
 * 元转分 - 解决精度问题 yuan:要转换的钱，单位元； digit：转换倍数
 * @param {*} yuan
 * @param {*} digit
 * @returns
*/
export const regYuanToFen = (yuan: any, digit: any): number =>{
  let m=0
  const s1=yuan.toString()
  const s2=digit.toString()
  try{
    m += s1.split('.')[1].length
  }catch (e) {
    console.log(e)
  }
  try{
    m += s2.split('.')[1].length
  }catch(e){
    console.log(e)
  }
  return Number(s1.replace('.',''))*Number(s2.replace('.',''))/Math.pow(10,m)
}
/**
 *身份证校验
 *
 * @static
 * @param {*} val 号码
 * @returns
 * @memberof OtherMgr
 */
export const CheckIdNumber = (code: string) => {
  {//此版仅校验长度，无法检查校验码 2021-7-6
    // const intNum = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;//支持一代（15位）和二代（18位）身份证
    // if (!intNum.test(val + '')) {  //校验不成功
    //     return '请填写正确的“身份证号”！';
    // }
    // return '';
  }
  const format = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/;
  //号码规则校验
  if (!format.test(code)) {
    return '请填写正确的“身份证号”';
  }
  //区位码校验
  //出生年月日校验   前正则限制起始年份为1900;
  const year = code.substr(6, 4),//身份证年
    month = code.substr(10, 2),//身份证月
    date = code.substr(12, 2),//身份证日
    time = Date.parse(month + '-' + date + '-' + year),//身份证日期时间戳date
    now_time = Date.parse(new Date().toString()),//当前时间戳
    dates = new Date(parseInt(year), parseInt(month), 0).getDate();//身份证当月天数
  if (time > now_time || parseInt(date) > dates) {
    return '请填写正确的“身份证号”';
  }
  //校验码判断
  const cArr = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];//系数
  const b = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];//校验码对照表
  const id_array = code.split('');
  let sum = 0;
  for (let k = 0; k < 17; k++) {
    sum += parseInt(id_array[k]) * cArr[k];
  }
  if (id_array[17].toUpperCase() != b[sum % 11].toUpperCase()) {
    return '请填写正确的“身份证号”';
  }
  return ''
}