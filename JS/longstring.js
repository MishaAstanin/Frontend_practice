function truncate(str, maxlength) {
    if(str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '...';
    } else {
        return str;
    }
}

let cards = document.getElementsByClassName('grid-cards-item-content');
for(let i = 0; i < cards.length; i++) {
    let text = cards[i].querySelector('p');
    text.innerText = truncate(text.textContent, 100);
}