'use strict';

const readline = require('readline');
const fs = require('fs');
const { stdin, stdout } = require('process');

const cli = readline.createInterface({
  input: stdin,
  output: stdout,
});

cli.question('enter a file name pls\n', (name) => {
  cli.question('enter a content pls\n', (content) => {
    fs.writeFile(name, content, (err) => {
      if (err) {
        cli.write(err.message);
        process.kill(0);
      }
      cli.write('success');
      process.kill(0);
    });
  });
});
