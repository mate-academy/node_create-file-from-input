'use strict';
import readline from 'readline';
import * as fs from 'fs';

// - When the user completes interaction, your app must create a file and output `Success` or `Error` depending on the result of creation.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileNameCallback = (userTitleInput) => {
  const title = userTitleInput;

  if (title) {
    rl.question(`enter the content: `, (userContentInput) => {
      const content = userContentInput;

      fs.writeFile(`./src/${title}`, content, (err) => {
        if (err) {
          console.log(err);
          return;
        }
      });
      rl.close();
    });
  } else {
    console.log('write correct title');
    rl.question(`enter the file name: `, fileNameCallback);
  }
}

rl.question(`enter the file name: `, fileNameCallback);
