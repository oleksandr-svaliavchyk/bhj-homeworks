let cookie = document.getElementById('cookie');
let clicker__counter = document.getElementById('clicker__counter');
let speed__counter = document.getElementById('speed__counter');

let counter = clicker__counter.textContent;
let previousCall, call;


cookie.onclick = () => {
	(counter % 2 === 1) ? cookie.width += 25 : cookie.width -= 25;
	counter++
	clicker__counter.textContent = counter;
	call = Date.now();
	// alert(call);
	if (previousCall) {
		let rez = call - previousCall;  // Разница в миллисекундах
		rez /= 1000;	//Перевод в секунды
		rez = 1 / rez; //скорость клика (кол-во кликов за 1 секнду)
		speed__counter.textContent = rez;
	}
	previousCall = call;

}

// Спасибо за проверку, за уроки и просто за то, что остаетесь с нами в довольно не легкое для всех время.