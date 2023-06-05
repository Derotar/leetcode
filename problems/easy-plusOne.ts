function plusOne(digits: number[]): number[] {
    let minder = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        if (minder) {
            digits[i] += 1;
            if (digits[i] > 9) digits[i] = 0;
            else minder = 0;
        }
    }
    if (minder) { digits[0] = 1; digits.push(0) }
    return digits;
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
