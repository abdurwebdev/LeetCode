/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let splittedText = s.toLowerCase().replace(/[^a-z0-9]/g,"");
  let palindrome = "";
  for(let i = splittedText.length-1;i>=0;i--){
      palindrome+=splittedText[i];
  }
  if(splittedText===palindrome)
  {
      return `"${palindrome}" is a palindrome`
  }
  else{
      return false
  }
};