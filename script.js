let elems = document.querySelectorAll('p')
for (let i = 0; i < elems.length; i++) {
    elems[i].dataset.num = i + 1;
    console.log(elems[i].dataset.num)
}