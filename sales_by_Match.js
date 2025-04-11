
function sockMerchant(n, ar) {
    const colorCounts = {};
    let pairs = 0;

    for (let sock of ar) {
        colorCounts[sock] = (colorCounts[sock] || 0) + 1;
        if (colorCounts[sock] % 2 === 0) {
            pairs++;
        }
    }

    return pairs;
}
