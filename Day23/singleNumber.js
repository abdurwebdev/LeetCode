/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let ans = 0;
  for(let val of nums){
   ans^=val;
  }
  return ans;
};