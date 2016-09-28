(function () {

    /**
     * Checks whether the last third digit of a number is seven.
     * @param {number} num - A numeric value.
     */
    function isSeven(num) {
        if(typeof num !== 'number') {
            throw 'Invalid number.';
        }
        return Math.floor(num % 1000 / 100) === 7;
    }

    console.log(isSeven(766));
    console.log(isSeven(226));

} ());