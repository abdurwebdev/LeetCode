# Majority Element (Boyer–Moore Voting Algorithm)

This repository demonstrates an efficient solution to the **Majority Element** problem using the **Boyer–Moore Voting Algorithm** in JavaScript.

---

## 📌 Problem Statement

Given an array `nums` of size `n`, return the **majority element**.

> The majority element is the element that appears **more than ⌊n / 2⌋ times**.  
You may assume that the majority element always exists in the array.

---

## 🚀 Optimized Approach

We use the **Boyer–Moore Voting Algorithm**, which works in:

- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`

This makes it much more efficient than sorting or using hash maps.

---

## 🧠 How the Algorithm Works

1. Maintain a `freq` counter and an `ans` candidate.
2. If `freq` becomes `0`, select the current element as the new candidate.
3. Increase `freq` if the current element matches the candidate.
4. Decrease `freq` if it does not.
5. At the end, the candidate stored in `ans` is the majority element.

---

## 💻 JavaScript Implementation

```javascript
var majorityElement = function(nums) {
    let freq = 0, ans = 0;

    for (let i = 0; i < nums.length; i++) {
        if (freq === 0) {
            ans = nums[i];
        }

        if (ans === nums[i]) {
            freq++;
        } else {
            freq--;
        }
    }

    return ans;
};
```

---

## ✅ Example

```js
Input:  nums = [2,2,1,1,1,2,2]
Output: 2
```

---

## 📚 Key Takeaways

- No extra memory is required.
- Works because the majority element appears more than half the time.
- Commonly asked in **FAANG interviews**.

---

## 🙌 Author

**Abdur Rehman**  
Front-end & MERN Stack Developer  

Happy Coding! 🚀
