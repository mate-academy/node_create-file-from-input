/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function createFileByName() {
  terminal.question('Plz enter file name... ', (name) => {
    if (!name.length) {
      console.log('enter a valid name');
      createFileByName();
    }

    terminal.question('Enter the content... ', (content) => {
      fs.writeFile(`${name}.txt`, content, 'utf8', (err) => {
        if (err) {
          console.log('Error');
        } else {
          console.log('Success');
        }
        terminal.close();
      });
    });
  });
}

createFileByName();
