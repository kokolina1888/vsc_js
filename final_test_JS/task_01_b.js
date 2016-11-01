// 1.   Напишете функция, която приема като параметър масив
// с три елемента - [n, m, p]. Функцията връща n - тата цифра от числото m, в зависимост от стойността на p. 
// a.   Ако р = true, функцията връща n-тата цифра на числото 
//отдясно -наляво. 
// b.   Ако p=false - n-тата цифра на числото отляво - надясно.
// Ако числото m е с по-малко от n цифри – функцията отпечатва в конзолата 
//“The number doesn`t have n digits”. 
//Ако подадената стойност за m не е число – “Parameter not a number”.
// Input                         Output
// [1,9, true]                          9
// [2, -351, false]                     5
// [6, 923456, false]                   6
// [4, 1451.78, true]                   5
// [10, -878.225, true]             The number doesn’t have 10 digits
// [3, ‘pokughbv’, false]               Parameter not a number

function nthNumber(arg){
    var p = arg[2], 
    		len, myArr, 
    		newStr;
    
if (isNaN(+arg[0]) || isNaN(+arg[1])) {
 console.log('Parameter not a number');
}
else {
 newStr = [];
 myArr = arg[1].toString();
 for (var i = 0; i< myArr.length; i++) {
     if (!isNaN(+myArr[i])) {
         newStr.push(+myArr[i]);
     }
 }
 if (newStr.length>=arg[0]) {
    if (p === true) {
        console.log(newStr[newStr.length-arg[0]]);
    } else {
        console.log(newStr[arg[0]-1]);
    }
     
 } else {
     console.log('The number doesn’t have '+ arg[0] + ' digits');    
 }
    
}

}

arr =  [3, 'pokughbv', false];

nthNumber(arr);

