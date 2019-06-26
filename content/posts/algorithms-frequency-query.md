---
date: 2019-06-24
private: false
tagline: Solving a HackerRank hash table problem.
title: "Algorithms: Frequency Query"
topic: Algorithms
---

This post is the first in a series of posts where I aim to describe my thinking process behind solving different algorithmic problems found on sites like LeetCode and HackerRank.

If you're only interested in the solution, [view the code on github.](https://github.com/narendrasss/algo/blob/master/src/dict/frequency-queries/index.js)

# Problem Description

The frequency queries problem is a problem I originally found on [HackerRank](https://www.hackerrank.com/challenges/frequency-queries/problem). The problem is as follows.

You are given an array of queries. Each query is one of three possible `<int, int>` pairs:

- `1x`: Insert `x` into your data structure.
- `2y`: Delete `y` from your data structure, if it exists.
- `3z`: Check if any integer is present where its frequency is exactly `z`. If yes, print 1. Otherwise print 0.

Write a function `freqQuery` that runs the given list of queries and returns the appropriate outputs as an array of integers.

# Approach

When I started reading the problem, it was clear that the first thing we need to do is iterate over our list of queries and do *something* with every query.

Let's write that out first.

```js
const operations = {
	1: doOpOne,
	2: doOpTwo,
	3: doOpThree
}

function freqQuery(queries) {
	const result = []
	const structure = {} // some data structure
	queries.forEach(([op, data]) => {
		const executeQuery = operations[op]
		executeQuery(structure, data, result)
	})
	return result
}
```

A few things I'd like to mention about the snippet above:

1. The `result` array will be the array of integers that corresponds to our print values.
2. The `structure` object will be the data structure that we use to hold our data (we haven't decided what that structure will be just yet).
3. I've decided to use the built in array `forEach` method over a traditional for loop because it is more concise.
4. The `[op, data]` line is called array destructuring. It's essentially the same as `const op = query[0], data = query[1]`.
5. I've opted to use object literals over a switch or if statement. Read more [here](https://narendras.io/posts/object-literal-vs-switch-statements/).