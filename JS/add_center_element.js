let conteiner = document.createElement('div');
conteiner.style.position = "fixed";
conteiner.style.transform = "translate(-50%, -50%)";
conteiner.style.top = "50%";
conteiner.style.left = "50%";
conteiner.style.padding = "20px";
conteiner.style.backgroundColor = "#5067bc";
document.body.appendChild(conteiner);

let img = document.createElement('img');
img.src = "car.jpeg";
img.width = "300";
conteiner.appendChild(img);

document.addEventListener('click', function(event) {
    alert("X = " + event.clientX + "; Y = " + event.clientY);
})

