(function () {

    /**
     * Converts metres to inches.
     * @param {number} metres
     */
    function metresToInches(metres) {
        if (typeof metres !== 'number' || metres < 0) {
            throw 'Invalid measure unit';
        }
        return (metres * 39.3700787).toFixed(2);
    }

    console.log(metresToInches(20));
    console.log(metresToInches(26));
} ());