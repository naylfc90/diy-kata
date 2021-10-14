const reachDestination = (distance, speed) => {
    const destination = distance / speed;
    const result = Math.round(destination * 2) / 2;

    return 'I should be there in ' + result + ' hours.'
};

module.exports = reachDestination;
