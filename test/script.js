document.getElementById('startProgressBar').onclick = function() {
	UI.initProgressBar(document.getElementById('progressbar-1'), 30);
}

document.getElementById('resetProgressBar').onclick = function() {
	UI.resetProgressBar(document.getElementById('progressbar-1'));
}

document.body.addEventListener('scroll', function() {
	if (document.body.scrollTop >= document.getElementsByClassName('my-row-2')[1].offsetTop) {
		let color = `rgb(${getComputedStyle(document.documentElement).getPropertyValue('--theme-color')})`;

		document.getElementById('header-button').style.color = color;
		document.getElementById('header-button').style['border-color'] = color;
		document.getElementById('title').style.color = color;
	} else {
		document.getElementById('title').style.color = 'white';
		document.getElementById('header-button').style.color = 'white';
		document.getElementById('header-button').style['border-color'] = 'white';
	}
});