//given an array of values, count the number of possible triangles you can make
//with the values as the lengths of the sides.



function triangleNumbers(array) {
    let possibleCombinations = [];
    array.sort();

    for (var i = 0; i < array.length - 2; i++) {

        for (var j = i + 1; j < array.length - 1; j++) {

            for (var k = j + 1; k < array.length; k++) {

                if (array[i] + array[j] > array[k]) {
                    possibleCombinations.push([i, j, k])
                }

            }

        }

    }

    return possibleCombinations.length;

}

triangleNumbers([2, 2, 3, 4])