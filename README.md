# Unexpected 'this' behavior in JavaScript functions

This repository demonstrates a common JavaScript error related to the unexpected behavior of the `this` keyword within functions.  The `bug.js` file showcases the problem, and `bugSolution.js` offers several solutions.

## Problem

In JavaScript, the value of `this` depends on how the function is called.  If a function is called without any special context (e.g., `myFunc()`), the value of `this` can be unpredictable.

## Solutions

The `bugSolution.js` file provides several ways to address this issue:

* **Explicit Binding (using `bind`, `call`, or `apply`):** This explicitly sets the value of `this`. 
* **Arrow Functions:** Arrow functions lexically bind `this`, inheriting it from their surrounding scope. 
* **Creating a closure over `this`:** Storing this in a variable within a function and passing that variable in.