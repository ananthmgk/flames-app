
const RUN_TESTS = true;
const FLAMES = 'FLAMES';
const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz';
const FLAMES_RESULT = {
    'F': 'Friendship',
    'L': 'Love',
    'A': 'Affection',
    'M': 'Marriage',
    'E': 'Enemies',
    'S': 'Siblings'
}

// main methods

function sanitizeInput(name) {
    if (!name) {
        return "";
    }
    let matchOutput = name.match(/[a-zA-Z]/g);
    if (!matchOutput) {
        return "";
    }
    return matchOutput.join("").toLowerCase();
}

function alphaWiseCount(name) {
    let result = getEmptyAlphaResult();
    name = sanitizeInput(name);
    if (name) { // proper name
        for (letter of name) {
            result[letter] += 1;
        }
    }
    return result;
}

function alphaCount(name) {
    return sanitizeInput(name).length;
}

function countFlames(count) {
	if (count === 0) {
		return 'F';
	} 
    let flamesCopy = FLAMES.split('');
    // START_IDX + (COUNT - 1) % SIZE_OF(FLAMES_ARRAY)
    let start_idx = 0;
    while (flamesCopy.length > 1) {
        start_idx = (start_idx + count - 1) % flamesCopy.length;
        flamesCopy.splice(start_idx, 1);
    }
    return flamesCopy[0];
}

function getEmptyAlphaResult() {
    let result = {};
    for (let c of ALPHABETS) {
        result[c] = 0;
    }
    return result;
}

function getUnCommonCharactersCount(name1, name2) {
    let alpha1 = alphaWiseCount(name1);
    let alpha2 = alphaWiseCount(name2);
    let count = 0;
    for (let c of ALPHABETS) {
        count += Math.abs(alpha1[c] - alpha2[c]);
    }
    return count;
}

function flames(name1, name2) {
    let commonCharactersCount = getUnCommonCharactersCount(name1, name2);
    let flamesCharacter = countFlames(commonCharactersCount);
    return FLAMES_RESULT[flamesCharacter];
}



// Test methdos

function alphaCountTest(functionToTest) {
    console.log("Testing method = " + functionToTest.name);
    let assert = require('assert');
    assert.strictEqual(functionToTest(NaN), 0);
    assert.strictEqual(functionToTest(""), 0);
    assert.strictEqual(functionToTest("                      "), 0);
    assert.strictEqual(functionToTest("***88???????!!!!##@#$@//!!"), 0);
    assert.strictEqual(functionToTest("ramo"), "ramo".length);
    assert.strictEqual(functionToTest("Ram,o"), "Ramo".length);
    assert.strictEqual(functionToTest("?ananth"), "ananth".length);
    assert.strictEqual(functionToTest("usha***"), "usha".length);
    assert.strictEqual(functionToTest("usha devi"), "ushadevi".length);
    assert.strictEqual(functionToTest("ananth      murugan"), "ananthmurugan".length);
    assert.strictEqual(functionToTest("abc def xyz"), "abcdefxyz".length);
    assert.strictEqual(functionToTest("   usha devi"), "ushadevi".length);
    assert.strictEqual(functionToTest("anan****th      murug//an$$$"), "ananthmurugan".length);
    assert.strictEqual(functionToTest("$$$$abc def xyzxx****9(((("), "abcdefxyzxx".length);
    console.log("All Test passes successfully!");    
}

