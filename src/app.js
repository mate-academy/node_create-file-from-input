'use strict';

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function createFile() {
  rl.question('Enter file name: ', (fileName) => {
    if (!fileName) {
      global.console.log('Enter correct file name: ');
      createFile();
    }

    rl.question('Enter your content: ', (content) => {
      rl.close();

      fs.writeFile(`./src/${fileName}.txt`, content, (error) => {
        if (error) {
          global.console.log('Error');
        } else {
          global.console.log('Success');
        }
      });
    });
  });
}

createFile();
