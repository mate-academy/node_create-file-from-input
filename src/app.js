'use strict';

const readline = require('readline');
const fs = require('fs');

let fileName = '';
let fileContent = '';

const inter = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

inter.question('enter the file name ', (name) => {
	fileName = name;
	inter.question('enter the file content ', (content) => {
		fileContent = content;
		createFile();
    });
});

function createFile() {
	fs.writeFile(`./src/${fileName}.txt`, fileContent, (err, res) => {
		if (err) {
			// eslint-disable-next-line no-console
        	console.log('Error');
		}

		// eslint-disable-next-line no-console
      	console.log('Success');
	});

	inter.close();
}
