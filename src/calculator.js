
// Считает стоимость панелей
const panelSelect = document.querySelector('.panel_select');
const panelNumber = document.querySelector('.panel_number');
const summaPanels = document.querySelector('#order_time')


panelSelect.addEventListener('change', () => {
    const valueSolarPanel = panelSelect.value * panelNumber.value;
    summaPanels.innerHTML = valueSolarPanel;

    console.log(valueSolarPanel)

    finalSumma()
})

// Показывает площадь выбранного количества панелей

panelNumber.addEventListener('change', () => {
    const square = panelNumber.value * 1.27
    const squareNumber = document.querySelector('.square_number');
    squareNumber.innerHTML = square;
    summaPanels.innerHTML = panelSelect.value * panelNumber.value;

    finalSumma()
})

// Выбор дополнительных параметров
const dopParams1 = document.querySelector('.option1'); // Доставка по Москве
const dopParams2 = document.querySelector('.option2'); // Доставка в Московскую область
const dopParams3 = document.querySelector('.option3'); // Страховка
const dopParams4 = document.querySelector('.option4'); // Самовывоз

dopParams1.addEventListener('click', () => {

    changeRadio(dopParams1)
    finalSumma()
})


dopParams2.addEventListener('click', () => {

    changeRadio(dopParams2)
    finalSumma()
})


dopParams4.addEventListener('click', () => {

    changeCheckbox()
    finalSumma()
})

dopParams3.addEventListener('click', () => {

    changeCheckbox()
    finalSumma()
})


// Функция подсчета финальной суммы
const finalParams = document.querySelector('.total');
function finalSumma() {
    const orderOption = document.querySelector('#order_option')
    const summaPanels = document.querySelector('#order_time')

    finalParams.innerHTML = Number(orderOption.value) + Number(summaPanels.value);
}

function changeCheckbox() {

    const isCheckboxChecked = dopParams3.checked;
    const orderOption = document.querySelector('#order_option')

    if (dopParams1.checked) {
        orderOption.innerHTML = isCheckboxChecked ? Number(dopParams1.value) + 15000 : Number(dopParams1.value)
    }

    if (dopParams2.checked) {
        orderOption.innerHTML = isCheckboxChecked ? Number(dopParams2.value) + 15000 : Number(dopParams2.value)
    }

    if (dopParams4.checked) {
        orderOption.innerHTML = isCheckboxChecked ? Number(dopParams4.value) + 15000 : Number(dopParams4.value)
    }
}


// Функция подсчета дополнительных параметров
function changeRadio(dopParams) {

    const isCheckboxChecked = dopParams3.checked;
    const orderOption = document.querySelector('#order_option')
    orderOption.innerHTML = isCheckboxChecked ? Number(dopParams.value) + 15000 : Number(dopParams.value)
}