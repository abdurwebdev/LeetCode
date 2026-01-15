# Merge Sorted Array (In-Place)

This project demonstrates an efficient **in-place algorithm** to merge
two sorted arrays using JavaScript.

------------------------------------------------------------------------

## 📌 Problem Statement

You are given two sorted arrays:

-   `nums1` of size `m + n`, where the first `m` elements are valid and
    the rest are `0`s
-   `nums2` of size `n`

Merge `nums2` into `nums1` so that `nums1` becomes a single sorted
array.

> ⚠️ Constraint:\
> You must **modify `nums1` in-place** and **must not return anything**.

------------------------------------------------------------------------

## ✅ Solution Approach

We use a **three-pointer technique** starting from the **end** of both
arrays:

### Pointers Used:

-   `i` → last valid element of `nums1`
-   `j` → last element of `nums2`
-   `idx` → last index of merged array (`nums1`)

### Why start from the end?

This avoids overwriting elements in `nums1` that haven't been compared
yet.

------------------------------------------------------------------------

## 💻 JavaScript Implementation

``` js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, idx = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[idx--] = nums1[i--];
        } else {
            nums1[idx--] = nums2[j--];
        }
    }

    while (j >= 0) {
        nums1[idx--] = nums2[j--];
    }
};
```

------------------------------------------------------------------------

## 🧪 Example

### Input:

``` js
nums1 = [1,2,3,0,0,0]
m = 3
nums2 = [2,5,6]
n = 3
```

### Output:

``` js
[1,2,2,3,5,6]
```

------------------------------------------------------------------------

## ⏱️ Time & Space Complexity

-   **Time Complexity:** `O(m + n)`
-   **Space Complexity:** `O(1)` (in-place)

------------------------------------------------------------------------

## 🚀 Key Takeaways

-   Efficient use of pointers avoids extra space
-   Commonly asked in interviews (LeetCode #88)
-   Demonstrates strong understanding of array manipulation

------------------------------------------------------------------------

## ✍️ Author

**Abdur Rehman**\
MERN Stack Developer \| DSA Learner
