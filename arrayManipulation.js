function processArray(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num ** 2;
        } else {
            return num * 3;
        }
    });
}
