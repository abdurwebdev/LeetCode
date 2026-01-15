
# Single Number (XOR Solution)

## 📌 Problem Statement
Given a non-empty array of integers `nums`, every element appears **twice** except for one.
Find that single one.

---

## ✅ Solution (Using XOR)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   let ans = 0;
   for (let val of nums) {
       ans ^= val;
   }
   return ans;
};
```

---

## 🧠 How It Works

This solution uses the **XOR (^) bitwise operator**.

### XOR Properties
- `x ^ x = 0` → same numbers cancel out
- `x ^ 0 = x` → number remains unchanged
- XOR is **commutative & associative**

Since all numbers appear twice except one:
- Duplicate numbers cancel each other
- The remaining value is the single number

---

## 🔍 Example

**Input**
```js
nums = [4, 1, 2, 1, 2]
```

**Execution**
```
ans = 0
ans = 0 ^ 4 = 4
ans = 4 ^ 1 = 5
ans = 5 ^ 2 = 7
ans = 7 ^ 1 = 6
ans = 6 ^ 2 = 4
```

**Output**
```js
4
```

---

## ⏱ Complexity Analysis

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

---

## ⭐ Why Use This Approach?
- No extra data structures
- Optimal performance
- Frequently asked in interviews

---

## 🏷 Tags
`JavaScript` `DSA` `Bit Manipulation` `XOR` `Interview Question`
