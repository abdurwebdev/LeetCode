# Move Zeroes (LeetCode 283)

## Problem Statement
Given an integer array `nums`, move all `0` values to the end of the array **in-place** while maintaining the relative order of the non-zero elements.

- You must modify the array in-place
- Do not return anything

---

## Example
```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

---

## Approach (Using Nested Loops & Swapping)
This solution follows a **beginner-friendly approach** using:
- Nested loops
- Swapping zero with the next non-zero element

The idea:
1. Traverse the array
2. When a `0` is found, search ahead for the next non-zero
3. Swap them
4. Continue until all zeroes are at the end

---

## Solution (JavaScript)

```javascript
var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] !== 0) {
                    let temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                    break;
                }
            }
        }
    }
};
```

---

## Dry Run
```
nums = [0,1,0,3,12]

Step 1: swap 0 and 1 → [1,0,0,3,12]
Step 2: swap 0 and 3 → [1,3,0,0,12]
Step 3: swap 0 and 12 → [1,3,12,0,0]
```

---

## Time & Space Complexity
- Time Complexity: **O(n²)**
- Space Complexity: **O(1)** (in-place)

---

## Key Takeaways
- Only swap when a `0` is found
- Never modify loop counters manually
- This approach is easy to understand for beginners

---

✅ This solution is correct and interview-acceptable for easy-level problems.

