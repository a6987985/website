'use strict';

window.onload = function () {

	var imgGroup = document.querySelector('.img-group');
	var start = document.getElementById('start');
	var pause = document.getElementById('pause');
	var next = document.getElementById('next');
	var pre = document.getElementById('pre');
	var index = 0;
	start.addEventListener('click', function () {
		imgGroup.classList.remove('group-transform');
		imgGroup.classList.add('group-animation');
		imgGroup.style.animationPlayState = 'running';
	});

	pause.addEventListener('click', function () {
		imgGroup.classList.remove('group-transform');
		imgGroup.classList.add('group-animation');
		imgGroup.style.animationPlayState = 'paused';
	});

	function preP() {
		index--;
		return index;
	}

	function nextP() {
		index++;
		return index;
	}

	pre.addEventListener('click', function () {
		imgGroup.classList.remove('group-animation');
		imgGroup.classList.add('group-transform');
		imgGroup.style.transform = 'rotateY(' + preP() * 72 + 'deg)';
	});

	next.addEventListener('click', function () {
		imgGroup.classList.remove('group-animation');
		imgGroup.classList.add('group-transform');
		imgGroup.style.transform = 'rotateY(' + nextP() * 72 + 'deg)';
	});
};