document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.title');
    const content = document.querySelector('.content');

    // Запустите анимацию через 0.5 секунды после загрузки
    setTimeout(() => {
        title.style.transform = 'translate(-50%, -220%)'; // Поднимаем заголовок вверх

        // Показываем контент через 1 секунду (время анимации)
        setTimeout(() => {
            content.style.display = 'block'; // Показываем контент
        }, 1000);
    }, 500);
});
