var beforeBlock = document.getElementById('cards2-text');
var blockAdded = false;

window.addEventListener('scroll', function() {
    var rect = beforeBlock.getBoundingClientRect();

    if (rect.top <= 300 && !blockAdded) {
        var newBlock = document.createElement('div');
        newBlock.className = 'cards cards2';
        newBlock.innerHTML = `
            <div class="cards-item2">
                <div class="cards-text2">
                   <h3>Тест-драйв</h3>
                   <p>Предлагаем разные маршруты для тест-драйва</p>
                   <button class="open-model-window-button">Записаться</button>
                </div>
            </div>
            <div class="cards-item2">
                <div class="cards-text2">
                   <h3>Кредит</h3>
                   <p>Действие субсидированных кредитных программ</p>
                   <button class="open-model-window-button">Подробнее</button>
                </div>
            </div>
            <div class="cards-item2">
                <div class="cards-text2">
                   <h3>Online-покупка</h3>
                   <p>online бронирование автомобиля вашей мечты</p>
                   <button class="open-model-window-button">Перейти</button>
                </div>
            </div>
            <div class="cards-item2">
                <div class="cards-text2">
                   <h3>Услуги</h3>
                   <p>Скидки на сервисные услуги у наших партнеров</p>
                   <button class="open-model-window-button">Подробнее</button>
                </div>
            </div>
        `;
        beforeBlock.parentNode.insertBefore(newBlock, beforeBlock.nextSibling);
        blockAdded = true;
    }
})
