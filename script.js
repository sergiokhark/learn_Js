let elem = document.querySelector('#elem')

let li1 = document.createElement('li')
li1.innerHTML = 'start'
let li2 = document.createElement('li')
li2.innerHTML = 'finish'

elem.prepend(li1)
elem.append(li2)