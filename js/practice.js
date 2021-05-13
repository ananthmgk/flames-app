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
    assert.strictEqual(functionToTest(NaN), "");
    assert.strictEqual(functionToTest(""), "");
    assert.strictEqual(functionToTest("                      "), "");
    assert.strictEqual(functionToTest("***88???????!!!!##@#$@//!!"), "");
    assert.strictEqual(functionToTest("ramo"), "ramo");
    assert.strictEqual(functionToTest("Ram,o"), "Ramo");
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
sanitizeInputTest(sanitizeInput2);
sanitizeInputTest(sanitizeInput3);

