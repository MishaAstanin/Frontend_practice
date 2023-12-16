class Counter {
    constructor(startValue) {
        this.value = startValue;

        this.read = function () {
            this.value += Number(prompt("Введите число"));
        };
    }
}

let counter = new Counter(0);

var counter_output = document.getElementById('counter-output');
counter_output.innerText = counter.value;
var counter_button = document.getElementById('counter-button');

counter_button.addEventListener('click', function() {
    counter.read();
    counter_output.innerText = counter.value;
})