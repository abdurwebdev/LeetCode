# Power of Three

## Problem
Given an integer `n`, return `true` if it is a **power of three**.  
Otherwise, return `false`.

An integer `n` is a power of three if there exists an integer `x` such that:

```
n == 3^x
```

### Example
```js
Input: n = 27
Output: true
Explanation: 27 = 3^3

Input: n = 0
Output: false
Explanation: No `x` exists such that 3^x = 0

Input: n = -1
Output: false
Explanation: No `x` exists such that 3^x = -1
```

### Constraints
```
-2^31 <= n <= 2^31 - 1
```

---

## Solution — Loop-Based
We keep dividing `n` by 3 while it’s divisible by 3.  
If the result is 1, then it’s a power of three.

```js
var isPowerOfThree = function(n) {
    if (n <= 0) return false;
    while (n % 3 === 0) {
        n /= 3;
    }
    return n === 1;
};
```

⏳ **Time Complexity:** O(log₃ n)  
💾 **Space Complexity:** O(1)

---

## Explanation
Think of dividing `n` by 3 repeatedly until you can’t anymore:  
- If you end up with exactly `1`, `n` was a power of three.  
- If you end up with anything else, it wasn’t.

---

## References
- [LeetCode Problem #326](https://leetcode.com/problems/power-of-three/)
