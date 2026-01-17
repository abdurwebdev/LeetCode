/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;
  let obj = {};
  let obj2 = {};
  for(let ch of s){
      obj[ch] = (obj[ch] || 0)+1;
  }
  for(let ch of t){
      obj2[ch] = (obj2[ch] || 0)+1;
  }

  for(let val in obj){
      if(obj[val]!==obj2[val]){
          return false;
      }
  }
  return true;

};