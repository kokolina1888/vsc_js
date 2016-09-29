(function () {

    /**
     * Converts a hexadecimal string to a decimal number.
     * @param {string} hex
    */
    function hex2dec(hex) {
        var i,
            result = 0,
            hexArr = replaceLetters(hex).reverse().map(Number);

        function replaceLetters(hex) {
            var i;

            hex = hex.split('');

            for (i in hex) {
                switch (hex[i]) {
                    case 'A':
                        hex[i] = 10;
                        break;
                    case 'B':
                        hex[i] = 11;
                        break;
                    case 'C':
                        hex[i] = 12;
                        break;
                    case 'D':
                        hex[i] = 13;
                        break;
                    case 'E':
                        hex[i] = 14;
                        break;
                    case 'F':
                        hex[i] = 10;
                        break;
                }
            }
            return hex;
        }


        for (i in hexArr) {
            result += (hexArr[i] * Math.pow(16, i));
        }

        return result;
    }


    console.log(hex2dec('12'));
    console.log(hex2dec('CA'));

} ());