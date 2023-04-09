let res = document.getElementById("res");
let equalsCalled = false;

function clearConsole(res) {
    if (equalsCalled) {
        equalsCalled = false;
        res.innerHTML = '';
    }
}

function checkOperator() {
    if (res.innerHTML.endsWith('+') || res.innerHTML.endsWith('-') || res.innerHTML.endsWith('*') || res.innerHTML.endsWith('/')) {
        return true;
    }
}

btn0.onclick = function () {
    clearConsole(res);
    res.innerHTML += '0';
}

btn1.onclick = function () {
    clearConsole(res);
    res.innerHTML += '1';
}

btnClr.onclick = function () {
    res.innerHTML = '';
}

btnEql.onclick = function () {
    let res = document.getElementById("res");
    equalsCalled = true;

    if (res.innerHTML.includes('+')) {
        res.innerHTML = calculate(res.innerHTML, '+');
    } else if (res.innerHTML.includes('-')) {
        res.innerHTML = calculate(res.innerHTML, '-');
    } else if (res.innerHTML.includes('*')) {
        res.innerHTML = calculate(res.innerHTML, '*');
    } else if (res.innerHTML.includes('/')) {
        res.innerHTML = calculate(res.innerHTML, '/');
    }
}

function convertoBase10(binary) {
    return parseInt(binary, 2);
}

function convertoBinary(decimal) {
    return Number(decimal).toString(2);
}

function calculate(equation, operator) {
    let arr = equation.split(operator);
    let result;
    let num1 = convertoBase10(arr[0]);
    let num2 = convertoBase10(arr[1]);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;

        case '-':
            result = num1 - num2;
            break;

        case '*':
            result = num1 * num2;
            break;

        case '/':
            result = num1 / num2;
            break;
    }
    return convertoBinary(result);
}

btnSum.onclick = function () {
    clearConsole(res);

    if (res.innerHTML.length != 0 && !checkOperator()) {
        res.innerHTML += '+';
    }
}

btnSub.onclick = function () {
    clearConsole(res);
    
    if (res.innerHTML.length != 0 && !checkOperator()) {
        res.innerHTML += '-';
    }
}

btnMul.onclick = function () {
    clearConsole(res);

    if (res.innerHTML.length != 0 && !checkOperator()) {
        res.innerHTML += '*';
    }
}

btnDiv.onclick = function () {
    clearConsole(res);

    if (res.innerHTML.length != 0 && !checkOperator()) {
        res.innerHTML += '/';
    }
}