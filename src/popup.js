
let popupBg = document.querySelector('.popup'); // Фон попап окна
let popup = document.querySelector('.pop_up_body'); // Само окно
let openPopupButtons = document.querySelectorAll('.booking'); // Кнопки для показа окна
// let openPopupButtons2 = document.querySelectorAll('.about__button'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.pop_up_close'); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
        
    })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});