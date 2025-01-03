# Type 'string[]' is not assignable to type 'string' in TypeScript

This repository demonstrates a common TypeScript error:  'Type 'string[]' is not assignable to type 'string'. This occurs when a function expects a single string but receives an array of strings.  The example shows the error and provides a solution.

## How to reproduce

1. Clone this repository.
2. Compile the `bug.ts` file using the TypeScript compiler (tsc).
3. Observe the compile-time error.

## Solution

The `bugSolution.ts` file offers two solutions:

* **Correct function signature:** Change the function signature to accept an array of strings.
* **Destructuring:** Destructure the array to pass individual string elements to the function.