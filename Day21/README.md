# Find Missing and Repeated Values (LeetCode)

## 🧩 Problem Description

You are given an `n x n` grid containing numbers from `1` to `n²`.

-   Exactly **one number is repeated**
-   Exactly **one number is missing**

Your task is to find and return both numbers.

------------------------------------------------------------------------

## ✅ Example

**Input:**

``` js
grid = [[1,3],
        [2,2]]
```

**Output:**

``` js
[2, 4]
```

-   `2` is repeated
-   `4` is missing

------------------------------------------------------------------------

## 💡 Approach (Using Set)

We use a `Set` to track unique numbers:

1.  Traverse the grid
2.  If a number already exists in the set → it's the repeated number
3.  Add all numbers to the set
4.  Loop from `1` to `n²` to find the missing number

------------------------------------------------------------------------

## 🧠 JavaScript Solution

``` js
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let n = grid.length;
    let repeated = 0;
    let missing = 0;
    let seen = new Set();

    for (let i = 0; i < n; i++) {
        for (let val of grid[i]) {
            if (seen.has(val)) {
                repeated = val;
            } else {
                seen.add(val);
            }
        }
    }

    for (let i = 1; i <= n * n; i++) {
        if (!seen.has(i)) {
            missing = i;
            break;
        }
    }

    return [repeated, missing];
};
```

------------------------------------------------------------------------

## ⏱ Time & Space Complexity

-   **Time Complexity:** `O(n²)`
-   **Space Complexity:** `O(n²)` (Set storage)

------------------------------------------------------------------------

## 🚀 Notes

-   Simple and clean approach
-   No sorting required
-   Ideal for interviews

------------------------------------------------------------------------

Happy Coding! 🎉\
**Author:** Abdur Rehman
