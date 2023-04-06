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

function perimeter(PI, r) {
  return 2 * PI * r;
}

function area(PI, r) {
  return PI * Math.pow(r, 2);
}

function main() {
    let r = +(readLine());
    const PI = Math.PI;

    console.log(area(PI, r));
    
    console.log(perimeter(PI, r));

    try {    
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch(error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
}