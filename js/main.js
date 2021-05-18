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
    if (name) {
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

function getUniqueCharactersCount(name1, name2) {
    let alpha1 = alphaWiseCount(name1);
    let alpha2 = alphaWiseCount(name2);
    let count = 0;
    for (let c of ALPHABETS) {
        count += Math.abs(alpha1[c] - alpha2[c]);
    }
    return count;
}

function flames(name1, name2) {
    let uniqueCharactersCount = getUniqueCharactersCount(name1, name2);
    let flamesCharacter = countFlames(uniqueCharactersCount);
    return FLAMES_RESULT[flamesCharacter];
}
