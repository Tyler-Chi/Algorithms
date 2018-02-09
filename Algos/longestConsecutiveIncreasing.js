//given an array, find the longest increasing contiguous subArray

function longestConsecutiveIncreasing(array) {

    let longestLength = 0;
    let currentArray = [];

    for (var i = 0; i < array.length; i++) {
        if (currentArray.length === 0) {
            currentArray.push(array[i]);
        } else {

            if (array[i] > currentArray[currentArray.length - 1]) {
                currentArray.push(array[i]);
            } else {
                longestLength = Math.max(longestLength, currentArray.length);
                currentArray = [];
                currentArray.push(array[i]);
            }

        }
    }
    return longestLength;
}