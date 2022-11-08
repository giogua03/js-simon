let nRandoms = 5;
let minRandom = 1;
let maxRandom = 100;
let timeToHide = 1 * 7000;

const eleNumbers = document.querySelector('.numbers');

let arrRandoms = getArrRandomIntegers(nRandoms, minRandom, maxRandom);
console.log(arrRandoms);

for (let i = 0; i < arrRandoms.length; i++) {
	eleNumbers.innerHTML += `<div class="number">${arrRandoms[i]}</div>`;
}

setTimeout(hideNumbers, timeToHide);
setTimeout(finishGame, timeToHide + 100);

function hideNumbers() {
	eleNumbers.innerHTML = '';
}

function finishGame() {
	const userNumbers = askNumbers();
	console.log(userNumbers);
	const guessedIndexes = verifyNumbers(arrRandoms, userNumbers);
	console.log(guessedIndexes);
	sayScore(arrRandoms, guessedIndexes);
}

function askNumbers() {
	const inputUser = prompt('Dammi i numeri separati da spazio: '); 
	const arrInputUser = inputUser.split(' ');
	
	for (let i = 0; i < arrInputUser.length; i++) {
		arrInputUser[i] = parseInt(arrInputUser[i]);
	}
	return arrInputUser;
}

function verifyNumbers(arr1, arr2) {
	const arrGuessedIndexes = [];
	for (let i = 0; i < arr1.length; i++) {
		
		if (arr1[i] == arr2[i]) {
			arrGuessedIndexes.push(i);
		}
	}
	return arrGuessedIndexes;
}

function sayScore(arrValues, arrIndexes) {
	let msg;
	if (arrIndexes.length === 0) {
		msg = 'loser';
	} else if (arrIndexes.length === arrValues.length) {
		msg = 'hai vinto ';
	} else {
		msg = `hai indovinato ${arrIndexes.length}`;
	}
	console.log(msg);
	alert(msg);
}

function getArrRandomIntegers(n, min, max) {
	const arrRandoms = [];
	for (let i = 0; i < n; i++) {
		arrRandoms.push(getRandomInteger(min, max))
	}
	return arrRandoms;
}

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}