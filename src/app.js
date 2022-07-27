'use strict';

const readline = require('readline');
const fs = require('fs');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function input(prompt) {
  return new Promise((resolve, reject) => {
    terminal.question(prompt, (uInput) => {
      resolve(uInput);
    });
  });
}

const main = async() => {
  const fileName = await input('Enter file name: ');
  const content = await input('Enter content: ');

  fs.writeFile(`./src/${fileName}`, content, (err) => {
    if (!err) {
      // eslint-disable-next-line no-console
      console.log('Success');
    } else {
      // eslint-disable-next-line no-console
      console.log('Error');
    }
  });
  terminal.close();
};

main();
