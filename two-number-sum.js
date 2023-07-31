//   Write a function that takes in a non-empty array of distinct integers and an
//   integer representing a target sum. If any two numbers in the input array sum
//   up to the target sum, the function should return them in an array, in any
//   order. If no two numbers sum up to the target sum, the function should return
//   an empty array.

//   Note that the target sum has to be obtained by summing two different integers
//   in the array; you can't add a single integer to itself in order to obtain the
//   target sum.

//  Sample Input
//  array = [3, 5, -4, 8, 11, 1, -1, 6]
//  targetSum = 10

//  Sample Output
//  [-1, 11]

function twoNumberSum(array, targetSum) {
    // Write your code here.
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == targetSum) {
                return [array[i], array[j]];
            }
        }
    }
    return [];
}

const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

console.log(twoNumberSum(array, targetSum));
