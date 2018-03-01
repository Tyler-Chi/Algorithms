// the degree of an array is the maximum occurence of any given value;

function arrayDegree(array) {

    let degree = 0;

    let counter = {};

    for (var i = 0; i < array.length; i++) {
        let number = array[i];

        if (counter[number] === undefined) {
            counter[number] = 1;
        } else {
            counter[number] += 1;
        }

        if (counter[number] > degree) {
            degree = counter[number]
        }

    }

    return degree;

}

console.log('hello');


let a = [1, 1, 2, 3, 4, 5, 7, 8]

arrayDegree(a)