let select = document.querySelector('#select')
 
let date = new Date()
select.selectedIndex = date.getDay() - 1

