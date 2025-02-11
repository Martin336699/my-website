

// Get the display element where the input and results will be shown
const display = document.getElementById('display');

// Loop through numbers 0 to 9 to add event listeners for each number button
for (let i = 0; i <= 9; i += 1) {
    // Construct the id for each number button
    let numberId = 'N' + i;
    // Get the number button element by its id
    let number = document.getElementById(numberId);
    // Add a click event listener to the number button
    number.addEventListener('click', () => {
        // Append the clicked number to the display value
        display.value += i;
        const displayArray = display.value.split('');
        const firstItem = displayArray[0];
        const secondItem = displayArray[1];
        console.log(displayArray, firstItem);
        if (firstItem === '0' && secondItem === '0') {
            display.value -= 0;
        } 
    });
}


// Get the clear button element
const clear = document.getElementById('clear');
// Add a click event listener to the clear button
clear.addEventListener('click', () => {
    // Clear the display value
    display.value = '';
});


// Get the plus/minus button element
const plusMinus = document.getElementById('plusMinus');
// Add a click event listener to the plus/minus button
plusMinus.addEventListener('click', () => {
    // Toggle the sign of the display value
    if (display.value > 0) {
        display.value *= -1;
    } else {
        display.value *= -1;
    }
});


// Get the percent button element
const percent = document.getElementById('percent');
// Add a click event listener to the percent button
percent.addEventListener('click', () => {
    // Convert the display value to a percentage
    display.value /= 100;
});


// Get the comma (decimal point) button element
const komma = document.getElementById('komma');
// Add a click event listener to the comma button
komma.addEventListener('click', () => {
    // Append a decimal point to the display value
    display.value += '.';
});


const leftBrace = document.getElementById('leftBrace');

leftBrace.addEventListener('click', () => {
    display.value += ' ( ';
});


const rightBrace = document.getElementById('rightBrace');

rightBrace.addEventListener('click', () => {
    display.value += ' ) ';
});

const root = document.getElementById('root');

root.addEventListener('click', () => {
    display.value = math.sqrt(display.value);
});

const squared = document.getElementById('squared');

squared.addEventListener('click', () => {
    display.value = math.pow(display.value, 2);
});


// Get the divide button element
const divide = document.getElementById('divide');
// Add a click event listener to the divide button
divide.addEventListener('click', () => {
    // Append a division operator to the display value
    display.value += ' / ';
});


// Get the multiply button element
const multiply = document.getElementById('multiply');
// Add a click event listener to the multiply button
multiply.addEventListener('click', () => {
    // Append a multiplication operator to the display value
    display.value += ' * ';
});


// Get the minus button element
const minus = document.getElementById('minus');
// Add a click event listener to the minus button
minus.addEventListener('click', () => {
    // Append a subtraction operator to the display value
    display.value += ' - ';
});


// Get the plus button element
const plus = document.getElementById('plus');
// Add a click event listener to the plus button
plus.addEventListener('click', () => {
    // Append an addition operator to the display value
    display.value += ' + ';
});


// Get the result button element
const result = document.getElementById('result');



// Add a click event listener to the result button
result.addEventListener('click', () => {
    // Get the expression from the display value
    const expression = display.value;
    try {
        // Calculate the result and update the display value
        display.value = math.evaluate(expression);
    } catch (error) {
        // If there is an error, display 'Error'
        display.value = 'Error';
    }
});