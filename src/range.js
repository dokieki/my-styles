;(function() {
	let ranges = [...document.getElementsByClassName('my-range-progress')];

	for (let range of ranges) {
		let rangel = document.getElementById(range.dataset.myRangeId);

		rangel.oninput = function() {
			let percent = (parseInt(this.value) * 100) / parseInt(this.max);
			range.style.width = `${percent}%`;
		};
	}
})();