# Palindrome Number Checker (JavaScript)

This project contains a simple implementation of a function to check if a given integer is a **palindrome**.

## 📌 Problem Statement
A palindrome is a number that reads the same backward as forward.  
For example:
- `121` → Palindrome ✅  
- `-121` → Not a palindrome ❌  
- `10` → Not a palindrome ❌  

## 💻 Solution (JavaScript)
```javascript
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  let string = x.toString();
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
      reverse = reverse + string[i];
  }
  return reverse === string;
};
```

## 🚀 How to Run
1. Copy the code into a JavaScript file, e.g., `palindrome.js`
2. Run using Node.js:
   ```bash
   node palindrome.js
   ```

## 🧪 Examples
```javascript
console.log(isPalindrome(121));   // true
console.log(isPalindrome(-121));  // false
console.log(isPalindrome(10));    // false
console.log(isPalindrome(12321)); // true
```
