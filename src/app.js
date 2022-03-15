"use strict";
const { createInterface } = require("readline");
const { writeFile } = require("fs");

const terminal = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ERROR_MASSAGE = "Error";
const SUCCES_MESSAGE = "Succes";
const ERROR_MESSAGE_ON_EMPTY_NAME = "Error! Name of folder can't be empty";

terminal.question("Input file name, please!", (name) => {
  if (!name.trim().length) {
    console.log(ERROR_MESSAGE_ON_EMPTY_NAME); // IMHO - folder name can't be empty
    return terminal.close();
  }
  terminal.question("Input file content, please!", (content) => {
    terminal.close();

    writeFile(`./src/${name}.txt`, content, (err) => {
      if (err) {
        return console.log(ERROR_MASSAGE, err);
      }

      console.log(SUCCES_MESSAGE);
    });
  });
});
