# Reverse String (LeetCode Problem)

This repository contains a JavaScript solution for the **Reverse
String** problem from LeetCode.

## Problem Statement

Write a function that reverses a string. The input string is given as an
array of characters `s`.

-   You must do this by modifying the input array **in-place** with O(1)
    extra memory.
-   Do not return anything.

### Example

``` javascript
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

## Solution

The solution uses a **two-pointer approach** where: - One pointer starts
from the beginning (`left`). - The other pointer starts from the end
(`right`). - Swap characters until the two pointers meet.

### JavaScript Implementation

``` javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0, right = s.length - 1;
    
    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
};
```

### Shorter Version (Using Destructuring Swap)

``` javascript
var reverseString = function(s) {
    let left = 0, right = s.length - 1;
    
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
};
```

## How to Run

1.  Copy the function into a `.js` file.
2.  Run with Node.js:

``` bash
node filename.js
```

3.  Test example:

``` javascript
let arr = ["h","e","l","l","o"];
reverseString(arr);
console.log(arr); // ["o","l","l","e","h"]
```

------------------------------------------------------------------------

## Author

Abdur Rehman
