var reverseVowels = function (s) {
    const vowels = 'aeiouAEIOU';
    const arr = s.split('');
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        if (!vowels.includes(arr[i])) {
            i++;
            continue;
        }
        if (!vowels.includes(arr[j])) {
            j--;
            continue;
        }
        // Swap the vowels
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        // Move both pointers towards the middle
        i++;
        j--;
    }

    return arr.join('');
};

const s = 'aA';

console.log(reverseVowels(s));
