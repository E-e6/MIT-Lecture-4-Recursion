# Factorial
def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n - 1)
print("Factorial of 5:", factorial(5))

# Fibonacci
def fib(n):
    if n == 0 or n == 1:
        return 1
    return fib(n-1) + fib(n-2)
print("Fibonacci of 5:", fib(5))

# Sum to N
def sum_to_n(n):
    if n == 1:
        return 1
    return n + sum_to_n(n - 1)
print("Sum to 5:", sum_to_n(5))

# Reverse a string
def reverse_string(s):
    if len(s) <= 1:
        return s
    return s[-1] + reverse_string(s[:-1])
print("Reverse of 'hello':", reverse_string("hello"))

# Palindrome check
def is_palindrome(word):
    if len(word) <= 1:
        return True
    if word[0] != word[-1]:
        return False
    return is_palindrome(word[1:-1])
print("Is 'racecar' a palindrome?:", is_palindrome("racecar"))