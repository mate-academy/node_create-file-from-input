'use strict';
/* eslint-disable no-console */

const readline = require('readline/promises').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fs = require('fs');

async function main() {
  try {
    const fileName = await readline.question('Enter file name: ');
    const fileContent = await readline.question('Enter file content: ');

    readline.close();

    fs.writeFile(fileName, fileContent, (error) => {
      if (error) {
        console.error('Error: ', error);
      }

      console.log('Success');
    });
  } catch (error) {
    console.error('Error: ', error);
  }
}

main();
