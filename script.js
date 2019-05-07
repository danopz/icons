var icons = document.querySelectorAll('.icon');

document.querySelectorAll('select').forEach(function (e) {
    e.addEventListener('change', function () {
        icons.forEach(function (i) {
            i.style.setProperty('stroke-' + e.name, e.value);
        });
    });
});

document.getElementById('size').addEventListener('input', function () {
    var size = this.value;
    icons.forEach(function (i) {
        i.style.width = size;
        i.style.height = size;
    });
});

document.getElementById('color').addEventListener('input', function () {
    var color = this.value;
    icons.forEach(function (i) {
        i.style.color = color;
    });
});
