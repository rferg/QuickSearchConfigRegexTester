const filePath = process.argv[2];
const { regexArray, testStrings } = require(filePath);

// testStrings: {str: string, expected: string}[]
// regexArray: { regex: RegExp, label: string}[]

// const testStrings = [
//     { str: ':f[dnm, eiwe, aaa]', expected: 'flag'},
//     { str: ':z[134]', expected: null} // for no match
// ]
// expected will be expected label of first match in regexArray

// const regexArray = [
//     {regex: /:f\[\w+(,\s*\w*)*\]/, label: 'flag'},
//     {regex: /:k\[\w+(\s+\w+)*(,\s*\w*(\s+\w+)*)*\]/, label: 'keyword'},
//     {regex: /^\w+$/, label: 'word'}
// ];


const GREEN = '\x1b[32m%s\x1b[0m';
const RED = '\x1b[31m%s\x1b[0m';


let numPassed = 0;

testStrings.forEach(test => {
    for (let i = 0; i < regexArray.length; i++) {
        if (regexArray[i].regex.test(test.str)) {
            const passed = test.expected === regexArray[i].label;
            const color = passed ? GREEN : RED;
            console.log(color ,`
            ${test.str}

                ${passed ? 'PASS':'FAIL'}.
                Expected: ${test.expected}, Got: ${regexArray[i].label}.`)
            numPassed = numPassed + passed;
            break;
        }
        
        if (i === regexArray.length - 1) {
            const passed = test.expected === null;
            const color = passed ? GREEN : RED;
            console.log(color, `
            ${test.str}

                ${passed ? 'PASS':'FAIL'}.
                Expected: ${test.expected}, Got: ${null}.`);
            numPassed = numPassed + passed;
        }
    }
});
console.log(`Passed ${numPassed} of ${testStrings.length}`);
if (numPassed === testStrings.length) {
    console.log(GREEN, 'ALL TESTS PASSED!!!');
} else {
    console.log(RED, 'SOME TESTS FAILED!!!');
}