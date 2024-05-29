---
title: Testing Python Code
---

Before we test our code, we need to install the `pytest` package. This package is a testing framework that makes it easy to write simple tests.

## Installing `pytest`

To install [`pytest`](https://docs.pytest.org/en/8.2.x/), run the following command in your terminal:

```bash
pip install pytest
```

For future projects and as best practice, you should add dependencies of your Python project into a `requirements.txt` file:

```txt title=requirements.txt
pytest
```

To install all dependencies from a `requirements.txt` file, run:

```bash
pip install -r requirements.txt
```

## Creating your first test

To write our first test, create a new file `calculator_test.py` in the root of your project:

```bash
touch calculator_test.py
```

In this file, we will write a test for the `interprete_equation` function of the `Calculator` class:

```python title=calculator_test.py
from calculator import Calculator


def test_interprete_equation():
    calculator = Calculator()
    assert calculator.interprete_equation(["1", "+", "1"]) == [1, "+", 1]
```

We can run this test by executing the following command in your terminal:

```bash
pytest
```

You should see something like this:

```bash
vscode ➜ /workspaces/workspace $ pytest
======================== test session starts =========================
platform linux -- Python 3.10.12, pytest-8.2.1, pluggy-1.5.0
rootdir: /workspaces/workspace
collected 1 item                                                     

calculator_test.py .                                           [100%]

========================= 1 passed in 0.01s ==========================
```

And with this, we conclude our first test for our Python code. You can run wild and add more tests to your codebase as you see fit.

## Next Steps and Hints

### Testing cli input

To test the `input_equation` function, you can use the [`monkeypatch`](https://docs.pytest.org/en/7.1.x/how-to/monkeypatch.html) fixture from `pytest` to simulate user input: [^1]
[^1]: we learned this ourselves aswell writing this guide, its pretty cool ;)


```python title=calculator_test.py
...
def test_input_equation(monkeypatch):
        # monkeypatch the "input" function, so that it returns "1 + 1".
        # This simulates the user entering "1 + 1" in the terminal:
        monkeypatch.setattr('builtins.input', lambda _: "1 + 1")
        calculator = Calculator()
        assert calculator.input_equation() == ["1", "+", "1"]

...
```

### Testing exceptions

Our calculator does not handle *division by zero* yet and crashes if the user decides to calculate just that. To test this scenario and the `operation` function, you can use the just learned `monkeypatch` fixture and the [`pytest.raises`](https://docs.pytest.org/en/7.1.x/how-to/assert.html) as a context manager to check if the function raises an exception given the faulty input:

```python title=calculator_test.py
...
import pytest
...
def test_operation_invalid_operator(monkeypatch):
    monkeypatch.setattr('builtins.input', lambda _: "1 / 0")
    calculator = Calculator()
    with pytest.raises(ZeroDivisionError):
        calculator.operation()
...
```

If you want, you can fix this issue by yourself and prevent the calculator from crashing, or keep it and sell it as feature if someone asks ;)