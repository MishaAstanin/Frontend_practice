let contents = document.getElementById('contents');

contents.addEventListener('click', function(event) {
    if(event.target.closest('A') != null) {
        let user_choice = confirm("Хотите покинуть страницу?");
        if(user_choice == false) {
            event.preventDefault();
        }
    }
});