function alphaWiseCountTest(functionToTest) {
    console.log("Testing method = " + functionToTest.name);
    let assert = require('assert');
    assert.deepStrictEqual(functionToTest(NaN), getEmptyAlphaResult());
    assert.deepStrictEqual(functionToTest(""), getEmptyAlphaResult());
    assert.deepStrictEqual(functionToTest("                      "), getEmptyAlphaResult());
    assert.deepStrictEqual(functionToTest("***88???????!!!!##@#$@//!!"), getEmptyAlphaResult());
    
    let result = getEmptyAlphaResult();
    result['r'] = 1;
    result['a'] = 1;
    result['m'] = 1;
    result['o'] = 1;
    
    assert.deepStrictEqual(functionToTest("ramo"), result);
    assert.deepStrictEqual(functionToTest("Ram,o"), result);
    
    result = getEmptyAlphaResult();
    result['a'] = 2;
    result['n'] = 2;
    result['t'] = 1;
    result['h'] = 1;
    assert.deepStrictEqual(functionToTest("?ananth"), result);
    
    result = getEmptyAlphaResult();
    result['u'] = 1;
    result['s'] = 1;
    result['h'] = 1;
    result['a'] = 1;
    assert.deepStrictEqual(functionToTest("usha***"), result);
    
    result = getEmptyAlphaResult();
    result['u'] = 1;
    result['s'] = 1;
    result['h'] = 1;
    result['a'] = 1;
    result['d'] = 1;
    result['e'] = 1;
    result['v'] = 1;
    result['i'] = 1;
    assert.deepStrictEqual(functionToTest("usha devi"), result);
    assert.deepStrictEqual(functionToTest("   usha devi"), result);
    
    result = getEmptyAlphaResult();
    result['a'] = 3;
    result['n'] = 3;
    result['t'] = 1;
    result['h'] = 1;
    result['m'] = 1;
    result['u'] = 2;
    result['r'] = 1;
    result['g'] = 1;
    assert.deepStrictEqual(functionToTest("ananth      murugan"), result);
    assert.deepStrictEqual(functionToTest("anan****th      murug//an$$$"), result);
    
    result = getEmptyAlphaResult();
    result['a'] = 1;
    result['b'] = 1;
    result['c'] = 1;
    result['d'] = 1;
    result['e'] = 1;
    result['f'] = 1;
    result['x'] = 1;
    result['y'] = 1;
    result['z'] = 1;
    assert.deepStrictEqual(functionToTest("abc def xyz"), result);
    
    result = getEmptyAlphaResult();
    result['a'] = 1;
    result['b'] = 1;
    result['c'] = 1;
    result['d'] = 1;
    result['e'] = 1;
    result['f'] = 1;
    result['x'] = 3;
    result['y'] = 1;
    result['z'] = 1;
    assert.deepStrictEqual(functionToTest("$$$$abc def xyzxx****9(((("), result);
    
    console.log("All Test passes successfully!");    
}

function sanitizeInputTest(functionToTest) {
    console.log("Testing method = " + functionToTest.name);
    let assert = require('assert');
    assert.strictEqual(functionToTest(NaN), "");
    assert.strictEqual(functionToTest(""), "");
    assert.strictEqual(functionToTest("                      "), "");
    assert.strictEqual(functionToTest("***88???????!!!!##@#$@//!!"), "");
    assert.strictEqual(functionToTest("ramo"), "ramo");
    assert.strictEqual(functionToTest("Ram,o"), "ramo");
    assert.strictEqual(functionToTest("?ananth"), "ananth");
    assert.strictEqual(functionToTest("usha***"), "usha");
    assert.strictEqual(functionToTest("usha devi"), "ushadevi");
    assert.strictEqual(functionToTest("ananth      murugan"), "ananthmurugan");
    assert.strictEqual(functionToTest("abc def xyz"), "abcdefxyz");
    assert.strictEqual(functionToTest("   usha devi"), "ushadevi");
    assert.strictEqual(functionToTest("anan****th      murug//an$$$"), "ananthmurugan");
    assert.strictEqual(functionToTest("$$$$abc def xyzxx****9(((("), "abcdefxyzxx");
    console.log("All Test passes successfully!");
}

function getUnCommonCharactersCountTest(functionToTest) {
    console.log("Testing method = " + functionToTest.name);
    let assert = require('assert');
    assert.strictEqual(functionToTest(NaN, NaN), 0);
    assert.strictEqual(functionToTest('', ''), 0);
    assert.strictEqual(functionToTest(NaN, ''), 0);
    assert.strictEqual(functionToTest('', NaN), 0);
    assert.strictEqual(functionToTest('       ', '       '), 0);
    assert.strictEqual(functionToTest('??????', '&&&&&%%$$$$**@@@@       '), 0);
    assert.strictEqual(functionToTest('abcdef', 'abc'), 3);
    assert.strictEqual(functionToTest('abc', 'abc'), 0);
    assert.strictEqual(functionToTest('a   b   c  ', 'abc'), 0);
    assert.strictEqual(functionToTest('abc', 'a   ***b  c'), 0);
    assert.strictEqual(functionToTest('abc', 'aaaaa'), 6);
    assert.strictEqual(functionToTest('abc', 'defg'), 7);
    console.log("All Test passes successfully!");
}

if (RUN_TESTS) {
    sanitizeInputTest(sanitizeInput);
    alphaCountTest(alphaCount);
    alphaWiseCountTest(alphaWiseCount);
    getUnCommonCharactersCountTest(getUnCommonCharactersCount);    
}

let name1 = 'Ananth'
let name2 = 'Usha'
console.log(`Relationship between ${name1} and ${name2} is "${flames(name1, name2)}"`);
