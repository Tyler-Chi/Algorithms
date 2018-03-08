

function capPermutation(string) {

    if (string.length === 0) {
        return [""];
    }

    let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    let output = [];

    let possibles = capPermutation(string.slice(1));

    if (numbers.includes(string[0])) {

        for (var i = 0; i < possibles.length; i++) {
            output.push(string[0] + possibles[i]);
        }

    } else {

        for (var i = 0; i < possibles.length; i++) {

            output.push(string[0].toUpperCase() + possibles[i]);
            output.push(string[0].toLowerCase() + possibles[i]);


        }

    }

    return output;

}

capPermutation('ab')