let count = document.getElementById('notices-count');

document.getElementById('notice-menu').addEventListener('click', function(event) {
    if(event.target.classList.contains('close-notice')) {
        event.target.parentNode.remove();
        count.innerHTML = parseInt(count.innerHTML) - 1;
    }
})