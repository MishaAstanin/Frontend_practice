let list = document.getElementById('list');
list.style.listStyleType = "none";
let button = document.getElementById('append-list-button');

button.addEventListener('click', add_list_item);

function add_list_item() {
    while(true) {
        let text = prompt("Введите элемент списка");
        if(text == "" || text == null) {break;}

        let item = document.createElement('li');
        item.innerHTML = text;
        list.append(item);
    }
}