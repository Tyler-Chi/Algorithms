// Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.

function uniqueDigits(n) {

    let output = [];

    function unique(number) {
        let numbers = {};
        let currentNumber;

        while (number > 0) {
            currentNumber = number % 10;
            if (numbers[currentNumber] !== undefined) {
                return false;
            } else {
                numbers[currentNumber] = 1;
                number = Math.floor(number / 10);
            }
        }
        return true;
    }

    for (var i = 0; i <= 10 ** n; i++) {
        if (unique(i)) {
            output.push(i)
        }
    }
    return output.length;
}
