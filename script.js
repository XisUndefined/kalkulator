let currentNumber = '0';
let prevNumber = '';
let calcOperation = '';

const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operator');
const screen = document.querySelector('.screen');
const clearBtn = document.querySelector('.all-clear');
const equalSign = document.querySelector('.equal-sign');
const decimal = document.querySelector('.decimal');
const percentage = document.querySelector('.percentage');

const clearAll = () => {
    prevNumber = '';
    currentNumber = '0';
    calcOperation = '';
};

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    };
};

const inputOperation = (operation) => {
    if (calcOperation === '') {
        prevNumber = currentNumber;
    }
    calcOperation = operation;
    currentNumber = '0';
};

const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
};

const screenUpdate = (number) => {
    screen.value = number;
};

clearBtn.addEventListener('click', () => {
    clearAll();
    screenUpdate(currentNumber);
});

numbers.forEach((number) => {
    number.addEventListener('click', (event) => {
        inputNumber(event.target.value);
        screenUpdate(currentNumber);
    });
});

operations.forEach((operation) => {
    operation.addEventListener('click', (event) => {
        inputOperation(event.target.value);
    });
});

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    screenUpdate(currentNumber);
});

percentage.addEventListener('click', (event) => {
    inputOperation(event.target.value);
});

const calculate = () => {
    let result = '';
    switch(calcOperation) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        case '%':
            result = parseFloat(prevNumber) / 100;
            break;
        default:
            return;
    }
    currentNumber = result;
    calcOperation = '';
};

equalSign.addEventListener('click', () => {
    calculate();
    screenUpdate(currentNumber);
});