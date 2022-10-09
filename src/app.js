'use strict';

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let pathFile = '';
let contentFile = '';

const question1 = () => {
  return new Promise((resolve) => {
    rl.question('Please enter the file name ', (answer) => {
      if (answer.length === 0) {
        console.log('Error');
        rl.close();

        return;
      };

      pathFile = answer;
      resolve();
    });
  });
};

const question2 = () => {
  return new Promise((resolve) => {
    rl.question('Please enter the content ', (answer) => {
      contentFile = answer;
      resolve();
    });
  });
};

const result = async() => {
  await question1();
  await question2();

  fs.writeFile(`./${pathFile}`, `${contentFile}`, (err) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log('Error');
    }

    // eslint-disable-next-line no-console
    console.log('Success');
  });

  rl.close();
};

result();
