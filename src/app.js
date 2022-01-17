'use strict';

const readline = require('readline');
const fs = require('fs');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Enter file name: ', (inpNameFile) => {
  const fileName = inpNameFile;

  terminal.question('Enter the content: ', (inpContent) => {
    const content = inpContent;

    fs.appendFile(`./src/${fileName}.txt`, `${content}\n`, function(error) {
      if (error) {
        throw error;
      } // если возникла ошибка

      // eslint-disable-next-line no-console
      console.log('Запись файла завершена. Содержимое файла:');

      const data = fs.readFileSync(`./src/${fileName}.txt`, 'utf8');

      // eslint-disable-next-line no-console
      console.log(data); // выводим считанные данные
    });

    terminal.close();
  });
});
