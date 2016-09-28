(function () {

    /**
    * Calculates the area of some figures.
    * @param {string} figure - The name of the figure.
    */
    function calculateArea(figure) {
        if (figure === 'square') {
            // S = a * a
            return (arguments.length <= 1 ? undefined : arguments[1]) * (arguments.length <= 1 ? undefined : arguments[1]);
        }

        if (figure === 'triangle') {
            // S = (a * h) / 2
            return (arguments.length <= 1 ? undefined : arguments[1]) * (arguments.length <= 2 ? undefined : arguments[2]) / 2;
        }

        if (figure === 'trapezoid') {
            // S = ((a + b) * h )/ 2
            return ((arguments.length <= 1 ? undefined : arguments[1]) + (arguments.length <= 2 ? undefined : arguments[2])) * (arguments.length <= 3 ? undefined : arguments[3]) / 2;
        }

        if (figure === 'circle') {
            // S = 3.14 * r * r
            return Math.PI * (arguments.length <= 1 ? undefined : arguments[1]) * (arguments.length <= 1 ? undefined : arguments[1]);
        }
    }

    console.log(calculateArea('square', 26));
    console.log(calculateArea('triangle', 20, 2));
    console.log(calculateArea('trapezoid', 6, 26, 12));
    console.log(calculateArea('circle', 26));

} ());