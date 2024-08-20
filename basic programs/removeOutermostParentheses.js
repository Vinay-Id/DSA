function removeOuterParentheses(s) {
    let depth = 0;
    let result = '';

    for (let char of s) {
        if (char === '(') {
            if (depth > 0) {
                result += char;  
            }
            depth++;
        } else if (char === ')') {
            depth--;
            if (depth > 0) {
                result += char; 
            }
        }
    }

    return result;
}