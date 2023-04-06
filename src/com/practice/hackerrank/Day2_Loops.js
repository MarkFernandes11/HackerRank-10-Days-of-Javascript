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

function vowelsAndConsonants(s) {
    let consonants = "";
    
    for(let i=0; i<s.length; i++) {
      if("aeiou".includes(s.charAt(i))) {
        console.log(s.charAt(i));
      } else {
        consonants += s.charAt(i);
      }
    }
    
    for(let i=0; i<consonants.length; i++) {
      console.log(consonants.charAt(i));
    }      
}

function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}