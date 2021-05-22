document.getElementById('startProgressBar').addEventListener('click', function() {
	UI.initProgressBar(document.getElementById('progressbar-1'), 30);
});

document.getElementById('resetProgressBar').addEventListener('click', function() {
	UI.resetProgressBar(document.getElementById('progressbar-1'));
});

document.body.addEventListener('scroll', function() {
	if (document.body.scrollTop >= document.getElementsByClassName('my-row-2')[1].offsetTop) {
		let color = `rgb(${UI.themeColor})`;

		document.getElementById('header-button').style.color = color;
		document.getElementById('header-button').style['border-color'] = color;
		document.getElementById('title').style.color = color;
	} else {
		document.getElementById('title').style.color = 'white';
		document.getElementById('header-button').style.color = 'white';
		document.getElementById('header-button').style['border-color'] = 'white';
	}
});

document.getElementById('notifOk').addEventListener('click', function() {
	UI.createNotification('ok', 'Ok message');
});

document.getElementById('notifErr').addEventListener('click', function() {
	UI.createNotification('error', 'Error message');
});

document.getElementById('notifInfo').addEventListener('click', function() {
	UI.createNotification('info', 'Info message');
});