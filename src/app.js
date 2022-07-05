'use strict';

const readline = require('readline');
const fs = require('fs');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Please enter the name of the file: ', (fileName) => {
  terminal.question('Please enter the content of the file: ', (fileContent) => {
    fs.writeFile(fileName, fileContent, (err) => {
      if (err) {
        // eslint-disable-next-line
        console.log(err);

        return;
      }

      // eslint-disable-next-line
      console.log(`Success! File with name '${fileName}' and content '${fileContent}' was created!`);
    });

    terminal.close();
  });
});
