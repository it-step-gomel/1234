// Меню бургер

let iconMenu = document.querySelector('.icon');
let menuBody = document.querySelector('.menu');
if (iconMenu) {

	iconMenu.addEventListener("click", function (e) {
		// document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});
}

$('.slider').slick({
	dots: false,
	infinite: false
});