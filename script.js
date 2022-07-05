let links = document.querySelectorAll('a')

for (let link of links) {
    link.addEventListener('click', function (event) {
        event.preventDefault()
        event.target.innerHTML += event.target.href

    })
}