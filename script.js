let select = document.querySelector('#select')

select.addEventListener('change', function () {
    for (let option of select) {
        if (option.selected) {
            option.text += '!'
        } else {
            option.text +='?'
    }
    }
    
   
})

