/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const makeFile = (fileName) => {
  rl.question('Please enter content: ', (userInput) => {
    if (!userInput.trim()) {
      console.log('Pleas enter some content to file');
      makeFile();
    } else {
      fs.writeFile(`./${fileName}.txt`, userInput, (err) => {
        if (err) {
          console.log(err);
        }
        console.log('Success');
        rl.close();
      });
    }
  });
};

(function newFile() {
  const forbiddenSymbols = [ '<', '>', ':', '\\', '|', '/', '?' ];
  let fileName = '';

  rl.question('Please enter filename: ', (userInput) => {
    if (!userInput.trim() || userInput.split('')
      .some(char => forbiddenSymbols.includes(char))) {
      console.log(`Pleas enter right name for file,
      don't use these symbols: ${forbiddenSymbols}`);

      newFile();
    } else {
      fileName = userInput;
    };

    makeFile(fileName);
  });
}());
