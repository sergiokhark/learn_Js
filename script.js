let elem = document.querySelector('#elem')

let elem0 = elem.previousElementSibling
let elem1 = elem.nextElementSibling

let box = elem0.innerHTML


elem0.innerHTML = elem1.innerHTML
elem1.innerHTML = box







