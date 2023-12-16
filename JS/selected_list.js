let Mylist = document.getElementById('Mylist');

Mylist.addEventListener('mousedown', function(event) {
    event.preventDefault();
 });

Mylist.addEventListener('click', function(event) {
    let target = event.target;
    if(target.tagName == 'LI') {

        if(!(event.ctrlKey || event.metaKey)) {
            Array.from(Mylist.getElementsByTagName('LI')).forEach(function(li) {
                li.classList.remove('selected');
            });

            target.classList.add('selected');

        } else {
            target.classList.toggle('selected');
        }
    }
});