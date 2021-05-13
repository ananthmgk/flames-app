function sanitizeInput(name) {
    if (name) {
        return name.replace(/[\s\d&\/\\#,+()$~%.'":*?<>{}!@]/g, '');
    }
    return "";
}

function isAlpha(c) {
    // return (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z');
    if (!c || c.length != 1) {
        return false;
    }
    let matchOutput = c.match(/[a-zA-Z]/g);
    return matchOutput && matchOutput[0] === c;
}

function sanitizeInput2(name) {
    let outputStr = []
    if (name) {
        for (let i = 0; i < name.length; i++) {
            if (isAlpha(name[i])) {
                outputStr.push(name[i]);
            }
        }
        return outputStr.join("");
    }
    return "";
}

function sanitizeInput3(name) {
    if (!name) {
        return "";
    }
    let matchOutput = name.match(/[a-zA-Z]/g);
    if (!matchOutput) {
        return "";
    }
    return matchOutput.join("");
}

function sanitizeInputTest(functionToTest) {
    console.log("Testing method = " + functionToTest.name);
    let assert = require('assert');
    assert.equal(functionToTest(NaN), "");
    assert.equal(functionToTest(""), "");
    assert.equal(functionToTest("                      "), "");
    assert.equal(functionToTest("***88???????!!!!##@#$@//!!"), "");
    assert.equal(functionToTest("ramo"), "ramo");
    assert.equal(functionToTest("Ram,o"), "Ramo");
    assert.equal(functionToTest("?ananth"), "ananth");
    assert.equal(functionToTest("usha***"), "usha");
    assert.equal(functionToTest("usha devi"), "ushadevi");
    assert.equal(functionToTest("ananth      murugan"), "ananthmurugan");
    assert.equal(functionToTest("abc def xyz"), "abcdefxyz");
    assert.equal(functionToTest("   usha devi"), "ushadevi");
    assert.equal(functionToTest("anan****th      murug//an$$$"), "ananthmurugan");
    assert.equal(functionToTest("$$$$abc def xyzxx****9(((("), "abcdefxyzxx");
    console.log("All Test passes successfully!");
}

sanitizeInputTest(sanitizeInput);
sanitizeInputTest(sanitizeInput2);
sanitizeInputTest(sanitizeInput3);

