/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  let newarr = [];
  for(let i =0;i<n;i++){
      newarr.push(nums[i]);
      newarr.push(nums[i+n])
  }
  return newarr;
};