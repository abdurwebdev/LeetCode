/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x<0) return false;
  let string = x.toString();
  let reverse = "";
  for(let i = string.length-1;i>=0;i--){
      reverse = reverse + string[i]
  }
  return reverse === string
};