const fs = require('fs');

function part1() {
	fs.readFile('./input.txt', (err, data) => {
		const freqChange = data.toString().split('\r\n');
		const resultFreq = freqChange.reduce((acc, freq) => {
			return parseInt(acc) + parseInt(freq);
		}, 0);
		console.log(`The resulting frequency is ${resultFreq}.`);
	})
}

part1();

function part2() {
	fs.readFile('./input.txt', (err, data) => {
		const freqChange = data.toString().split('\r\n');
		let startFreq = 0;
		let counter = 0;
		let hashtable = {};
		while (hashtable) {
			startFreq += parseInt(freqChange[counter]);
			freqChange.push(freqChange[counter]);
			if (hashtable[startFreq]) {
				return console.log(`First Duplicate: ${startFreq}`)
			}
			hashtable[startFreq] = true;
			counter ++
		}
	})
}

part2();