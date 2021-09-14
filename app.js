const hamburger = document.querySelector('.hamburger');
const modal = document.querySelector('.modal');

hamburger.addEventListener('click', function () {
	this.classList.toggle('open');
	modal.classList.toggle('open');
});

document.addEventListener('click', (event) => {
	if (event.target.contains(modal)) {
		modal.classList.remove('open');
		hamburger.classList.remove('open');
	}
});
