'use strict';

const { writeFile } = require('fs');
const readline = require('readline');
// eslint-disable-next-line no-console
const log = console.log;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isValidFilename = (filename) => {
  const rg1 = /^[^\\/:*?"<>|]+$/;
  const rg2 = /^\./;
  const rg3 = /^(nul|prn|con|lpt[0-9]|com[0-9])(\.|$)/i;

  return rg1.test(filename) && !rg2.test(filename) && !rg3.test(filename);
};

const askFilename = () => rl.question('Enter filename: ', filename => {
  if (!isValidFilename(filename)) {
    log('Invalid filename!');
    askFilename();

    return;
  }

  rl.question('Enter content: ', content => {
    writeFile(filename, content, 'utf8', err => {
      if (err) {
        log('Error');
      } else {
        log('Success ');
      }

      process.exit();
    });
  });
});

askFilename();
