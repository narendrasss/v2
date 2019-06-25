---
title: Object Literal vs. Switch Statements
tagline: A different way of writing switch statements.
date: 2019-06-23
private: false
---

A **switch** statement gives us an easy way to do different things depending on the value of something:

```js
switch (state): {
	case 'fetching':
		displayLoadingBar()
		break
	case 'done':
		displaySuccess()
		break
	default:
		throw new Error('Invalid state!')
}
```

They are also (in my opinion) more readable than nested if-else statements, especially if there are many cases:

```js
if (state === 'fetching') {
	displayLoadingBar()
} else if (state === 'done') {
	displaySuccess()
} else if ...
```

Switches are also [more performant](https://stackoverflow.com/questions/395618/is-there-any-significant-difference-between-using-if-else-and-switch-case-in-c) when there are a large number of cases (> 5). Recently though, I came across a way of writing switch statements in a much more concise and readable manner &mdash; object literals.

In Javascript, functions are **first-class citizens**. This means that functions can be used like any other variable. They can be passed as arguments to functions, returned as values by other functions, assigned to variables or be stored in data structures.

This means that we can turn the following switch statement:

```js
switch (state): {
	case 'fetching':
		displayLoadingBar()
		break
	case 'done':
		displaySuccess()
		break
	default:
		throw new Error('Invalid state!')
}
```

Into an object:

```js
const operations = {
	fetching: displayLoadingBar,
	done: displaySuccess,
}
```

And then we can fetch the appropriate function by accessing `operations` with the appropriate state:

```js
const performOperation = operations[state]
if (!performOperation) {
	// same as default case in switch
	throw new Error('invalid state!')
}
performOperation()
```