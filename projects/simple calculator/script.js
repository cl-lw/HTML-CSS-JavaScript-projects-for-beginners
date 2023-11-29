let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = 'Error';
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById('display');
    let currentInput = '';

    function appendToDisplay(value) {
        currentInput += value;
        display.textContent = currentInput;
    }

    function clearDisplay() {
        currentInput = '';
        display.textContent = '0';
    }

    function calculate() {
        try {
            const result = Function('"use strict";return (' + currentInput + ')')();
            currentInput = result.toString();
            display.textContent = currentInput;
        } catch (error) {
            display.textContent = 'Error';
        }
    }

    // Add event listeners for each button
    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', () => appendToDisplay(button.textContent));
    });

    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', () => appendToDisplay(button.textContent));
    });

    document.querySelector('.equals').addEventListener('click', calculate);

    document.querySelector('.reset').addEventListener('click', clearDisplay);
});
