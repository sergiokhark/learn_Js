let link = document.querySelector('a')
let elem = document.querySelector('#text')

link.addEventListener('click', func)

function func() {
	
	if (elem.checked) {
		elem.checked = false;
 	} else {
		elem.checked = true;
 	}
  }
