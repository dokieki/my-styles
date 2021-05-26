;(function() {
	const panel = document.getElementById('my-panel');

	if (!panel) return;

	const eventShow = new Event('show');
	const eventHide = new Event('hide');

	const items = Array.from(document.getElementById('my-panel')
				.querySelector('.my-panel-items').childNodes)
				.filter(x => x.nodeName == 'LI');


	initSwipeEvents(document);

	document.addEventListener('swipeleft', function(event) {
		panel.classList.remove('my-panel-opened');
	});

	document.addEventListener('swiperight', function() {
		panel.classList.add('my-panel-opened');
	});

	document.addEventListener('mousedown', function(event) {
		if (event.clientX > panel.offsetWidth) {
			panel.classList.remove('my-panel-opened');
		}
	});

	for (let item of items) {
		item.onclick = function() {
			let disabled = !!item.classList.contains('my-panel-item-disabled');
			let event = new CustomEvent('itemchoose', {
				detail: {
					item: this,
					disabled: disabled
				}
			});

			panel.dispatchEvent(event);

			if (disabled) return;

			let activeItems = document.getElementsByClassName('my-panel-item-active');
			
			if (activeItems.length > 0) {
				activeItems[0].classList.remove('my-panel-item-active');
			}

			this.classList.add('my-panel-item-active');
		};
	}

})();