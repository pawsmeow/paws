
const cards = document.querySelector('.cards');
const content = document.querySelector('.content');
const backButton = document.getElementById('backButton');
const nextButton = document.getElementById('nextButton');
let selectedCard = null;

// Запускаем анимацию через 0.5 секунды после загрузки
setTimeout(() => { // Поднимаем заголовок вверх

    // Показываем карточки через 1 секунду (время анимации)
    setTimeout(() => {
        cards.style.display = 'block'; // Показываем карточки
    }, 1500);
}, 500);

// Обработчик кликов по карточкам
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        // Снимаем выделение с ранее выбранной карточки
        if (selectedCard) {
            selectedCard.classList.remove('selected');
        }

        // Выделяем новую карточку
        selectedCard = card;
        selectedCard.classList.add('selected');

        // Показываем кнопку "Далее" только после выбора карточки
        nextButton.style.display = 'block';
    });
});

// Обработчик нажатия кнопки "Далее"
nextButton.addEventListener('click', () => {
    if (selectedCard) {
        // Показать контент и скрыть карточки
        cards.style.display = 'none';
        content.style.display = 'block';
        backButton.style.display = 'block'; // Показываем кнопку "Назад"
        nextButton.style.display = 'none'; // Скрываем кнопку "Далее"
    }
});

// Обработчик нажатия кнопки "Назад"
backButton.addEventListener('click', () => {
    // Скрыть контент и показать карточки
    content.style.display = 'none';
    cards.style.display = 'block';
    backButton.style.display = 'none'; // Скрываем кнопку "Назад"
    nextButton.style.display = 'none'; // Скрываем кнопку "Далее"
});
