/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num===0) return num;
  return 1 + (num-1) %9;
};