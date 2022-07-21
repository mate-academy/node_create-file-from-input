'use strict';

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Please enter the name of the file: ', (fileName) => {
  rl.question('Please enter the content of the file: ', (fileContent) => {
    fs.writeFile(fileName, fileContent, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);

        return;
      }

      // eslint-disable-next-line no-console
      console.log(`Succes!! Your file ${fileName}`
      + ` with content ${fileContent} was created`);
    });

    rl.close();
  });
});
