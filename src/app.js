'use strict';

const readline = require('readline');
const { created } = require('./created');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Enter name: ', (nameFile) => {
  terminal.question('Enter content: ', (content) => {
    created(nameFile, content);

    terminal.close();
  });
});
