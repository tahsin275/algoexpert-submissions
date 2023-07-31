// Write a function that takes in two strings and returns their longest common
// subsequence.
// A subsequence of a string is a set of characters that aren't necessarily
// adjacent in the string but that are in the same order as they appear in the
// string. For instance, the characters ["a", "c", "d"] from a subsequence of
// the string "abcd" and so do the characters ["b", "d"].
// Note that a signle character in a string and the string itself are both valid
// subsequence string. You can assume there will only be on longest common subsequence

function longestCommonSubsequence(str1, str2) {
    // Write your code here.
    let matrix = Array(str1.length + 1)
        .fill()
        .map(() => Array(str2.length + 1).fill(0));

    for (let i = 1; i <= str1.length; i++) {
        for (let j = 1; j <= str2.length; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1] + 1;
            } else {
                matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j - 1]);
            }
        }
    }

    // Now, let's trace back from the bottom-right to find the LCS
    let lcs = '';
    let i = str1.length;
    let j = str2.length;

    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            lcs = str1[i - 1] + lcs;
            i--;
            j--;
        } else if (matrix[i - 1][j] > matrix[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return lcs.split('');
}

const str1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const str2 = 'CCCDDEGDHAGKGLWAJWKJAWGKGWJAKLGGWAFWLFFWAGJWKAG';

console.log(longestCommonSubsequence(str1, str2));
