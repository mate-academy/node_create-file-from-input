'use strict';
/* eslint-disable no-console */

const fs = require('fs');
const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Please enter a file name: ', (fileName) => {
  terminal.question('Please enter content for your file: ', (content) => {
    fs.writeFile(`./src/${fileName}.txt`, content, (err) => {
      if (err) {
        console.log(`Error: ${err}`);
      }

      terminal.close();
      console.log('Success');
    });
  });
});
