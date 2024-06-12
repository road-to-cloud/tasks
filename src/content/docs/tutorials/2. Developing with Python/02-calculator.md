---
title: Simple Terminal Calculator
---

The goal for this chapter, is to go through a more exhaustive Python program to act as base for the next chapter, *testing our own code*.

The source code (and resources for later chapters in this tutorial) is also available at: https://github.com/road-to-cloud/chapter-2-python-github

As this shall not function as a sole Python tutorial, we will not go into the details of what, how and why, but here is a sample code for a simple terminal calculator:

We define our supported operations as follows in the `operations.py` script:

```python title=operations.py
def addition(a, b):
    return a + b

def subtraction(a, b):
    return a - b

def multiplication(a, b):
    return a * b

def division(a, b):
    return a / b
```

We implement a `Calculator` class that acts as a controller for the operations in the `calculator.py` script and takes over the user input, parsing and interpreting:

```python title=calculator.py

from typing import Union
from operations import addition, subtraction, multiplication, division


class Calculator():

    def input_equation(self) -> Union[str, str, str]:
        equation: str = input("Enter an equation:\n")
        return equation.split(" ")

    def interprete_equation(self, equation: str) -> Union[float, str, float]:
        a = int(equation[0])
        b = int(equation[2])
        operator = equation[1]
        return [a, operator, b]

    def operation(self) -> str:
        operation: Union[str, str, str] = self.input_equation()

        print(f"Calculating: {' '.join(operation)} ...")
        a, operand, b = self.interprete_equation(operation)

        match operand:
            case "+":
                return f"{a} + {b} = {addition(a, b)}"
            case "-":
                return f"{a} - {b} = {subtraction(a, b)}"
            case "*":
                return f"{a} * {b} = {multiplication(a, b)}"
            case "/":
                return f"{a} / {b} = {division(a, b)}"
            case _:
                return "Invalid operator"
```

Finally, the `main.py` script acts as the entry point for the program, and its sole job is to instantiate the `Calculator` class and infinitely loop through its `operation` method:

```python title=main.py
from calculator import Calculator

def main():
    calculator = Calculator()

    while (True):
        try:
            print(calculator.operation())
        except ValueError:
            print("\nInvalid input, try again\n")


if __name__ == "__main__":
    main()
```