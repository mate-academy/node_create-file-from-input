'use strict';

exports.question = function(q) {
  const readline = require('readline');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let response;

  rl.setPrompt(q);
  rl.prompt();

  return new Promise((resolve, reject) => {
    rl.on('line', (userInput) => {
      response = userInput;
      rl.close();
    });

    rl.on('close', () => {
      resolve(response);
    });
  });
};
