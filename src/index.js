export const Calculator = () => {
    const calculator = [];
    const screen = document.getElementsByClassName('input')[0];

    const number = document.getElementsByClassName('num');
    const cal = document.getElementsByClassName('cal');

    const result_btn = document.getElementsByClassName('result_btn')[0];
    const clear = document.getElementsByClassName('cls_btn')[0];

    let result = '';
    let count = 0;
    let len = 0;

    if (screen.value == '0') {
        screen.value = "";
    }

    result_btn.addEventListener('click', () => {
        if (count == 1) {
            calculator[len] = screen.value;
            calculate(calculator.length - 1);
            count = 2;
        }
    })

    for (let i = 0; i < number.length; i++) {
        number[i].addEventListener('click', () => {
            let value = number[i].value;
            if (count == 0) {
                screen.value = '';
                len = calculator.length;
            }
            screen.value = screen.value + value;
            if (len == 0) result = screen.value;
            count = 1;
        })
    }
    for (let i = 0; i < cal.length; i++) {
        cal[i].addEventListener('click', () => {
            calculator[len] = screen.value;
            if (count == 1 || count == 2) {
                calculator[calculator.length] = cal[i].value
                if (calculator.length > 2 && count != 2) calculate(calculator.length - 2);
            }
            count = 0;
        })

        clear.addEventListener('click', () => {
            console.log('cls_btn');
            screen.value = '';
            calculator.length = 0;
            len = 0;
        })
    }

    const calculate = (len) => {

        console.log(calculator);
        console.log(len, len - 1, len - 2, len - 3);
        if (calculator[len - 1] == '+') {
            result = Number(result) + Number(calculator[len]);
            screen.value = result;
        }
        else if (calculator[len - 1] == '-') {
            result = Number(result) - Number(calculator[len]);
            screen.value = result;
        }
        else if (calculator[len - 1] == '*') {
            result = Number(result) * Number(calculator[len]);
            screen.value = result;
        }
        else if (calculator[len - 1] == '/') {
            result = Number(result) / Number(calculator[len]);
            screen.value = result;
        }
        else if (calculator[len - 1] == '%') {
            result = Number(result) % Number(calculator[len]);
            screen.value = result;
        }
    }
}
Calculator();