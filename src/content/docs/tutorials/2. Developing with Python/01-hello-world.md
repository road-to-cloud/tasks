---
title: Python's Hello World
---

In this stage, we will write a short Python hello-world like script and run it!

Python is an interpreted language and features script like development paradigms.

Below are some resources to dig deeper into Pythons's programming language syntax and semantics:

- https://www.w3schools.com/python/python_intro.asp
- https://roadmap.sh/python

The first link shows you an example call to get your first "Hello World" onto the command line, but we will do something more fun ;).

For this, find yourself in the DevContainer created in the [tutorial before](road-to-cloud/tutorials/1-getting-started/00-goals/) and follow these chapters:

## Creating your first script

To execute python, we write code in `*.py` files. 
Therefore, we create our first file as follows (or however you like)

```bash
# creates a file
touch main.py
```

Python files can be executed with the `python` command.
You can try to run the just created `main.py` with:
```bash
# executes a python file
python main.py
```

As you see, you see nothing ;). We havent written any code so far.

In our `main.py`, we have to define the following to get Python to know where to start its execution, (see [here](https://realpython.com/if-name-main-python/) for more information)

```python title=main.py
# Python's script entry point
if __name__ == "__main__":
    main()
```

This snippet of code triggers a `main` function that should be called and which we have yet to create.

In Python, functions are defined with the [reserved keyword](https://realpython.com/lessons/reserved-keywords/) `def` with the following syntax:

```python title=main.py
def main():
    print("Hello World")

# Python's script entry point
if __name__ == "__main__":
    main()
```

## Making scripts interactive

If you want the example `main.py` to have some more *spice* and be *interactive*, we can add a cli terminal [`input`](https://www.w3schools.com/python/ref_func_input.asp) call to wait for input of the calling user, e.g. for their `name`:


```python title=main.py
def main():
    name: str = input("What is your name?:\n")
    print(f"Hello {name}!")

# Python's script entry point
if __name__ == "__main__":
    main()
```

This code snippet also features *string interpolation*, which you can read about further [here](https://www.programiz.com/python-programming/string-interpolation) and *escape characters* to be read [here](https://www.w3schools.com/python/gloss_python_escape_characters.asp).







