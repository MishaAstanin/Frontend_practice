function showNotification(text) {
    let message = document.createElement('div');
    message.className = "alert";
    message.innerHTML = text;

    document.body.append(message);

    setTimeout(() =>{message.remove()}, 3000);
}

setTimeout(showNotification, 1500, "Добро пожаловать на наш сайт!");