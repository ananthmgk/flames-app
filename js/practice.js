const NOT_A_VALID_CHARACTER = '*';

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

function getValidCharacterCount(name) {
    let count = 0;
    for (letter of name) {
        if (letter !== NOT_A_VALID_CHARACTER) {
            ++count;
        }
    }
    return count;
}


function toFlamesStringBySwitchCase(flamesCharacter) {
    let flamesStr = "";
    switch(flamesCharacter) {
      case "F":
        flamesStr = "Friends";
        break;
      case "L":
        flamesStr = "Love";
        break;
      case "A":
        flamesStr = "Affection";
        break;
        case "M":
        flamesStr = "Marriage";
        break;
      case "E":
        flamesStr = "Enemies";
        break;
      case "S":
        flamesStr = "Siblings";
        break;
    } 
    return flamesStr;
  }
   
  
function toFlamesStringByIfElseLoop(flamesCharacter) {
    let flamesStr = "";
    if (flamesCharacter == 'F') {
        flamesStr = "Friends";
    } else if (flamesCharacter == 'L') {
        flamesStr = "Love";
    } else if (flamesCharacter == 'A') {
        flamesStr = "Affection"
    } else if (flamesCharacter == 'M') {
        flamesStr = "Marriage"
    } else if (flamesCharacter == 'E') {
        flamesStr = "Enemies"
    } else {
        flamesStr = "Siblings"
    }
    return flamesStr;
} 

function toFlamesStringTest(functionToTest) {
    console.log("Testing method = " + functionToTest.name);
    let assert = require('assert');
    assert.strictEqual(functionToTest('F'), 'Friends');
    assert.strictEqual(functionToTest('L'), 'Love');
    assert.strictEqual(functionToTest('A'), 'Affection');
    assert.strictEqual(functionToTest('M'), 'Marriage');
    assert.strictEqual(functionToTest('E'), 'Enemies');
    assert.strictEqual(functionToTest('S'), 'Siblings');
    console.log("All Test passes successfully!");
}

toFlamesStringTest(toFlamesStringByIfElseLoop);
toFlamesStringTest(toFlamesStringBySwitchCase);
sanitizeInputTest(sanitizeInput);
sanitizeInputTest(sanitizeInput2);
sanitizeInputTest(sanitizeInput3);

