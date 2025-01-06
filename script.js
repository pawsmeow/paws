
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


const cart = {}; // Корзина товаров
const cartItemsContainer = document.getElementById('cart-items');
const totalDiamondsElement = document.getElementById('diam');
const totalPriceElement = document.getElementById('summary');

// Функция обновления корзины
function updateCart() {
    cartItemsContainer.innerHTML = '';
    let totalDiamonds = 0;
    let totalPrice = 0;

    for (const [type, item] of Object.entries(cart)) {
        if (item.quantity > 0) {
            const cartItem = document.createElement('div');
            cartItem.className = 'element category';
            cartItem.innerHTML = `
                <div class="preperator">${item.quantity} x ${item.type} — ${item.price * item.quantity} тг</div>
                <div>
                    <button class="decrease preperator" data-type="${type}">-</button>
                    <button class="increase preperator" data-type="${type}">+</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);

            totalDiamonds += item.quantity * item.type;
            totalPrice += item.quantity * item.price;
        }
    }

    totalDiamondsElement.textContent = totalDiamonds;
    totalPriceElement.textContent = totalPrice;

    cartItemsContainer.style.display = totalPrice > 0 ? 'block' : 'none';
    document.getElementById('nextButton').style.display = totalPrice > 0 ? 'block' : 'none';
}

// Обработчики для кнопок «Добавить в корзину»
document.querySelectorAll('.add-to-cart').forEach(card => {
    card.addEventListener('click', () => {
        const type = card.dataset.type;
        const price = parseInt(card.dataset.price, 10);

        if (!cart[type]) {
            cart[type] = { type, price, quantity: 0 };
        }

        cart[type].quantity += 1;
        updateCart();
    });
});

// Обработчики для кнопок «+» и «−» в корзине
cartItemsContainer.addEventListener('click', (event) => {
    const type = event.target.dataset.type;

    if (event.target.classList.contains('increase')) {
        cart[type].quantity += 1;
    } else if (event.target.classList.contains('decrease') && cart[type].quantity > 0) {
        cart[type].quantity -= 1;
    }

    if (cart[type].quantity === 0) {
        delete cart[type];
    }

    updateCart();
});
