'use strict';

import readline from 'readline';
import fs from 'fs';

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

terminal.question('Input the filename\n', (name) => {
  const fileName = name;

  terminal.question('Input the content of the file\n', (content) => {
    fs.writeFile(fileName, content, (err, data) => {
      if (err) {
        console.log("Error: " + error);
      }
      console.log("Success. Content " + content.slice(0, 5) + "... is written to the file " + fileName);
      terminal.close();
    })
  })
});
