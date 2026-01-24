/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  let ans = "";
  for(let i =0;i<address.length;i++){
      ans+=address[i].replace(".","[.]");
  }
  return ans;
};