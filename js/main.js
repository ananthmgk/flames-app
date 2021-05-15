
const NOT_A_VALID_CHARACTER = '*';
const FLAMES = 'FLAMES';

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
    let result = {};
    name = sanitizeInput(name);
    if (name) { // proper name
        name = name.toLowerCase();
        for (letter of name) {
            if (!result[letter]) {
                result[letter] = 0;
            }
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
	
	let strikes = 0;
	let flamesCopy = FLAMES.split('');
    let flamesLetterPos = 0;
	while (strikes < 5) {
        console.log('strikes = ' + strikes);
        let currentCount = 1;
        console.log('currentCount = ' + currentCount);
        while (currentCount !== count) {
            if (flamesCopy[flamesLetterPos] !== NOT_A_VALID_CHARACTER) {
                console.log('currentLetter = ' + flamesCopy[flamesLetterPos]);
                currentCount++;
            }
            flamesLetterPos = (flamesLetterPos + 1) % FLAMES.length;
            console.log('flamesLetterPos = ' + flamesLetterPos);

            if (currentCount === count) {
                flamesCopy[flamesLetterPos] = NOT_A_VALID_CHARACTER;
                strikes++;
            }
        }
	}
    return flamesCopy;
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

function flames(name1, name2) {
    let name1Copy = sanitizeInput(name1).split('');
    let name2Copy = sanitizeInput(name2).split('');

    for (let i = 0; i < name1Copy.length; i++) {
        let c1 = name1Copy[i];
        for (let j = 0; j < name2Copy.length; j++) {
            let c2 = name2Copy[j];
            if (c1 === c2) {
                name1Copy[i] = NOT_A_VALID_CHARACTER;
                name2Copy[j] = NOT_A_VALID_CHARACTER;
            }
        }
    }

    let flamesCount = getValidCharacterCount(name1Copy) + 
        getValidCharacterCount(name2Copy);
    
    console.log(name1Copy.join(''));
    console.log(name2Copy.join(''));
    console.log(flamesCount);
    let flamesCharacter = getFlamesCharacter(flamesCount);
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


function alphaWiseCountTest(functionToTest) {
    console.log("Testing method = " + functionToTest.name);
    let assert = require('assert');
    assert.deepStrictEqual(functionToTest(NaN), {});
    assert.deepStrictEqual(functionToTest(""), {});
    assert.deepStrictEqual(functionToTest("                      "), {});
    assert.deepStrictEqual(functionToTest("***88???????!!!!##@#$@//!!"), {});
    assert.deepStrictEqual(functionToTest("ramo"), {'r': 1, 'a': 1, 'm': 1, 'o': 1});
    assert.deepStrictEqual(functionToTest("Ram,o"), {'r': 1, 'a': 1, 'm': 1, 'o': 1});
    assert.deepStrictEqual(functionToTest("?ananth"), {'a': 2, 'n': 2, 't': 1, 'h': 1});
    assert.deepStrictEqual(functionToTest("usha***"), {'u': 1, 's': 1, 'h': 1, 'a': 1});
    assert.deepStrictEqual(functionToTest("usha devi"), {'u': 1, 's': 1, 'h': 1, 'a': 1, 'd': 1, 'e': 1, 'v': 1, 'i': 1});
    assert.deepStrictEqual(functionToTest("ananth      murugan"), {'a': 3, 'n': 3, 't': 1, 'h': 1, 'm': 1, 'u': 2, 'r': 1, 'g': 1});
    assert.deepStrictEqual(functionToTest("abc def xyz"), {'a': 1, 'b': 1, 'c': 1, 'd': 1, 'e': 1, 'f': 1, 'x': 1, 'y': 1, 'z': 1});
    assert.deepStrictEqual(functionToTest("   usha devi"), {'u': 1, 's': 1, 'h': 1, 'a': 1, 'd': 1, 'e': 1, 'v': 1, 'i': 1});
    assert.deepStrictEqual(functionToTest("anan****th      murug//an$$$"), {'a': 3, 'n': 3, 't': 1, 'h': 1, 'm': 1, 'u': 2, 'r': 1, 'g': 1});
    assert.deepStrictEqual(functionToTest("$$$$abc def xyzxx****9(((("), {'a': 1, 'b': 1, 'c': 1, 'd': 1, 'e': 1, 'f': 1, 'x': 3, 'y': 1, 'z': 1});
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

sanitizeInputTest(sanitizeInput);
alphaCountTest(alphaCount);
alphaWiseCountTest(alphaWiseCount);

flames('ananth', 'usha');


