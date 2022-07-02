let elem = document.querySelector('#elem');
elem.addEventListener('focus', function () {
    elem.value = '';
});