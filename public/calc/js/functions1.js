const display = document.getElementById('display');
for (let i = 0; i <= 9; i += 1) {
    let numberId = 'N' + i;
    let number = document.getElementById(numberId);
    number.addEventListener('click', () => {
        display.value += i
    })
}
const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    display.value = ''
});
const plusMinus = document.getElementById('plusMinus');
plusMinus.addEventListener('click', () => {
    if (display.value > 0) {
        display.value *= -1
    } else {
        display.value *= -1
    }
});
const percent = document.getElementById('percent');
percent.addEventListener('click', () => {
    display.value /= 100
});
const komma = document.getElementById('komma');
komma.addEventListener('click', () => {
    display.value += '.'
});
const divide = document.getElementById('divide');
divide.addEventListener('click', () => {
    display.value += ' / '
});
const multiply = document.getElementById('multiply');
multiply.addEventListener('click', () => {
    display.value += ' * '
});
const minus = document.getElementById('minus');
minus.addEventListener('click', () => {
    display.value += ' - '
});
const plus = document.getElementById('plus');
plus.addEventListener('click', () => {
    display.value += ' + '
});



const result = document.getElementById('result');
function calculateExpression(expression) {
    const operators = ['+', '-', '*', '/'];
    let numbers = expression
        .split(/\+|\-|\*|\//g)
        .map(Number);
    let operatorsArray = expression
        .split('')
        .filter(char => operators.includes(char));
    let result = numbers[0];
    for (let i = 0; i < operatorsArray.length; i += 1) {
        const operator = operatorsArray[i];
        const nextNumber = numbers[i + 1];
        if (operator === '+') {
            result += nextNumber
        } else if (operator === '-') {
            result -= nextNumber
        } else if (operator === '*') {
            result *= nextNumber
        } else if (operator === '/') {
            result /= nextNumber
        }
    }
    return result
}
result.addEventListener('click', () => {
    const expression = display.value;
    try {
        display.value = calculateExpression(expression)
    } catch (error) {
        display.value = 'Error'
    }
});