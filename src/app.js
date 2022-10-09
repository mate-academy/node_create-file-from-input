/* eslint-disable no-console */
'use strict';

const inquirer = require('inquirer');
const fs = require('fs');

const main = async() => {
  const fileData = await inquirer.prompt([
    {
      name: 'fileName',
      type: 'input',
      message: 'write file name',
      validate: (str) => str.length > 0,
    },
    {
      name: 'contant',
      type: 'input',
      message: 'wrint file contant',
    },
  ]);

  console.log(fileData);

  fs.writeFile(
    `./src/${fileData.fileName}.txt`,
    fileData.contant,
    (err, data) => {
      if (err) {
        console.log('Error');

        return;
      }

      console.log('Success');
    }
  );
};

main();
