/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function createFile() {
  rl.question('Type file name -> ', (fileName) => {
    if (!fileName) {
      console.log('Type correct file nmae');
      createFile();
    }

    rl.question('Type your content -> ', (content) => {
      rl.close();

      fs.writeFile(`./src/${fileName}.txt`, content, (error) => {
        if (error) {
          console.log('Error');
        } else {
          console.log('Success');
        }
      });
    });
  });
}

createFile();
