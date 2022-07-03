/* eslint-disable no-console */
'use strict';

import fs from 'fs';
import readline from 'readline';

const path = './src/';
const view = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

view.question('Write a file name: ', (fileName) => {
  view.question('Write your content: ', (content) => {
    fs.writeFile(`${path}${fileName}`, content, (error) => {
      if (error) {
        if (error.code === 'EISDIR') {
          console.log("Error, file's name wasn't written");
          return;
        }
      }

      console.log(`Success, ${fileName} file was created`);
    });

    view.close();
  });
});
