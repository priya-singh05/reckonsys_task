window.addEventListener('scroll', function() {
	let parallax1 = document.querySelector('.parallax-1');
	let parallax2 = document.querySelector('.parallax-2');
	let parallax3 = document.querySelector('.parallax-3');

	let scrollPosition = window.pageYOffset;

	parallax1.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
	parallax2.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
	parallax3.style.backgroundPositionY = scrollPosition * 0.9 + 'px';
});