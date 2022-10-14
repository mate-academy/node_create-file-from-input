/* eslint-disable no-console */
'use strict';

const rl = require('readline');
const fs = require('fs');

const terminal = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let filePath = '';

console.log('File creator V.0.1 \n');
console.log('Enter file name \n');

terminal.on('line', (userInput) => {
  const regex = /^[\w,\s-]+\.[A-Za-z]+$/gi;
  const trimmedInput = userInput.trim();

  if (filePath !== '') {
    fs.writeFile(`./src/${filePath}`, userInput, (err) => {
      if (err) {
        console.log('Error');
      }

      console.log('Success');
      terminal.close();
    });
  }

  if (filePath === '' && regex.test(trimmedInput)) {
    filePath = userInput;

    console.log('Please add file content');
  } else if (filePath === '') {
    console.log('Write correct file path');
  }
});
