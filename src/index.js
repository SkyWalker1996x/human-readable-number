function toReadable(number) {
    const firstNineteenNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
        'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const decimalNumbers = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
        'eighty', 'ninety']

    const stringNumber = number.toString();

    const extractTensNumber = (num) => {
        if (num <= 19) {
            return firstNineteenNumbers[num]
        } else if (num % 10 === 0) {
            return decimalNumbers[num / 10 - 2]
        } else {
            const strNum = num.toString()
            return `${decimalNumbers[+strNum[0] - 2]} ${firstNineteenNumbers[+strNum[1]]}`
        }
    }

    const extractHundredsNumber = (num) => {
        const numStr = num.toString();

        const rankHundreds = numStr[0];
        const rankTens = numStr[1] + numStr[2];

        const readableHundreds = `${firstNineteenNumbers[+rankHundreds]} hundred`;
        const readableTens =
            +rankTens <= 19
                ? firstNineteenNumbers[+rankTens]
                : extractTensNumber(+rankTens);

        return rankTens === '00' ? readableHundreds : `${readableHundreds} ${readableTens}`
    }

    if (stringNumber.length === 1) {
        return firstNineteenNumbers[number]
    }

    if (stringNumber.length === 2) {
        return extractTensNumber(number)
    }

    if (stringNumber.length === 3) {
        return extractHundredsNumber(number)
    }
}

console.log(toReadable(219));

module.exports = toReadable;
