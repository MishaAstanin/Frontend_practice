class Basket {
    constructor(startValue) {
        this.value = startValue;

        this.add = function (price) {
            this.value += price;
        };
    }
}

let basket = new Basket(0);

let sum = document.getElementById('basket-sum');
sum.innerText = basket.value;

let add_buttons = document.getElementsByClassName('add-button');

for(let button of add_buttons) {
    button.addEventListener('click', function() {
        let price = button.previousElementSibling;
        let count = button.nextElementSibling;
        basket.add(parseFloat(price.textContent));
        sum.innerText = basket.value;
        count.innerText = (parseInt(count.textContent) + 1).toString();
    })
}

document.getElementById('sort-button').addEventListener("click", function() {
    var blocks = Array.from(document.getElementsByClassName('basket-item'));
    blocks.sort(function(a, b) {
        let countA = parseInt(a.getElementsByClassName('count')[0].innerText);
        let countB = parseInt(b.getElementsByClassName('count')[0].innerText);
        return countA - countB;
    });

    var container = document.getElementById('basket-div');
    blocks.forEach(function(block) {
       container.appendChild(block);
    });
})