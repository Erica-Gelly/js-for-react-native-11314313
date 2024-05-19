function processArray(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num ** 2;
        } else {
            return num * 3;
        }
    });
}


function formatArrayStrings(strings, numbers) {
    let processedNumbers = processArray(numbers);
    return strings.map((str, index) => {
        let num = processedNumbers[index];
        if (num % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

export default arrayManipulation;