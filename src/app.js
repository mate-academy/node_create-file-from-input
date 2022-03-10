'use strict';

const { createFile } = require('./fileActions.js');
const readline = require('readline-sync');

const createDialog = async() => {
  const answer = {};

  answer.fileName = readline.question('Please enter a filename:  ');
  answer.content = readline.question('Please enter content:  ');

  createFile(answer.fileName, answer.content);
};

createDialog();
