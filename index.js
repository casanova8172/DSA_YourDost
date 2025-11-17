/**
 * Approach:
 * - Use two variables: largest and secondLargest.
 * - Traverse the array once.
 * - Update largest and secondLargest when needed.
 * - Ensure uniqueness: secondLargest must be < largest.
 *
 * Time Complexity: O(n)
 *
 * Sample:
 * Input:  [3, 5, 2, 5, 6, 6, 1]
 * Output: 5
 */

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

// ----------------------
// Sample Inputs / Outputs
// ----------------------
console.log(secondLargestUnique([3, 5, 2, 5, 6, 6, 1]));  // Output: 5
console.log(secondLargestUnique([7, 7, 7]));              // Output: -1
console.log(secondLargestUnique([10]));                   // Output: -1
console.log(secondLargestUnique([9, 8, 9, 7]));           // Output: 8
