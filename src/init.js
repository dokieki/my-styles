window.UI = {};
UI.themeColor = getComputedStyle(document.documentElement).getPropertyValue('--theme-color');

;(function() {
	let clickElements = document.getElementsByClassName('click-event');

	for (let clickElement of clickElements) {

		clickElement.addEventListener('click', function(event) {
			let circle = this.getElementsByClassName('click-circle');
			
			//if (circle.length > 0) {
			//	circle[0].classList.remove('animated');
			//}
			
			circle = document.createElement('div');

			circle.classList.add('click-circle');

			this.prepend(circle);

			let size = Math.max(this.offsetWidth, this.offsetHeight);
				
			circle.style.height = `${size}px`;
			circle.style.width = `${size}px`;
			
			let parentCoords = this.getBoundingClientRect();

			circle.style.top = `${event.clientY - parentCoords.top - (size / 2)}px`;
			circle.style.left = `${event.clientX - parentCoords.left - (size / 2)}px`;

			circle.classList.add('animated');
			setTimeout(() => {
				circle.classList.remove('animated');
				circle.remove();
			}, 800);
		});

	}
})();