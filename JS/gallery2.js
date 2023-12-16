let miniatures = document.getElementById('miniatures');
let main_photo = document.getElementById('main-photo');

miniatures.addEventListener('click', function(event) {
    let new_photo = event.target.closest('A');
    if(new_photo != null) {
        event.preventDefault();
        main_photo.src = new_photo.href;
    }
});