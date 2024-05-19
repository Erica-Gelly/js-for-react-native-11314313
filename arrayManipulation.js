let arrayManipulation
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

let testNumber = [3,6,9,4,5,8]
let testString = ['girl', 'hat', 'bag', 'woman', 'lecturer', 'cocktail']
let test1 = processArray(testNumber)
let test2 = formatArrayStrings(testString, testNumber)
console.log(test1)
console.log(test2)

export  {formatArrayStrings, testNumber};