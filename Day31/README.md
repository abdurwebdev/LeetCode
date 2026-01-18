# Running Sum of 1D Array (LeetCode 1480)

## Problem Statement
Given an array `nums`, return the running sum of the array.

Running sum means:
```
runningSum[i] = nums[0] + nums[1] + ... + nums[i]
```

---

## Example
```
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
```

---

## Solution (JavaScript)

```javascript
var runningSum = function(nums) {
    let result = [];
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        result.push(sum);
    }

    return result;
};
```

---

## Explanation
- Maintain a variable `sum`
- Add current element to `sum`
- Push `sum` into result array

---

## Time & Space Complexity
- Time Complexity: **O(n)**
- Space Complexity: **O(n)**

---

## Key Takeaway
Use an accumulator variable to keep track of the running total.

