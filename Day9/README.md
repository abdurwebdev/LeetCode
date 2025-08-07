# 📘 LeetCode: Add Two Promises

**Problem Link:** [Add Two Promises](https://leetcode.com/problems/add-two-promises)

## 🧠 Description

Given two promises that resolve to numbers, write an asynchronous function that returns a promise which resolves to their sum.

---

## ✅ Example

```
addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  .then(console.log); // Output: 4
```

---

## 💡 Approach

We use `async/await` to wait for the resolution of both input promises. Once both promises are resolved, we add their values and return the result.

---

## 🧪 Solution

```js
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
  const val1 = await promise1;
  const val2 = await promise2;
  return val1 + val2;
};
```

---

## 🚀 How to Run

1. Copy the function into a JavaScript file.
2. Run using Node.js or any JavaScript environment:

```js
addTwoPromises(Promise.resolve(2), Promise.resolve(2))
  .then(console.log); // 4
```

---

## 🛠️ Tools Used

- JavaScript ES6+
- `async/await`