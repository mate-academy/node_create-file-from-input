'use strict';

async function promptFileName(terminal) {
  const name = await terminal.question('Enter the name of a file\n');

  return name;
}

async function promptFileContent(terminal) {
  const content = await terminal.question('Enter file content\n');

  return content;
}

module.exports = {
  promptFileName,
  promptFileContent,
};
