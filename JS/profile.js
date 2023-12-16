document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('enter_profile').addEventListener('click', function() {
        let login = prompt("Пожалуйста, введите логин:", "Логин");
        if(login == "Админ") {
            let password = prompt("Пожалуйста, введите пароль:");
            switch(password) {
                case "Я главный":
                    alert("Здравствуйте, босс!");
                    break;
                case null:
                    alert("Отменено");
                    break;
                default:
                    alert("Неверный пароль");
                    break;
            }
        } else {
            if(login == "" || login == null) {
                alert("Отменено");
            } else {
                alert("Я вас не знаю");
            }
        }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    var isDrawing = false;
    
    document.getElementById('draw_button').addEventListener('click', function() {
       isDrawing = !isDrawing;
    });

    document.addEventListener('mousemove', function(event) {
       if(isDrawing) {
           var element = document.createElement('img');
           element.src = "image/porche.png";
           element.style.position = "absolute";
           element.style.width = "60px";
           element.style.left = event.pageX + "px";
           element.style.top = event.pageY + "px";
           document.body.appendChild(element);
       }
    });
  });