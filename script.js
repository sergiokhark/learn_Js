let elem = document.querySelector('#elem');
elem.addEventListener('focus', function () {
    elem.value = 1;
});
elem.addEventListener('blur', function () {
    elem.value = 2;
});