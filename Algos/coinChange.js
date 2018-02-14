function coinChange(amount, coins) {

    if (amount === 0) {
        return 0;
    }

    let possibles = [];

    coins.forEach(coin => {
        if (coin < amount) {
            possibles.push(1 + coinChange(amount - coin, coins))
        }
    })

    if (possibles.length === 0) {
        return -1;
    } else {
        return Math.min(...possibles)
    }
}

coinChange(5, [6, 7])