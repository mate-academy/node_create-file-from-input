'use strict';

const readline = require('readline/promises');
const { createFile } = require('./createFile');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  await createFile(terminal);
}

main().then(() => terminal.close());
