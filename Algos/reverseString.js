

function reverse(string){

    let words = string.split(' ');

    let output = [];

    words.forEach(word => {

        console.log(output);
        

        output.unshift(word);
    })

    output = output.join(' ');

    return output;


}

console.log(reverse('the dog ran over the hill'));
