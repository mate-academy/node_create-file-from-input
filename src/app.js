/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const fs = require('fs');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Please enter a file name ', (name) => {
  terminal.question('Please enter a file description ', (description) => {
    fs.writeFile(`./${name}.txt`, description, (err) => {
      if (err) {
        process.stdout.write('Error');

        return;
      };

      process.stdout.write('Success');
    });

    terminal.close();
  });
});
