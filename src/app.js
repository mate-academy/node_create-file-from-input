'use strict';

const redline = require('readline');
const fs = require('fs');

let name = '';
let text = '';

const terminal = redline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

(function enterFileName() {
  terminal.question('enter file name: ', (input) => {
    name = input;
    enterText();
  });
}());

function enterText() {
  terminal.question('enter text file: ', (input) => {
    text = input;
    result();
    terminal.close();
  });
}

function result() {
  if (name !== '') {
    fs.writeFile(`./${name}.txt`, text, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log('ERROR');
      } else {
        // eslint-disable-next-line no-console
        console.log('SUCCES');
      }
    });
  }
};
