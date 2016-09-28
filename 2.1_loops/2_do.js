var fact = 1,
    factStr = 'n! = ',
    n = 10;


do {
    fact *= n;
    factStr += n + '*';
    n -= 1;
} while (n);

//factStr = factStr.slice(0, -1);
factStr += ' = ' + fact;
console.log(factStr);

