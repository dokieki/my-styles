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
};
