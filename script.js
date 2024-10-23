
const cards = document.querySelector('.cards');
const content = document.querySelector('.content');
const backButton = document.getElementById('backButton');
const nextButton = document.getElementById('nextButton');

// Запускаем анимацию через 0.5 секунды после загрузки
setTimeout(() => { // Поднимаем заголовок вверх

    // Показываем карточки через 1 секунду (время анимации)
    setTimeout(() => {
        cards.style.display = 'block'; // Показываем карточки
    }, 1500);
}, 500);

// Обработчик кликов по карточкам


// Обработчик нажатия кнопки "Назад"
backButton.addEventListener('click', () => {
    // Скрыть контент и показать карточки
    content.style.display = 'none';
    cards.style.display = 'block';
    backButton.style.display = 'none'; // Скрываем кнопку "Назад"
    nextButton.style.display = 'none'; // Скрываем кнопку "Далее"
});
