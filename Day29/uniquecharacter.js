/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let obj = {};
  for(let val of s){
      obj[val] = (obj[val] || 0) + 1;
  }

  for(let i = 0;i<s.length;i++){
      if(obj[s[i]]===1){
          return i;
      }
  }
  return -1
};