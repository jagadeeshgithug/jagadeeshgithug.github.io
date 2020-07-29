

let theme = localStorage.getItem('theme')

if (theme == null){
	settheme('light')
}else{
	settheme(theme)
}

var themedot= document.getElementsByClassName('theme-dot')


for (var i=0; themedot.length > i; i++){
	themedot[i].addEventListener('click',function(){
		let mode = this.dataset.mode

		settheme(mode)
	})
}

function settheme(mode){
	if (mode == 'light'){
		document.getElementById('theme-style').href = 'main.css'
	}

	if (mode == 'dark'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	localStorage.setItem('theme',mode)
}