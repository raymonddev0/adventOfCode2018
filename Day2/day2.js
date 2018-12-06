const fs = require('fs');

function part1() {
	fs.readFile('./input.txt', (err, data) => {				
		let counter2 = 0;
		let counter3 = 0;
		const array = data.toString().split('\r\n').map(string=>{
			let stringSort = string.split('').sort().join('');
			let repeat2 = /(?:^|(.)(?!\1))(.)\2(?!\2)/;
			let repeat3 = /(?:^|(.)(?!\1))(.)\2\2(?!\2)/;
			if (repeat2.test(stringSort)){counter2++}
			if (repeat3.test(stringSort)){counter3++}
		})
	console.log(`The checksum is ${counter2*counter3}.`);	
	})
}

part1();

function part2() {
	fs.readFile('./input.txt', (err, data) => {
		let answerArray= [];
		let arrayID = data.toString().split('\r\n');
		const compareID = (controlID, remainingIDs) => {
			const holdingObject = {
				holdingArray: [],
				hits:0
			};

			remainingIDs.forEach(id => {
				[...id].forEach((char, i)=>{
					if (char === controlID[i]) 
					{
						holdingObject.holdingArray.push(char)
					}
				})	
				answerArray.push({correctID: holdingObject.holdingArray, hits: holdingObject.holdingArray.length});
				holdingObject.holdingArray=[];
				holdingObject.hits=0;
			});	
		}

		while(arrayID.length > 0){
        	compareID(arrayID.shift(), arrayID);
    	}
    	const answer = answerArray.sort((a,b)=>b.hits-a.hits).slice(0,1).pop();
		console.log(`The common letters in the correct box IDs: ${answer.correctID.join("")}.`);
	})	
}

part2();