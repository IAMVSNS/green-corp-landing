
// Считает стоимость панелей
const panelSelect = document.querySelector('.panel_select');
const panelSelectObject = {
    value: 5483,
    value: 5884,
    value: 6385,
    value: 6880,
    value: 6950,
    value: 7100,
    value: 7500,
    value: 7850,
    value: 5582,
    value: 5889,
    value: 6294,
    value: 6598,
    value: 9199,
    value: 6332,
    value: 6534,
    value: 6940,
    value: 7244,
    value: 7579,
    value: 7690,
    value: 6690,
    value: 7883,
    value: 7905
}

panelSelect.addEventListener('change', () => {
    const valueSolarPanel = panelSelect.value * panelNumber.value || panelSelect.value;
    const summaPanels = document.querySelector('#order_time')
    summaPanels.innerHTML = valueSolarPanel;
})

// Показывает площадь выбранного количества панелей
const panelNumber = document.querySelector('.panel_number');

panelNumber.addEventListener('change', () => {
    const square = panelNumber.value * 1.27
    const squareNumber = document.querySelector('.square_number');
    squareNumber.innerHTML = square;
})

// Выбор дополнительных параметров
const dopParams1 = document.querySelector('.option1');
const dopParams2 = document.querySelector('.option2');
const dopParams3 = document.querySelector('.option3');
const dopParams4 = document.querySelector('.option4');

dopParams1.addEventListener('click', () => {
    var orderOption = document.querySelector('#order_option')
    if (dopParams1.checked == true) {

        dopParams3.addEventListener('click', () => {
            var orderOption = document.querySelector('#order_option')
            if (dopParams3.checked == true) {
                orderOption.innerHTML = dopParams1.value;
                orderOption.innerHTML = Number(orderOption.value) + Number(dopParams3.value);
            } else {
                orderOption.innerHTML = dopParams1.value;
            }
        })

        orderOption.innerHTML = dopParams1.value;

    } else {

        dopParams3.addEventListener('click', () => {
            var orderOption = document.querySelector('#order_option')
            if (dopParams3.checked == true) {
                orderOption.innerHTML = dopParams3.value;
            } else {
                orderOption.innerHTML = '0';
            }
        })

    }
})


dopParams2.addEventListener('click', () => {
    var orderOption = document.querySelector('#order_option')
    if (dopParams2.checked == true) {

        dopParams3.addEventListener('click', () => {
            var orderOption = document.querySelector('#order_option')
            if (dopParams3.checked == true) {
                orderOption.innerHTML = dopParams2.value;
                orderOption.innerHTML = Number(orderOption.value) + Number(dopParams3.value);
            } else {
                orderOption.innerHTML = dopParams2.value;
            }
        })

        orderOption.innerHTML = dopParams2.value;

    } else {

        dopParams3.addEventListener('click', () => {
            var orderOption = document.querySelector('#order_option')
            if (dopParams3.checked == true) {
                orderOption.innerHTML = dopParams3.value;
            } else {
                orderOption.innerHTML = '0';
            }
        })

    }
})


dopParams4.addEventListener('click', () => {
    var orderOption = document.querySelector('#order_option')
    if (dopParams4.checked == true) {

        dopParams3.addEventListener('click', () => {
            var orderOption = document.querySelector('#order_option')
            if (dopParams3.checked == true) {
                orderOption.innerHTML = dopParams4.value;
                orderOption.innerHTML = Number(orderOption.value) + Number(dopParams3.value);
            } else {
                orderOption.innerHTML = dopParams4.value;
            }
        })

        orderOption.innerHTML = dopParams4.value;

    } else {

        dopParams3.addEventListener('click', () => {
            var orderOption = document.querySelector('#order_option')
            if (dopParams3.checked == true) {
                orderOption.innerHTML = dopParams3.value;
            } else {
                orderOption.innerHTML = '0';
            }
        })

    }
})

const finalParams = document.querySelector('.total');
let finalSumma = 0;

finalParams.addEventListener('change', () => {
    var orderOption = document.querySelector('#order_option')
    const summaPanels = document.querySelector('#order_time')

    if (Number(orderOption.value) >= 0) {
        if (Number(summaPanels.value) >= 0) {
            finalSumma = finalSumma + Number(orderOption.value) + Number(summaPanels.value);
        } else {
            finalSumma = finalSumma + Number(orderOption.value);
        }
    } else {
        if (Number(summaPanels.value) >= 0) {
            finalSumma = finalSumma + Number(summaPanels.value);
        } else {
            finalSumma;
        }
    }

})

// Функция
// ToDO - обработать кейс с дефолтным значением - "Выберите количество"