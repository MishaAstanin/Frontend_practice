document.addEventListener('mousedown', function(event) {
    event.preventDefault();
})

let Mybasket = document.getElementById('my_basket');
let result_price = Mybasket.querySelector('#result-price');
let Basket_items = document.getElementById('basket_items');

Basket_items.addEventListener('mousedown', function(event) {
    let item = event.target.closest('.basket_item');
    if(item != null) {
        let clone = item.cloneNode(true);
        clone.style.position = 'absolute';
        clone.style.zIndex = '100';
        document.body.append(clone);

        clone.style.left = event.pageX - clone.offsetWidth / 2 + 'px';
        clone.style.top = event.pageY - clone.offsetHeight / 2 + 'px';

        let currentDroppable = null;

        function onMouseMove(event) {
            clone.style.left = event.pageX - clone.offsetWidth / 2 + 'px';
            clone.style.top = event.pageY - clone.offsetHeight / 2 + 'px';

            clone.hidden = true;
            let BelowElement = document.elementFromPoint(event.clientX, event.clientY);
            clone.hidden = false;

            if(BelowElement == null) return;

            let droppableElement = BelowElement.closest('.my_basket');

            if(currentDroppable != droppableElement) {
                if(currentDroppable) {
                    Mybasket.style.background = "none";
                }
                currentDroppable = droppableElement;
                if(currentDroppable) {
                    Mybasket.style.background = "rgba(0, 0, 255, 0.2)";
                }
            }
        }

        document.addEventListener('mousemove', onMouseMove);

        clone.addEventListener('mouseup', function(event) {
            clone.remove();
            let below = document.elementFromPoint(event.clientX, event.clientY).closest('.my_basket');
            if(below == Mybasket) {
                let newItem = item.cloneNode(true);
                Mybasket.appendChild(newItem);
                Mybasket.style.background = "none";
                result_price.innerHTML = parseInt(result_price.innerHTML) + parseInt(newItem.querySelector('.Myprice').innerHTML);
            }
            document.removeEventListener('mousemove', onMouseMove);
        })
    }
})