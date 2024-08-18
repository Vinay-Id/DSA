// Input: title = "capiTalIze tHe titLe"
// Output: "Capitalize The Title"
// Explanation:
// Since all the words have a length of at least 3, the first letter of each word is uppercase, and the remaining letters are lowercase.

var capitalizeTitle = function(title) {
    return title.split(' ').map(word => {
        if (word.length > 2) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        }
        return word.toLowerCase();
    }).join(' ');
};
