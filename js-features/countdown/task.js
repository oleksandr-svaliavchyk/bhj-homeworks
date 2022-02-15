let lvl_1 = () => {
	let timer = document.getElementById('timer');
	let time = Number(timer.textContent);
	let interval = setInterval(() => {
		if (time > 0) {
			time--;
			timer.textContent = time;
		} else {
			clearInterval(interval);
			alert('Вы победили в конкурсе!');
			location = ('http://www.google.com');
		}
	}, 1000);
}

let lvl_2 = () => {
	let timer = document.getElementById('timer2');
	let [hour, minute, second] = (timer.textContent).split(':');
	let interval = setInterval(() => {
		if (second > 0) {
			second--;
			if (second < 10) {
				second = '0' + second;
			}
			timer.textContent = (`${hour}:${minute}:${second}`);
		} else if (minute > 0) {
			minute = minute;
			minute--;
			second = 59;
			if (minute < 10) {
				minute = '0' + minute;
				timer.textContent = (`${hour}:${minute}:${second}`);
			}
		} else if (hour > 0) {
			hour = hour;
			hour--;
			minute = 59;
			second = 59;
			if (hour < 10) {
				hour = '0' + hour;
				timer.textContent = (`${hour}:${minute}:${second}`);
			}
		} else {
			clearInterval(interval);
			alert('Вы победили в конкурсе!');
			location.assign(google.com);
		}
	}, 1000);

}


lvl_1();
lvl_2();