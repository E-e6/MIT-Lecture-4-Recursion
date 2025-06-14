# MIT 6.0001 – Lecture 4: Decomposition, Abstraction & Recursion

## 🔍 Key Concepts

### 1. Decomposition
- Breaking a complex problem into smaller functions.
- Improves readability, testing, and reuse.

### 2. Recursion
- A function calls itself to solve a smaller instance of the same problem.
- Two key parts: base case (stop) and recursive case (continue).

## 📚 Examples From Lecture

### Factorial
```python
def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n - 1)
### Fibonacci
 def fib(n):
    if n == 0 or n == 1:
        return 1
    return fib(n-1) + fib(n-2)