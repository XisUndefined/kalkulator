let prompt = '0';
let display = '0';
let result = '';

const screen = document.querySelector('.screen');
const keys = document.querySelector('.keys');

const inputNumber = (number) => {
    if (display === '0') {
        display = number;
        prompt = number;
    } else if (result !== '' && ['+', '-', '/', '*', '.'].includes(prompt.slice(-1)) === false) {
        result = '';
        display = number;
        prompt = number;
    } else {
        display += number;
        prompt += number;
    };
};

const inputOperator = (oprPrompt, oprDisplay) => {
    if (['+', '-', '/', '*', '.'].includes(prompt.slice(-1))) {
        prompt = prompt.slice(0, -1);
        prompt += oprPrompt;
        display = display.slice(0, -1);
        display += oprDisplay;
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
    prompt = result.toString();
    display = result.toString();
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
        screenUpdate(display);
    };
});