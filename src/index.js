export const calculator = () => {
    const calculator = [];
    const screen = document.getElementsByClassName('input')[0];

    const number = document.getElementsByClassName('num');
    const cal = document.getElementsByClassName('cal');

    const result_btn = document.getElementsByClassName('result_btn')[0];
    const clear = document.getElementsByClassName('cls_btn')[0];

    let result = '';
    let count = 0;

    if (screen.value == '0') {
        screen.value = "";
    }
    result_btn.addEventListener('click', () => {
        count = 0;
        console.log(calculator[calculator.length - 1]);
        if (calculator[calculator.length - 1] == '+') {
            result = Number(result) + Number(screen.value);
            screen.value = result;
        }
        else if (calculator[calculator.length - 1] == '-') {
            result = Number(result) - Number(screen.value);
            screen.value = result;
        }
        else if (calculator[calculator.length - 1] == '*') {
            console.log(result);
            console.log(screen.value);
            result = Number(result) * Number(screen.value);
            screen.value = result;
        }
        else if (calculator[calculator.length - 1] == '/') {
            result = Number(result) / Number(screen.value);
            screen.value = result;
        }
        else if (calculator[calculator.length - 1] == '%') {
            result = Number(result) % Number(screen.value);
            screen.value = result;
        }
    })
    clear.addEventListener('click', () => {
        console.log('cls_btn');
        screen.value = '';
        calculator.length = 0;
    })
    for (let i = 0; i < number.length; i++) {
        number[i].addEventListener('click', () => {
            let value = number[i].value;
            if (count == 0) screen.value = '';
            screen.value = screen.value + value;
            count = 1;

        })
    }
    for (let i = 0; i < cal.length; i++) {
        cal[i].addEventListener('click', () => {
            if (count == 1) {
                let value = cal[i].value;
                let pre_value = screen.value;
                calculator.push(screen.value);
                calculator.push(value);
                screen.value = '';
                if (calculator.length == 4) {
                    if (calculator[1] == '+') {
                        result = Number(calculator[0]) + Number(calculator[2]);
                        screen.value = result;
                    }
                    else if (calculator[1] == '-') {
                        result = Number(calculator[0]) - Number(calculator[2]);
                        screen.value = result;
                    }
                    else if (calculator[1] == '*') {
                        result = Number(calculator[0]) * Number(calculator[2]);
                        screen.value = result;
                    }
                    else if (calculator[1] == '/') {
                        result = Number(calculator[0]) / Number(calculator[2]);
                        screen.value = result;
                    }
                    else if (calculator[1] == '%') {
                        result = Number(calculator[0]) % Number(calculator[2]);
                        screen.value = result;
                    }
                }
                else if (calculator.length > 4) {
                    if (value == '+') {
                        result = Number(result) + Number(pre_value);
                        screen.value = result;
                    }
                    else if (value = '-') {
                        result = Number(result) - Number(pre_value);
                        screen.value = result;
                    }
                    else if (value = '*') {
                        result = Number(result) * Number(pre_value);
                        screen.value = result;
                    }
                    else if (value = '/') {
                        result = Number(result) / Number(pre_value);
                        screen.value = result;
                    }
                    else if (value = '%') {
                        result = Number(result) % Number(pre_value);
                        screen.value = result;
                    }
                }
            }
            count = 0;
        })
    }
}
calculator();