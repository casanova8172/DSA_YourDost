# README -- Second Largest Unique Number

## Problem Statement

Given an array of integers, return the **second largest unique** number
in the array.\
If it doesn't exist, return **-1**.

### Examples

  Input                     Output
  ------------------------- --------
  `[3, 5, 2, 5, 6, 6, 1]`   `5`
  `[7, 7, 7]`               `-1`

------------------------------------------------------------------------

#  Approaches

Below are **multiple valid approaches** to solve the problem.

------------------------------------------------------------------------

#  **Approach 1: Single Pass (O(n))**

### Idea:

-   Track `largest` and `secondLargest`
-   Update in one pass
-   Ensures uniqueness by enforcing `num < largest`

### Code:

``` js
function secondLargestUnique(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? -1 : secondLargest;
}
```

------------------------------------------------------------------------

#  **Approach 2: Using Set + Sorting (O(n log n))**

### Idea:

1.  Convert array to a `Set` to remove duplicates\
2.  Convert back to array\
3.  Sort in descending order\
4.  Return the second element if exists

### Code:

``` js
function secondLargestUnique(arr) {
    const unique = [...new Set(arr)];
    unique.sort((a, b) => b - a);
    return unique.length >= 2 ? unique[1] : -1;
}
```

------------------------------------------------------------------------

# **Approach 3: Two-Pass Approach (O(n))**

### Idea:

1.  First pass → find the **largest**\
2.  Second pass → find the **largest number \< largest**

### Code:

``` js
function secondLargestUnique(arr) {
    let largest = -Infinity;

    for (let num of arr) {
        if (num > largest) largest = num;
    }

    let secondLargest = -Infinity;

    for (let num of arr) {
        if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? -1 : secondLargest;
}
```

------------------------------------------------------------------------

# **Sample Input / Output**

``` js
console.log(secondLargestUnique([3, 5, 2, 5, 6, 6, 1]));
// Output: 5

console.log(secondLargestUnique([7, 7, 7]));
// Output: -1

console.log(secondLargestUnique([9, 8, 9, 7]));
// Output: 8
```

------------------------------------------------------------------------

# **Complexity Comparison**

  Approach        Time Complexity   Space Complexity   Notes
  --------------- ----------------- ------------------ -----------------------
  Single Pass     **O(n)**          O(1)               Most efficient
  Set + Sorting   **O(n log n)**    O(n)               Very simple and clean
  Two-Pass        **O(n)**          O(1)               Easy to understand

------------------------------------------------------------------------

# Recommended

Use **Approach 1 (Single Pass)** for best performance.
