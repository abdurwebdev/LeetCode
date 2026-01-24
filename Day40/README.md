# Add Digits (Digital Root) --- LeetCode 258

## 🧩 Problem

Given a non-negative integer `num`, repeatedly add all its digits until
the result has only one digit, and return it.

🔗 **LeetCode:** Add Digits (258)

------------------------------------------------------------------------

## 🧠 Optimal Insight

In base-10, powers of 10 are congruent to `1 (mod 9)`.\
So, a number and the sum of its digits have the same remainder when
divided by 9.

This leads to the **digital root** formula.

------------------------------------------------------------------------

## ✨ Formula

-   If `num == 0` → `0`
-   Else → `1 + (num - 1) % 9`

------------------------------------------------------------------------

## ✅ JavaScript Solution

``` js
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num === 0) return 0;
    return 1 + (num - 1) % 9;
};
```

------------------------------------------------------------------------

## 🧪 Examples

``` js
addDigits(38);   // 2
addDigits(0);    // 0
addDigits(999);  // 9
addDigits(123);  // 6
```

------------------------------------------------------------------------

## ⏱️ Complexity

-   **Time:** O(1)
-   **Space:** O(1)

------------------------------------------------------------------------

## 📝 Notes

-   This solution avoids loops completely.
-   Frequently expected in interviews as an optimization question.
