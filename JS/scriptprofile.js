document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('registration_link').addEventListener('click', function(event) {
        event.preventDefault();
        let registration = prompt('Желаете пройти регистрацию на сайте?').toLowerCase();
        if(registration == 'да') {
            alert("Отлично!");
        } else {
            alert("Попробуйте еще раз");
        }
    });
  });
