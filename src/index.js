const Calculator = () => {
  const calculator = [];
  const screen = document.querySelector('.input');

  const number = document.getElementsByClassName('num');
  const cal = document.getElementsByClassName('cal');

  const resultBtn = document.getElementsByClassName('result_btn')[0];
  const clear = document.getElementsByClassName('cls_btn')[0];

  let result = '';
  let flag = 0;
  let len = 0;
  const calculate = long => {
    if (calculator[long - 1] === '+') {
      result = Number(result) + Number(calculator[long]);
      screen.value = result;
    } else if (calculator[long - 1] === '-') {
      result = Number(result) - Number(calculator[long]);
      screen.value = result;
    } else if (calculator[long - 1] === '*') {
      result = Number(result) * Number(calculator[long]);
      screen.value = result;
    } else if (calculator[long - 1] === '/') {
      result = Number(result) / Number(calculator[long]);
      screen.value = result;
    } else if (calculator[long - 1] === '%') {
      result = Number(result) % Number(calculator[long]);
      screen.value = result;
    }
  }

  if (screen.value === '0') {
    screen.value = '';
  }

  resultBtn.addEventListener('click', () => {
    if (flag === 1) {
      calculator[len] = screen.value;
      calculate(calculator.length - 1);
      flag = 2;
    }
  })

  for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', () => {
      const value = number[i].value;

      if (flag === 2) {
        screen.value = '';
        calculator.length = 0;
        len = 0;
        flag = 0;
      }

      if (flag === 0) {
        screen.value = '';
        len = calculator.length;
      }

      screen.value += value;

      if (len === 0) result = screen.value;
      flag = 1;
    })
  }
  for (let i = 0; i < cal.length; i++) {
    cal[i].addEventListener('click', () => {
      calculator[len] = screen.value;
      if (flag === 1 || flag === 2) {
        calculator[calculator.length] = cal[i].value
        if (calculator.length > 2 && flag !== 2) calculate(calculator.length - 2);
      }
      flag = 0;
    })

    clear.addEventListener('click', () => {
      screen.value = '';
      calculator.length = 0;
      len = 0;
    })
  }
}

Calculator();
