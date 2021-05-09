window.UI = {};

UI.themeColor = getComputedStyle(document.documentElement).getPropertyValue('--theme-color');

(function() {
	
	feather.replace();
})();