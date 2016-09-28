(function () {

    /**
     * Calculates the volume of a cylinder.
     * @param {Number} r - The radius of the cylinder.
     * @param {Number} h - The height of the cylinder.
     */
    function volumeCylinder(radius, height) {
        if (typeof radius !== 'number' || typeof height !== 'number') {
            throw 'The radius and the height must be numbers.';
        }

        return Math.PI * radius * radius * height;
    }

    console.log(volumeCylinder(20, 6));
    console.log(volumeCylinder(26, 16));
} ());