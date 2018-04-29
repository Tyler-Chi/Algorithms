function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x * 2);
        }, 2000);
    });
}

async function addAsync(x) {
    const a = await doubleAfter2Seconds(10);
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);
    return x + a + b + c;
}


const addAsync2 = async (x) => {
    const a = await doubleAfter2Seconds(10);

    console.log('hello')

    const b = await doubleAfter2Seconds(20);

    console.log('goodbye')

    const c = await doubleAfter2Seconds(30);
    return x + a + b + c;
}


addAsync2(10).then((sum) => {
    console.log(sum);
});

