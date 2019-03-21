const reduce = (numerator, denominator) => {
    const lowNum = Math.min(numerator, denominator);
    for (let i = lowNum; i > 0; i--) {
        if (i > numerator || i > denominator) {
            return [numerator, denominator];
        }

        if (numerator % i === 0 && denominator % i === 0) {
            numerator /= i;
            denominator /= i;
        }
    }
    return [numerator, denominator];
};

const toFraction = (number) => {
    const isNegative = number < 0;
    const string = number.toString();
    const split = string.split('.');
    let denominator;

    if (isNegative) {
        number = number * -1;
    }

    if (split[1]) {
        denominator = Math.pow(10, split[1].length);
    } else {
        denominator = 1;
    }

    const numerator = Math.round(number * denominator);

    return (isNegative ? '-' : '') + reduce(numerator, denominator).join('/');
};

toFraction(3.0);
