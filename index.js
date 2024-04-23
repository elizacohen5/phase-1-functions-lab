// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue >= 42) {
        return someValue - 42;
    } else if (someValue <= 42) {
        return 42 - someValue;
    }
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    if (startBlock > endBlock) {
        return (startBlock - endBlock) * 264;
    } else if (startBlock < endBlock) {
        return (endBlock - startBlock) * 264;
    } else if (startBlock === endBlock) {
        return 0;
    }
}

function calculatesFarePrice(start, destination) {
    let totalFeet = distanceTravelledInFeet(start, destination);
    if (totalFeet < 400) {
        return 0;
    } else if ((totalFeet > 400) && (totalFeet < 2000)) {
        return (totalFeet - 400) * 0.02;
    } else if ((totalFeet > 2000) && (totalFeet < 2500)) {
        return 25; 
    } else if (totalFeet > 2500) {
        return 'cannot travel that far'
    }
}