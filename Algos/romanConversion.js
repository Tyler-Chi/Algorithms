function romanConversion(string) {

    let values = {
        'X': 10,
        'V': 5,
        'I': 1
    };

    let nums = string.split('');
    let total = 0;

    for (var i = 0; i < nums.length; i++) {

        let num = nums[i];

        if (i === nums.length - 1) {
            total += values[num];
        } else {

            if (nums[i] < nums[i + 1]) {
                total -= values[nums[i]]
            } else {
                total += values[nums[i]];
            }
        }
    }
    return total;
}