
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
    // to be implemented.
}

function alphaCount(name) {
    return sanitizeInput(name).length;
}

function alphaCountTest(functionToTest) {
    console.log("Testing method = " + functionToTest.name);
    let assert = require('assert');
    assert.equal(functionToTest(NaN), 0);
    assert.equal(functionToTest(""), 0);
    assert.equal(functionToTest("                      "), 0);
    assert.equal(functionToTest("***88???????!!!!##@#$@//!!"), 0);
    assert.equal(functionToTest("ramo"), "ramo".length);
    assert.equal(functionToTest("Ram,o"), "Ramo".length);
    assert.equal(functionToTest("?ananth"), "ananth".length);
    assert.equal(functionToTest("usha***"), "usha".length);
    assert.equal(functionToTest("usha devi"), "ushadevi".length);
    assert.equal(functionToTest("ananth      murugan"), "ananthmurugan".length);
    assert.equal(functionToTest("abc def xyz"), "abcdefxyz".length);
    assert.equal(functionToTest("   usha devi"), "ushadevi".length);
    assert.equal(functionToTest("anan****th      murug//an$$$"), "ananthmurugan".length);
    assert.equal(functionToTest("$$$$abc def xyzxx****9(((("), "abcdefxyzxx".length);
    console.log("All Test passes successfully!");    
}


function flames(name1, name2) {
    return "F - L - A - M - E - S";
}

alphaCountTest(alphaCount);

