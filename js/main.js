
const NOT_A_VALID_CHARACTER = '*';
const FLAMES = 'FLAMES';
const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz';

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

function getFlamesCharacter(count) {
	if (count === 0) {
		return 'S';
	} 

    let flamesCopy = FLAMES.split('');
	
}

function getValidCharacterCount(name) {
    let count = 0;
    for (letter of name) {
        if (letter !== NOT_A_VALID_CHARACTER) {
            ++count;
        }
    }
    return count;
}

function getUnCommonCharactersCount(name1, name2) {
    let alpha1 = alphaWiseCount(name1);
    let alpha2 = alphaWiseCount(name2);

    let count = 0;
    for (let c of ALPHABETS) {
        let v1 = alpha1[c] || 0;
        let v2 = alpha2[c] || 0;
        count += Math.abs(v1 - v2);
    }
    return count;
}

function getUnCommonCharactersCount0(name1, name2) {
    let name1Copy = sanitizeInput(name1).split('');
    let name2Copy = sanitizeInput(name2).split('');

    for (let i = 0; i < name1Copy.length; i++) {   
        let c1 = name1Copy[i];
        for (let j = 0; j < name2Copy.length; j++) { 
            let c2 = name2Copy[j];
            if (c1 === c2) {
                name1Copy[i] = NOT_A_VALID_CHARACTER;
                name2Copy[j] = NOT_A_VALID_CHARACTER;
                break;
            }
        }
    }

    console.log(name1Copy.join(''));
    console.log(name2Copy.join(''));

    return getValidCharacterCount(name1Copy) + getValidCharacterCount(name2Copy);
}




function flames(name1, name2) {
    let commonCharactersCount = getUnCommonCharactersCount(name1, name2);
    console.log(commonCharactersCount);
    let flamesCharacter = getFlamesCharacter(commonCharactersCount);
    console.log(flamesCharacter);
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


function getEmptyAlphaResult() {
    let result = {};
    for (let c of ALPHABETS) {
        result[c] = 0;
    }
    return result;
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
    
    // result = getEmptyAlphaResult();
    // assert.deepStrictEqual(functionToTest("usha***"), {'u': 1, 's': 1, 'h': 1, 'a': 1});
    
    // result = getEmptyAlphaResult();
    // assert.deepStrictEqual(functionToTest("usha devi"), {'u': 1, 's': 1, 'h': 1, 'a': 1, 'd': 1, 'e': 1, 'v': 1, 'i': 1});
    
    // result = getEmptyAlphaResult();
    // assert.deepStrictEqual(functionToTest("ananth      murugan"), {'a': 3, 'n': 3, 't': 1, 'h': 1, 'm': 1, 'u': 2, 'r': 1, 'g': 1});
    
    // result = getEmptyAlphaResult();
    // assert.deepStrictEqual(functionToTest("abc def xyz"), {'a': 1, 'b': 1, 'c': 1, 'd': 1, 'e': 1, 'f': 1, 'x': 1, 'y': 1, 'z': 1});
    
    // result = getEmptyAlphaResult();
    // assert.deepStrictEqual(functionToTest("   usha devi"), {'u': 1, 's': 1, 'h': 1, 'a': 1, 'd': 1, 'e': 1, 'v': 1, 'i': 1});
    
    // result = getEmptyAlphaResult();
    // assert.deepStrictEqual(functionToTest("anan****th      murug//an$$$"), {'a': 3, 'n': 3, 't': 1, 'h': 1, 'm': 1, 'u': 2, 'r': 1, 'g': 1});
    
    // result = getEmptyAlphaResult();
    // assert.deepStrictEqual(functionToTest("$$$$abc def xyzxx****9(((("), {'a': 1, 'b': 1, 'c': 1, 'd': 1, 'e': 1, 'f': 1, 'x': 3, 'y': 1, 'z': 1});
    
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


sanitizeInputTest(sanitizeInput);
alphaCountTest(alphaCount);
alphaWiseCountTest(alphaWiseCount);
getUnCommonCharactersCountTest(getUnCommonCharactersCount);

// flames('ananth', 'aaaa');


