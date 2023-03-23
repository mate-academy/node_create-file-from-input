'use strict';

import fs from 'fs'
import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const createFile = () => {
  rl.question('file name: ',(fileName) => {
    rl.question('file content: ',(fileContent) => {
      fs.writeFile(`./${fileName}.txt`, fileContent, (err) => {
        if(err) {
          console.log(`Error: ${err}`)
        } else {
          console.log(`file created with a name of '${fileName}'`)
        }
        rl.close();
      });
    });
  });
}


createFile();
