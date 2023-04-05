let prompt = '0';
let display = '0';
let result = '';

const screen = document.querySelector('.screen');
const keys = document.querySelector('.keys');

const inputNumber = (number) => {
    if (display === '0') {
        display = number;
        prompt = number;
    } else {
        display += number;
        prompt += number;
    };
};

const inputOperator = (oprPrompt, oprDisplay) => {
    if (['+', '-', '/', '*', '.'].includes(prompt.slice(-1))) {
        prompt += '';
        display += '';
    } else {
        prompt += oprPrompt;
        display += oprDisplay;
    };
};

const clearAll = () => {
    prompt = '0';
    display = '0';
    result = '';
};

const screenUpdate = (number) => {
    screen.value = number;
};

const calcResult = (number) => {
    result = eval(number);
};

keys.addEventListener('click', (event) => {
    if (event.target.className.includes('number')) {
        inputNumber(event.target.value);
        screenUpdate(display);
    } else if (event.target.className == 'operator') {
        inputOperator(event.target.value, event.target.innerHTML);
        screenUpdate(display);
    } else if (event.target.className == 'all-clear') {
        clearAll();
        screenUpdate(display);
    } else if (event.target.className == 'percentage') {
        inputOperator('/100', event.target.value);
        screenUpdate(display);
    } else {
        calcResult(prompt);
        screenUpdate(result);
    };
});

// let currentNumber = '0';
// let prevNumber = '';
// let calcOperation = '';

// const numbers = document.querySelectorAll('.number');
// const operations = document.querySelectorAll('.operator');
// const clearBtn = document.querySelector('.all-clear');
// const equalSign = document.querySelector('.equal-sign');
// const decimal = document.querySelector('.decimal');
// const percentage = document.querySelector('.percentage');

// // const inputNumber = (number) => {
// //     if (currentNumber === '0') {
// //         currentNumber = number;
// //     } else {
// //         currentNumber += number;
// //     };
// // };

// const inputOperation = (operation) => {
//     if (calcOperation === '') {
//         prevNumber = currentNumber;
//     }
//     calcOperation = operation;
//     currentNumber = '0';
// };

// const inputDecimal = (dot) => {
//     if (currentNumber.includes('.')) {
//         return;
//     }
//     currentNumber += dot;
// };

// // const screenUpdate = (number) => {
// //     screen.value = number;
// // };

// clearBtn.addEventListener('click', () => {
//     clearAll();
//     screenUpdate(currentNumber);
// });

// numbers.forEach((number) => {
//     number.addEventListener('click', (event) => {
//         inputNumber(event.target.value);
//         screenUpdate(currentNumber);
//     });
// });

// operations.forEach((operation) => {
//     operation.addEventListener('click', (event) => {
//         inputOperation(event.target.value);
//     });
// });

// decimal.addEventListener('click', (event) => {
//     inputDecimal(event.target.value);
//     screenUpdate(currentNumber);
// });

// percentage.addEventListener('click', (event) => {
//     inputOperation(event.target.value);
// });

// const calculate = () => {
//     let result = '';
//     switch(calcOperation) {
//         case '+':
//             result = parseFloat(prevNumber) + parseFloat(currentNumber);
//             break;
//         case '-':
//             result = parseFloat(prevNumber) - parseFloat(currentNumber);
//             break;
//         case '*':
//             result = parseFloat(prevNumber) * parseFloat(currentNumber);
//             break;
//         case '/':
//             result = parseFloat(prevNumber) / parseFloat(currentNumber);
//             break;
//         case '%':
//             result = parseFloat(prevNumber) / 100;
//             break;
//         default:
//             return;
//     }
//     currentNumber = result;
//     calcOperation = '';
// };

// equalSign.addEventListener('click', () => {
//     calculate();
//     screenUpdate(currentNumber);
// });