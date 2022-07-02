let elem = document.querySelector('#elem');
elem.addEventListener('blur', function () {
    alert(elem.value ** 2);
})