(function ($) {
	"use strict";
    $('.counter').counterUp({
		delay: 10,
		time: 1000
	});

   

var swiper = new Swiper(".home1-banner-slider", {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 25,
    slidesPerView: 1,
    centerSlides: true,
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 3000, // Autoplay duration in milliseconds
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".next-1",
        prevEl: ".prev-1",
    },
    pagination: {
        el: ".paginations111",
        clickable: true,
    },
});

new WOW().init();

document.addEventListener("DOMContentLoaded", function(event) {
		
	let offset = 50;
	let circleContainer = document.querySelector(".circle-container");
	let circlePath = document.querySelector('.circle-container path');
	let pathLength = circlePath.getTotalLength();
	circlePath.style.transition = circlePath.style.WebkitTransition = 'none';
	circlePath.style.strokeDasharray = pathLength;
	circlePath.style.strokeDashoffset = pathLength;
	circlePath.getBoundingClientRect();
	circlePath.style.transition = circlePath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

	let updateLoader = () => {

		let scrollTop = window.scrollY;
		let docHeight = document.body.offsetHeight;
		let winHeight = window.innerHeight;
		let height = docHeight - winHeight;
		let progress = pathLength - (scrollTop * pathLength / height);
		circlePath.style.strokeDashoffset = progress;

		if (scrollTop > offset) {
		circleContainer.classList.add("active");
		} else {
		circleContainer.classList.remove("active");
		}
			
	}
	circleContainer.onclick = function(){
	window.scrollTo({ top: 0, behavior: 'smooth'});
	}

	window.onscroll = () => {
	updateLoader();
	}
	updateLoader();
	});

}(jQuery));