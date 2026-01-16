# containsDuplicate Problem - Corrected README

## Problem Statement

**LeetCode Problem 217: Contains Duplicate**

Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is **distinct**.

**Example:**
```javascript
Input: nums = [1,2,3,1]
Output: true

Input: nums = [1,2,3,4]
Output: false
```

## Corrected Solution
```javascript
var containsDuplicate = function(nums) {
    let seen = new Set();

    for(let i = 0; i < nums.length; i++) {
        if(seen.has(nums[i])) {
            return true; // duplicate found
        }
        seen.add(nums[i]); // add number to set
    }

    return false; // no duplicates found
};
```

### Explanation:
1. **Create a Set**: `seen` stores all unique numbers encountered so far.
2. **Iterate through the array**: For each number:
   - If the number already exists in `seen`, a duplicate is found → return `true`.
   - Otherwise, add the number to the set.
3. **Return `false`** if the loop finishes without finding duplicates.

### Example Run:
```javascript
nums = [1, 2, 3, 1]
containsDuplicate(nums)
// seen = {1,2,3}, duplicate 1 found -> returns true

nums = [1, 2, 3, 4]
containsDuplicate(nums)
// seen = {1,2,3,4}, no duplicates -> returns false
```

### Time Complexity
- **O(n)**: Loop through the array once.
- **Set operations are O(1)** on average.

### Space Complexity
- **O(n)**: In the worst case, all elements are unique and stored in the set.

### Key Notes:
- Efficient and simple solution using a hash-based set.
- Handles arrays with all unique elements or duplicates.
- Avoids unnecessary loops and logic mistakes from initial attempts.

