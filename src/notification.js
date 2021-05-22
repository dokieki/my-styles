const notificationTypes = {
	'ok': '<i data-feather="check-circle"></i>',
	'error': '<i data-feather="x"></i>',
	'info': '<i data-feather="info"></i>'
};

UI.createNotification = function(type, message, time = 2000) {
	if (!notificationTypes[type]) return null;

	let remove = function(el, t) {
			setTimeout(() => {
			el.style.transform = 'scale(.5)';

			setTimeout(() => {
				el.style.opacity = '0';

				setTimeout(() => el.remove(), 300);
			}, 250);
		}, t)
	};
	let id = `${type.toUpperCase()}${btoa(message.slice(0, 10))}${btoa(String(Date.now()).slice(-5))}`,
		div = document.createElement('div');

	div.classList.add('my-notif');
	div.classList.add(`my-notif-${type}`);
	
	div.id = id;

	div.innerHTML = `
		<div class="my-notif-content">
			<span>${message}</span>
		</div>
		<div class="my-notif-svg my-notif-svg-${type}">
			${notificationTypes[type]}
		</div>
	`;

	document.body.insertAdjacentElement('afterbegin', div);


	feather.replace();

	setTimeout(() => {
		div.style.transform = 'scale(1)';
		
		setTimeout(() => {
			div.style.opacity = '1';
		}, 100);
	}, 300);

	div.onmousedown = () => remove(div, 0);

	remove(div, time);
}