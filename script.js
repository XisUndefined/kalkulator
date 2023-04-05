let currentNumber = '0';
// let prevNumber = '';
let display = '0';
let prompt = '';
let calcOperation = '';

const screen = document.querySelector('.screen');
const keys = document.querySelector('.keys');

const clearAll = () => {
    currentNumber = '0';
    display = '0';
    prompt = '';
    calcOperation = '';
}

const inputNumber = (number) => {
    if (currentNumber === '0' && prompt === '') {
        currentNumber = number;
        display = number;
        calcOperation = '';
    } else {
        currentNumber += number;
        display += number;
        calcOperation = '';
    };
};

const inputOperator = (oprPrompt, oprDisplay) => {
    if (calcOperation === '') {
        prompt += currentNumber;
        calcOperation = oprPrompt;
        prompt += calcOperation;
        display += oprDisplay;
    } else if (calcOperation !== '') {
        calcOperation = oprPrompt;
        display[-1] = oprDisplay;
    };
};

const screenUpdate = (number) => {
    screen.value = number;
};

keys.addEventListener('click', (event) => {
    if (event.target.className.includes('number')) {
        console.log(event.target);
        inputNumber(event.target.value);
        screenUpdate(display);
    } else if (event.target.className == 'operator') {
        inputOperator(event.target.value, event.target.innerHTML);
        screenUpdate(display);
    } else if (event.target.className == 'all-clear') {
        clearAll();
        screenUpdate(display);
    } else if (event.target.className == 'equal-sign') {
        calcResult();
        screenUpdate(display);
    };
});