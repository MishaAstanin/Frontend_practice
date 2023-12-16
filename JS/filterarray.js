let array = [1, 7, 9, 0, 15, 3, 44, 19, 6, 2, 20];

let print = document.getElementById('print-array');
print.innerText = array;

function filterArray(arr, a, b) {
    return arr.filter(function(item) {
        return item >= a && item <= b;
    });
}

document.getElementById("filter-button").addEventListener("click", function() {
    alert(filterArray(array, 10, 20));
})