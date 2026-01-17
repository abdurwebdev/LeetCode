# Richest Customer Wealth (LeetCode 1672)

## Problem
Given a 2D array `accounts` where `accounts[i][j]` represents the money the i-th customer has in the j-th bank, return the maximum wealth among all customers.

## Solution
Loop through each customer's account, sum their money, and track the maximum wealth.

```javascript
var maximumWealth = function(accounts) {
    let maxWealth = 0;

    for (let account of accounts) {
        let sum = account.reduce((a, b) => a + b, 0);
        maxWealth = Math.max(maxWealth, sum);
    }

    return maxWealth;
};
```

## Complexity
- Time: O(m * n) where m = number of customers, n = accounts per customer
- Space: O(1)

