'use strict';

const rl = require('readline');
const fs = require('fs');

const terminal = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Enter file name: ', (fileName) => {
  terminal.question('Add content: ', (content) => {
    fs.writeFile(`./src/${fileName}.txt`, content, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);

        return;
      }
      // eslint-disable-next-line no-console
      console.log('File created');
    });

    terminal.close();
  });
});
