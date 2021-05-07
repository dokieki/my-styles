window.UI = {};

UI.initProgressBar = function(el, time) {
	let perc = 0;
	let bar = el.childNodes[1];
	let interval = setInterval(() => {
		if (parseInt(bar.style.width.replace('%', '')) >= 100) clearInterval(interval);

		bar.style.width = `${perc}%`;
		++perc;
	}, time);
};

UI.resetProgressBar = function(el) {
	el.childNodes[1].style.width = '0%';
}

;(function() {
	
	let ranges = [...document.getElementsByClassName('my-range-progress')];

	for (let range of ranges) {
		let rangel = document.getElementById(range.dataset.myRangeId);

		rangel.oninput = function() {
			let percent = (parseInt(this.value) * 100) / parseInt(this.max);
			range.style.width = `${percent}%`;
		}
	}
})();