let notice_menu = document.getElementById('notice-menu');
let notice_count = document.getElementById('notices-count');
let stop_button = document.getElementById('stop-new-notice');

function CreateNotice() {
    let count = parseInt(notice_count.innerHTML) + 1;
    notice_count.innerHTML = count;

    let notice = document.createElement('div');
    notice.classList.add('notice');

    let text = document.createElement('a');
    text.innerHTML = "Уведомление " + count;

    let button = document.createElement('button');
    button.innerHTML = "x";
    button.classList.add('close-notice');

    notice.append(text);
    notice.append(button);

    notice_menu.append(notice);

    if(count == 20) {
        clearInterval(timerId);
        stop_button.removeEventListener('click', stop_button_fun);
    }
}

let timerId = setInterval(CreateNotice, 3000);

function stop_button_fun() {
    clearInterval(timerId);
    setTimeout(() => {timerId = setInterval(CreateNotice, 3000);}, 10000);
}

stop_button.addEventListener('click', stop_button_fun);