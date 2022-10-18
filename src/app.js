'use strict';

const { appendFileSync } = require('node:fs');
const { createInterface } = require('node:readline');
const { stdin: input, stdout: output, exit } = require('node:process');

const rl = createInterface({
  input,
  output,
});

rl.question('Enter the file name: ', (fileName) => {
  if (!fileName.trim()) {
    throw new Error("You don't enter the correct file name :(");
  }

  rl.question('Enter the content of your file: ', (fileContent) => {
    appendFileSync(`${fileName.trim()}.txt`, fileContent);
    rl.close();
  });
});

rl.on('close', () => {
  // eslint-disable-next-line no-console
  console.log('\nSuccess');
  exit(0);
});
