var divide = function(dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647; 
    }
    return Math.trunc(dividend / divisor);
};
