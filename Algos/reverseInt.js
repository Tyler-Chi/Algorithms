function reverseInt(int){

    let numbers = [];

    while (int > 0){

        let num = int % 10;
        numbers.push(num);
        int = (int - num ) / 10;


    }

    let output = 0;

    // while (numbers.length > 0 ){




    // }

    return parseInt(numbers.join(''));

}

console.log(reverseInt(15234));
