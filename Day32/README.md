# Find Numbers with Even Number of Digits (LeetCode 1295)

## Problem Statement
Given an array `nums`, return how many numbers contain an even number of digits.

---

## Example
```
Input: nums = [12,345,2,6,7896]
Output: 2
```

---

## Solution (JavaScript)

```javascript
var findNumbers = function(nums) {
    let count = 0;

    for (let num of nums) {
        let digits = num.toString().length;
        if (digits % 2 === 0) {
            count++;
        }
    }

    return count;
};
```

---

## Explanation
- Convert number to string
- Count digits using `.length`
- Check if digit count is even

---

## Time & Space Complexity
- Time Complexity: **O(n)**
- Space Complexity: **O(1)**

---

## Key Takeaway
Using string conversion is the simplest and cleanest way to count digits.

