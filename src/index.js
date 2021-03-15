module.exports = function reverse (n) {
    if (n < 0) {
        n *= -1;
        return n.toFixed(0).split('').reverse().join('')-0;
    } else {
    return n.toFixed(0).split('').reverse().join('')-0;
    }
};
