function initDialog(dialog) {
    dialog.addEventListener('click', function(event) {
		let rect = event.target.getBoundingClientRect();

        if (rect.left > event.clientX || rect.right < event.clientX ||
            rect.top > event.clientY || rect.bottom < event.clientY) {

			dialog.classList.remove('opened');
			setTimeout(() => dialog.close(), 500);
        }
    });

    dialog.showModal();
	setTimeout(() => dialog.classList.add('opened'), 50);
}