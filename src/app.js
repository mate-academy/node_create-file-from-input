'use strict';

import fs from 'fs';
import readLine from 'readline';

const terminal = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('provide a file name:', (fileName) => {
  fs.writeFile(`src/${fileName}.txt`, '', () => {});

  terminal.question('Provide the content of the file: ', (content) => {
    fs.appendFile(`src/${fileName}.txt`, `${content}`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('The file has been saved!');
      }
    });
    terminal.close();
  });
});
