let cookie = document.getElementById('cookie');
let clicker__counter = document.getElementById('clicker__counter');
let speed__counter = document.getElementById('speed__counter');

let counter = clicker__counter.textContent;
let time_speed = 0;
let interval;
let previousCall;

cookie.onclick = () => {
	if (previousCall) {
		speed__counter.textContent = ((new Date - previousCall) / 100);
	}
	(counter % 2 === 1) ? cookie.width += 25 : cookie.width -= 25;
	counter++
	clicker__counter.textContent = counter;
	previousCall = new Date;
}