'use strict';

const fs = require('fs');
const readline = require('readline');

const fileQuestions = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

fileQuestions.question('File name: ', (name) => {
  fileQuestions.question('Content: ', (content) => {
    fs.writeFile(`src/${name}.txt`, `${content}`, (err, data) => {
      if (err) {
        return 'Error';
      }

      return 'Succes';
    });

    fileQuestions.close();
  });
});
