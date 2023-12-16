let car = document.getElementById('porsche_animation');
let container = document.getElementById('porsche-animation-container');

let pos = 0;

let id = setInterval(move, 10);

function move() {
    if(pos == container.offsetWidth - car.offsetWidth) {
        clearInterval(id);
    } else {
        pos++;
        car.style.left = pos + 'px';
    }
}