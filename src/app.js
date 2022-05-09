'use strict';

const readline = require('readline');
const fs = require('fs');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

(async() => {
  const nameFile = await new Promise(resolve => {
    terminal.question('How name file? ', (name) => {
      resolve(name);
    });
  });

  const contentFile = await new Promise(resolve => {
    terminal.question('What content? ', (content) => {
      resolve(content);
    });
  });

  terminal.close();

  fs.writeFile(`./src/${nameFile}.txt`, contentFile, (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('Error');
    } else {
      // eslint-disable-next-line no-console
      console.log('Success');
    }
  });
})();
