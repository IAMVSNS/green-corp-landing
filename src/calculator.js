const panelSelect = document.querySelector('.panel_select');



const panelNumber = document.querySelector('.panel_number');

panelNumber.addEventListener('change', () => {
    // console.log(panelNumber.value);

    const square = panelNumber.value * 1.27

    const squareNumber = document.querySelector('.square_number');

    squareNumber.innerHTML = square;

    // console.log(squareNumber);

})

// Функция 


// ToDO - обработать кейс с дефолтным значением - "Выберите количество"