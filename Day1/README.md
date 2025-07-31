# Day 1: Two Sum

## Problem Description

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Examples

### Example 1:

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Example 2:

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

### Example 3:

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

## Constraints

- `2 <= nums.length <= 104`
- `-109 <= nums[i] <= 109`
- `-109 <= target <= 109`
- Only one valid answer exists.

## Solution Approach

### Brute Force Method

The solution uses a nested loop approach:

1. Iterate through each element in the array
2. For each element, check all subsequent elements
3. If the sum of two elements equals the target, return their indices

### Time Complexity

- **Time Complexity**: O(n²) - where n is the length of the input array
- **Space Complexity**: O(1) - constant extra space

### Code Implementation

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
```

## Alternative Solutions

### Hash Map Approach (Optimized)

A more efficient solution would use a hash map to achieve O(n) time complexity:

```javascript
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
};
```

## Key Learning Points

1. **Brute Force vs Optimization**: While the brute force approach works, it's important to consider more efficient solutions for larger datasets
2. **Hash Map Usage**: Using a hash map can significantly improve time complexity from O(n²) to O(n)
3. **Edge Cases**: Always consider edge cases like duplicate elements and negative numbers
4. **Problem Constraints**: Understanding the constraints helps in choosing the right approach

## Related Problems

- 3Sum
- 4Sum
- Two Sum II - Input Array Is Sorted
- Two Sum BSTs
