var n;

function show(n) {
            
    switch (n) {
        case 0: n = "Zero"; break;
        case 9: n = "Nine"; break;
        case 10: n = "Ten"; break;
        case 12: n = "Twelve"; break;
        case 19: n = "Nineteen"; break;
        case 25: n = "Twenty five"; break;
        case 98: n = "Ninety eight"; break;
        case 273: n = "Two hundred and seventy three"; break;
        default: n = "Enter a number"; break;
    }
    console.log(n);
}

show(12);
