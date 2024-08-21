var largestAltitude = function(gain) {
    let currentAltitude = 0;
    let maxAltitude = 0;
    for (let change of gain) {
        currentAltitude += change; 
        if (currentAltitude > maxAltitude) {
            maxAltitude = currentAltitude; 
        }
    }

    return maxAltitude;
};