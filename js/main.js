
function sanitizeInput(name) {
    if (!name) {
        return "";
    }
    let matchOutput = name.match(/[a-zA-Z]/g);
    if (!matchOutput) {
        return "";
    }
    return matchOutput.join("");
}

function alphaWiseCount(name) {
    let result = {};
    name = sanitizeInput(name);
    if (name) {
        console.log("do something");
        // logic to do it.
    }
    return result;
}

function alphaCount(name) {
    return sanitizeInput(name).length;
}

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
    // assert.deepStrictEqual(functionToTest("usha devi"), "ushadevi".length);
    // assert.deepStrictEqual(functionToTest("ananth      murugan"), "ananthmurugan".length);
    // assert.deepStrictEqual(functionToTest("abc def xyz"), "abcdefxyz".length);
    // assert.deepStrictEqual(functionToTest("   usha devi"), "ushadevi".length);
    // assert.deepStrictEqual(functionToTest("anan****th      murug//an$$$"), "ananthmurugan".length);
    // assert.deepStrictEqual(functionToTest("$$$$abc def xyzxx****9(((("), "abcdefxyzxx".length);
    console.log("All Test passes successfully!");    
}

function flames(name1, name2) {
    return "F - L - A - M - E - S";
}

alphaCountTest(alphaCount);
alphaWiseCountTest(alphaWiseCount);

