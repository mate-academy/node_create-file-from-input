'use strict';
/* eslint-disable no-console */

const readline = require('readline');
const fs = require('fs');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Введіть назву файлу\n', (name) => {
  fs.writeFile(`./src/${name}.txt`, '', (err) => {
    if (!err) {
      console.log('Success');
    } else {
      console.log(err);
    }
  });

  terminal.question('Введіть контент файлу\n', (content) => {
    fs.appendFile(`./src/${name}.txt`, content, (err) => {
      if (!err) {
        console.log('Success');
      } else {
        console.log(err);
      }
    });
    terminal.close();
  });
});
