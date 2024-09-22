let buttons = document.querySelectorAll('.buttons button');

let num1 = '';
let num2 = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.value;

        if (value === '=' || value === 'C') {
            if (value === '=') {
                calculate();
            } else {
                clear();
            }
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            operator = value;
            num1 = display.value;
            display.value = '';
        } else {
            display.value += value;
        }
    });
});
