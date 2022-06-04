'use strict';

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Please write name file...\n', (answer) => {
  if (!answer.trim().length) {
    // eslint-disable-next-line
    console.log('Wrong name...');
    process.exit();
  }

  rl.question('Please write some content here...\n', (text) => {
    fs.appendFile(`./${answer}.txt`, text, (error) => {
      if (error) {
        // eslint-disable-next-line
        console.log('Oops... something is wrong.', error);
        process.exit();
      }
      // eslint-disable-next-line
      console.log('Success');
      process.exit();
    });
  });
});
