// Example 1:
// Input: words = ["Hello","Alaska","Dad","Peace"]
// Output: ["Alaska","Dad"]

// Example 2:
// Input: words = ["omk"]
// Output: []


function findWords(words) {
    const topRow = 'qwertyuiop';
    const homeRow = 'asdfghjkl';
    const bottomRow = 'zxcvbnm';
    function canBeTypedWithOneRow(word) {
        const lowerWord = word.toLowerCase();
        const firstChar = lowerWord[0];
        let row;
        if (topRow.includes(firstChar)) {
            row = topRow;
        } else if (homeRow.includes(firstChar)) {
            row = homeRow;
        } else if (bottomRow.includes(firstChar)) {
            row = bottomRow;
        } else {
            return false;
        }
        for (let char of lowerWord) {
            if (!row.includes(char)) {
                return false;
            }
        }

        return true;
    }

    return words.filter(canBeTypedWithOneRow);
}
