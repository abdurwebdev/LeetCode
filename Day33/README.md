# Shuffle the Array (LeetCode 1470)

## Problem Statement
Given the array `nums` consisting of `2n` elements in the form:
```
[x1, x2, ..., xn, y1, y2, ..., yn]
```
Return the array in the form:
```
[x1, y1, x2, y2, ..., xn, yn]
```

---

## Example
```
Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7]
```

---

## Solution (JavaScript)

```javascript
var shuffle = function(nums, n) {
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[i + n]);
    }

    return result;
};
```

---

## Explanation
- First half contains `x` values
- Second half contains `y` values
- Push one `x` and one `y` alternately

---

## Time & Space Complexity
- Time Complexity: **O(n)**
- Space Complexity: **O(n)**

---

## Key Takeaway
Understand the input structure first—no swapping or sorting needed.

