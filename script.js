var icons = document.querySelectorAll('.icons > svg');

document.querySelectorAll('select').forEach(function (e) {
    e.addEventListener('change', function () {
        icons.forEach(function (i) {
            i.style.setProperty('stroke-' + e.name, e.value);
        });
    });
});

document.getElementById('size').addEventListener('change', function () {
    var size = this.value;
    icons.forEach(function (i) {
        i.style.width = size;
        i.style.height = size;
    });
});
