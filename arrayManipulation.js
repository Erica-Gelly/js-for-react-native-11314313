function processArray(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num ** 2;
        } else {
            return num * 3;
        }
    });
}


function formatArrayStrings(strings, processedNumbers) {
    return strings.map((str, index) => {
        const num = processedNumbers[index];
        if (num % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}