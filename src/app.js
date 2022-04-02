/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const fs = require('fs');

const terminal = readline.createInterface(process.stdin, process.stdout);

terminal.question('Enter file name: ', (name) => {
  terminal.question('Enter file content: ', (content) => {
    writeFile(name, content);
    terminal.close();
  });
});

function writeFile(name, data) {
  fs.writeFile(name, data, (error) => {
    if (error) {
      console.log('Error');

      return;
    }
    console.log('Success');
  });
}
