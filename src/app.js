'use strict';

const fs = require('fs');
const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Hi! Please enter file name:? ', (name) => {
  rl.question('What to put inside? ', (content) => {
    fs.writeFile(name, content, (err) => {
      // eslint-disable-next-line no-console
      console.log(err ? 'Error' : 'Done');
      rl.close();
    });
  });
});