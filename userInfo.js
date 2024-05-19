import {formatArrayStrings, testNumber} from "./arrayManipulation.js"

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
    }));
}

let testNames = ['Ama', 'James', 'Priscilla', 'Collins', 'Havi', 'Charlotte']
let testModifiedNames = formatArrayStrings(testNames, testNumber)
let test3 = createUserProfiles(testNames, testModifiedNames)
 console.log(test3);