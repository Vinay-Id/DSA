const scoreOfString = function(s) {
    let finalVal = 0;
    
    for (let i = 1; i < s.length; i++) {
        finalVal += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
    }
    
    return finalVal;
};
scoreOfString("hello")