function Uni(str) {

    if (!str.length) {
            console.log('The input must not be an empty string.');
    } else{

            string_to_array = function() {  
                 return str.split('');

            }
            var str1 = string_to_array(str);
                //bconsole.log(str1);
                
        var count = 0;
        for (var i = 0; i <= str1.length-1; i++) {
            count = count + 1;
            //console.log(count);  

        //console.log(str1[i]);
        

                if (!isNaN(str1[i])) {
                   
                     console.log (str1[i]);
                    count = str1[i] + 1;      
               
                }  
                if (count === str1.length){
                     
                    console.log('convert to a number');         
                }
        }
        
    }

   //console.log('convert to a number');  

    
}
//var str = '';
//var str = 'mk pp we vfv';-
// var str = '1 2 2 6 8 6 7 8‟';
// var str = '0000000'; -
//var str = 'nbjhj4hjh5kj';
//var str = '1 br 2 1 werr 3 1'-
var str = '2 "" add "" 1 1 asd 2 "" 3';-

Uni(str);