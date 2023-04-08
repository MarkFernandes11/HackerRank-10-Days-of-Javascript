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

function reverseString(s) {
    try {
      let temp = s.split("").reverse().join("");
      
      console.log(temp);
    } catch(err) {
      console.log(err.message);
      console.log(s);
    }
}


function main() {
    const s = eval(readLine());
    
    reverseString(s);
}