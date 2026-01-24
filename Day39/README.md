# Power of Two --- LeetCode 231

## 🧩 Problem

Given an integer `n`, return `true` if it is a power of two. Otherwise,
return `false`.

🔗 **LeetCode:** Power of Two (231)

------------------------------------------------------------------------

## 🧠 Key Observation

A power of two has **exactly one `1` bit** in its binary representation.

------------------------------------------------------------------------

## ✨ Bitwise Trick

    n & (n - 1) === 0

This works only when `n > 0`.

------------------------------------------------------------------------

## ✅ JavaScript Solution

``` js
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) === 0;
};
```

------------------------------------------------------------------------

## 🧪 Examples

``` js
isPowerOfTwo(1);   // true  (2⁰)
isPowerOfTwo(2);   // true  (2¹)
isPowerOfTwo(16);  // true  (2⁴)
isPowerOfTwo(3);   // false
isPowerOfTwo(0);   // false
```

------------------------------------------------------------------------

## ⏱️ Complexity

-   **Time:** O(1)
-   **Space:** O(1)

------------------------------------------------------------------------

## 📝 Notes

-   One of the most common bit-manipulation interview problems.
-   Clean, fast, and elegant solution.
