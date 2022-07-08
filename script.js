let parent = document.querySelector('#parent')
let elem = document.querySelector('#elem')

let li = document.createElement('li')
li.innerHTML = 'new'

parent.insertBefore(li, elem)
