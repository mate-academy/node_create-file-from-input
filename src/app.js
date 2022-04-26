/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter file name: ', (name) => {
  rl.question('What write this? ', (content) => {
    fs.writeFile(name, content, (err, data) => {
      if (err) {
        console.log('Error');
      } else {
        console.log('Success');
      }
      rl.close();
    });
  });
});
