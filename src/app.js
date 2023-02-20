/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const { question } = require('./question');

const main = async() => {
  let filename = '';
  let content = '';

  while (!filename.length) {
    filename = await question('Filename: ');
  }

  while (!content.length) {
    content = await question('Content: ');
  }

  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.log('Error');

      return;
    }

    console.log('Success');
  });
};

main();
