# LeetCode - Counter Function

## Problem Description

Given an integer `n`, return a counter function.  
This counter function initially returns `n` and then returns 1 more than the previous value every subsequent time it is called.

### Example 1:

**Input:**
```javascript
n = 10
["call","call","call"]
```

**Output:**
```
[10, 11, 12]
```

**Explanation:**
```
counter() // 10
counter() // 11
counter() // 12
```

---

## Constraints

- `-1000 <= n <= 1000`
- At most 1000 calls will be made to the counter.

---

## Solution

```javascript
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function(){
        return n++;
    }
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
```

---

## Approach

- We use **closures** in JavaScript.
- The `createCounter` function returns an inner function that remembers the variable `n`.
- Each time the returned function is called, it returns the current value of `n` and then increments it.

---

## Complexity Analysis

- **Time Complexity:** `O(1)` — Each call is constant time.
- **Space Complexity:** `O(1)` — Only a single variable is stored in memory.
