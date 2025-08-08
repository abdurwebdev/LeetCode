# Plus One – LeetCode Solution

## 📄 Problem Statement
You are given a **large integer** represented as an integer array `digits`, where each `digits[i]` is the **i-th digit** of the integer.  
The digits are ordered from **most significant** to **least significant** in left-to-right order.  

The large integer **does not** contain any leading `0`’s.  
Increment the large integer by one and return the resulting array of digits.

### Example 1:
```
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123 → 124
```

### Example 2:
```
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321 → 4322
```

### Example 3:
```
Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9 → 10
```

---

## 💡 Approach
We iterate over the array from the **last digit to the first**:
1. If the current digit is **less than 9**, we simply increment it and return.
2. If it’s `9`, we set it to `0` (carry over) and move to the next digit to the left.
3. If all digits were `9` (like `[9,9,9]`), after the loop we insert `1` at the beginning.

This approach works in **O(n)** time with **O(1)** extra space.

---

## 📝 Code
```javascript
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};
```

---

## ⏱ Complexity Analysis
- **Time Complexity:** `O(n)` – We may need to check each digit once.
- **Space Complexity:** `O(1)` – Modifies the array in place.

---

## ✅ Key Points
- Handles carry propagation correctly.
- Works for cases where all digits are `9`.
- No need to convert to string or use BigInt.
