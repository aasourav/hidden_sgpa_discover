// 'use strict';
 
// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
 
// let inputString = '';
// let currentLine = 0;
 
// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });
 
// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.trim();
//     });
    
//     main();    
// });
 
// function readLine() {
//     return inputString[currentLine++];
// }



let a = "0123456789"
let res = a.match(/[0-9]/g)
console.log(res)
