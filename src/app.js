/* eslint-disable no-console */
'use strict';

const fs = require('node:fs');
const readline = require('node:readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  'Enter the file name ',
  'Enter the content ',
];

const answers = [];

(async() => {
  for (const question of questions) {
    const answer = await new Promise(resolve => {
      terminal.question(question, resolve);
    });

    answers.push(answer);
  }

  terminal.close();

  if (answers[0] === '' || answers[1] === '') {
    return console.log('Error');
  } else {
    fs.writeFile(`${answers[0]}.txt`, `${answers[1]}`, (err) => {
      if (err) {
        console.log('Error');
      }

      console.log('Success');
    });
  }
})();
