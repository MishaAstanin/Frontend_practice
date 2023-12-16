let array_items = document.getElementsByClassName('array-item');

let fruits = ["Яблоко", "Апельсин", "Банан", "Слива", "Арбуз"];

let delete_all_button = document.getElementById("delete-all");

let delete_one_button = document.getElementById('delete-one');

let new_array = document.getElementById("add-array");

function getOnDiv() {
    let i = 0;
    for(let fruit of fruits) {
        if (i < array_items.length) {
            array_items[i].innerText = fruit;
        }
        i++;
    }
}

delete_all_button.addEventListener("click", function() {
    fruits = [];
    for(let i = 0; i < array_items.length; i++) {
        array_items[i].innerText = '';
    }
})

delete_one_button.addEventListener('click', function() {
    let item = prompt("Введите номер удаляемого элемента");
    if(item > 0 && item <= fruits.length) {
        fruits.splice(item-1, 1);
        for(let i = 0; i < array_items.length; i++) {
            array_items[i].innerText = '';
        }
        getOnDiv();
    } else {
        alert("Некорректный номер");
    }
})

new_array.addEventListener('click', function() {
    let str = prompt("Введите новый массив");
    fruits = str.split(" ");
    for(let i = 0; i < array_items.length; i++) {
        array_items[i].innerText = '';
    }
    getOnDiv();
})

getOnDiv();