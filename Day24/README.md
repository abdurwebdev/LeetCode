Best Time to Buy and Sell Stock (LeetCode 121)
📌 Problem Statement

You are given an array prices where prices[i] represents the stock price on the ith day.

You want to maximize your profit by choosing one day to buy and a different future day to sell.

Return the maximum profit you can achieve.
If no profit is possible, return 0.

✅ Optimized Solution (O(n))
JavaScript Code
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }

    return maxProfit;
};

🧠 Explanation

Track the minimum price so far

At each step:

Calculate profit if sold today

Update maximum profit

Ensures buying happens before selling

📊 Example

Input

[7,1,5,3,6,4]


Output

5


Explanation

Buy at price 1

Sell at price 6

Profit = 6 - 1 = 5

⏱ Time & Space Complexity

Time Complexity: O(n)

Space Complexity: O(1)

🚀 Key Takeaways

Single pass solution

No nested loops

Interview-friendly and efficient

👨‍💻 Author

Abdur Rehman