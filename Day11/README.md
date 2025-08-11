# Sort By

## Problem Description
You are given an array `arr` and a function `fn`.  
Your task is to return a **sorted** version of `arr` in **ascending order** according to the values returned by `fn`.

The sorting should not modify the original array order except as needed for sorting.

---

## Example

### Example 1:
**Input:**
```javascript
arr = [5, 4, 1, 2, 3]
fn = (x) => x
```
**Output:**
```javascript
[1, 2, 3, 4, 5]
```
**Explanation:**
Sorted based on the numbers themselves.

---

### Example 2:
**Input:**
```javascript
arr = [{"x": 1}, {"x": 0}, {"x": -1}]
fn = (d) => d.x
```
**Output:**
```javascript
[{"x": -1}, {"x": 0}, {"x": 1}]
```
**Explanation:**
Sorted based on the `x` property of each object.

---

### Example 3:
**Input:**
```javascript
arr = [[3, 4], [5, 2], [10, 1]]
fn = (x) => x[1]
```
**Output:**
```javascript
[[10, 1], [5, 2], [3, 4]]
```
**Explanation:**
Sorted based on the second element in each subarray.

---

## Constraints
- `arr` is an array of any type of elements.
- `fn` is a function that returns a **number** when given an element from `arr`.
- Sorting should be done in ascending order.

---

## Solution

### Approach:
1. Use JavaScript’s built-in `.sort()` method.
2. Compare elements `a` and `b` based on the difference `fn(a) - fn(b)`.
3. This ensures ascending order based on the computed values.

---

### Code:
```javascript
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};
```

---

## Time Complexity
- **O(n log n)** due to the sorting algorithm.

## Space Complexity
- **O(1)** (in-place sorting, ignoring call stack size).
