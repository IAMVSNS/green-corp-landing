
let popupBg = document.querySelector('.popup'); // Фон попап окна
let popup = document.querySelector('.pop_up_body'); // Само окно
let openPopupButtons = document.querySelectorAll('.booking'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.pop_up_close'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => {
        console.log(1) // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
        
    })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});


// document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
//     console.log(e.target)
//     const popupBackGround = e.composedPath().includes(popup)

//     console.log('popupBackGround', popupBackGround)

//     // console.log('class - ', popupBg.classList.contains('active'))

//     if(!popupBackGround) { // Если цель клика - фот, то:
//         popupBg.classList.remove('active'); // Убираем активный класс с фона
//         popup.classList.remove('active'); // И с окна
//     }
// })