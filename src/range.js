;(function() {
	let ranges = [...document.getElementsByClassName('my-range')];

	for (let range of ranges) {
		let label = document.querySelector(`label[for="${range.id}"]`);
		let counter = document.querySelector(`span[for="${range.id}"]`);

		range.oninput = function() {
			let percent = (parseInt(this.value) * 100) / parseInt(this.max);
			label.style.width = `${percent}%`;
			if (counter) {
				counter.innerHTML = percent;
				counter.style['marginLeft'] = `${percent}%`;
			}
		};
	}
})();