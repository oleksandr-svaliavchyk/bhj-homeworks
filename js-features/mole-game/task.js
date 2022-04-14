getHole = index => document.getElementById(`hole${index}`);
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let countDead, countLost;
function endGame(text) {
	dead.textContent = 0;
	lost.textContent = 0;
	alert(text);
}

for (let i = 1; i < 10; i++) {
	let hole = getHole(i);
	console.log(hole.className);
	hole.onclick = () => {
		if (hole.className.includes('hole_has-mole')) {
			countDead = dead.textContent;
			countDead++;
			dead.textContent = countDead;
		} else {
			countLost = lost.textContent;
			countLost++;
			lost.textContent = countLost;
		}
		if (countDead === 10) {
			endGame('Вы победили кротов!');
		}
		if (countLost === 5) {
			endGame('Вы проиграли, Кроты победили!');
		}
	}
}

