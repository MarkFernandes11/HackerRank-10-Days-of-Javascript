'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    let num;
    let s1 = "aeiou";
    let s2 = "bcdfg";
    let s3 = "hjklm";
    
    if(s1.includes(s.charAt(0))) num = 0;
    else if(s2.includes(s.charAt(0))) num = 1;
    else if(s3.includes(s.charAt(0))) num = 2;
    else num = 3;
    
    switch(num) {
      case 0:
        letter = 'A';
        break;
      
      case 1:
        letter = 'B';
        break;    
        
      case 2:
        letter = 'C';
        break;  
        
      case 3:
        letter = 'D';
        break;  
    }
    
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}